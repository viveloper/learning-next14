import { Component, ErrorInfo, ReactNode } from 'react';
import { isAxiosError } from 'axios';

type Props = {
  children?: ReactNode;
};
type State = {
  hasError: boolean;
  rethrow: boolean;
  error: Error | null;
};

export class ApiErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, rethrow: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    if (!isAxiosError(error)) {
      return {
        hasError: true,
        rethrow: true,
        error,
      };
    }
    return {
      hasError: true,
      rethrow: false,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    if (isAxiosError(error)) {
      alert(error.response?.data.errorMessage);
    }
  }

  render() {
    if (this.state.rethrow) {
      throw this.state.error;
    }
    if (this.state.hasError) {
      return <div>hasError</div>;
    }

    return this.props.children;
  }
}
