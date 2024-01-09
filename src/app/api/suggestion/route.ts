import { sleep } from '@/utils/sleep';
import { NextRequest } from 'next/server';

export type SuggestionType = {
  id: number;
  word: string;
};

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const word = searchParams.get('word');

  await sleep(200);

  if (!word) return Response.json([]);
  return Response.json(DATA.filter((item) => item.word.includes(word)));
}

const DATA: SuggestionType[] = [
  { id: 1, word: 'respect' },
  { id: 2, word: 'milk' },
  { id: 3, word: 'thin' },
  { id: 4, word: 'pull' },
  { id: 5, word: 'gather' },
  { id: 6, word: 'seeing' },
  { id: 7, word: 'come' },
  { id: 8, word: 'soldier' },
  { id: 9, word: 'education' },
  { id: 10, word: 'pie' },
  { id: 11, word: 'tales' },
  { id: 12, word: 'species' },
  { id: 13, word: 'globe' },
  { id: 14, word: 'outside' },
  { id: 15, word: 'post' },
  { id: 16, word: 'television' },
  { id: 17, word: 'strip' },
  { id: 18, word: 'neck' },
  { id: 19, word: 'whose' },
  { id: 20, word: 'leaf' },
  { id: 21, word: 'plates' },
  { id: 22, word: 'zoo' },
  { id: 23, word: 'wolf' },
  { id: 24, word: 'thread' },
  { id: 25, word: 'leg' },
  { id: 26, word: 'announced' },
  { id: 27, word: 'soldier' },
  { id: 28, word: 'has' },
  { id: 29, word: 'your' },
  { id: 30, word: 'plain' },
  { id: 31, word: 'welcome' },
  { id: 32, word: 'naturally' },
  { id: 33, word: 'twice' },
  { id: 34, word: 'monkey' },
  { id: 35, word: 'supper' },
  { id: 36, word: 'lift' },
  { id: 37, word: 'business' },
  { id: 38, word: 'seen' },
  { id: 39, word: 'gray' },
  { id: 40, word: 'height' },
  { id: 41, word: 'rubbed' },
  { id: 42, word: 'sang' },
  { id: 43, word: 'knife' },
  { id: 44, word: 'bad' },
  { id: 45, word: 'care' },
  { id: 46, word: 'block' },
  { id: 47, word: 'jump' },
  { id: 48, word: 'several' },
  { id: 49, word: 'vegetable' },
  { id: 50, word: 'develop' },
  { id: 51, word: 'ship' },
  { id: 52, word: 'pure' },
  { id: 53, word: 'per' },
  { id: 54, word: 'different' },
  { id: 55, word: 'edge' },
  { id: 56, word: 'at' },
  { id: 57, word: 'cell' },
  { id: 58, word: 'obtain' },
  { id: 59, word: 'grown' },
  { id: 60, word: 'port' },
  { id: 61, word: 'yesterday' },
  { id: 62, word: 'furniture' },
  { id: 63, word: 'declared' },
  { id: 64, word: 'president' },
  { id: 65, word: 'definition' },
  { id: 66, word: 'small' },
  { id: 67, word: 'half' },
  { id: 68, word: 'worse' },
  { id: 69, word: 'blew' },
  { id: 70, word: 'oldest' },
  { id: 71, word: 'recall' },
  { id: 72, word: 'either' },
  { id: 73, word: 'writing' },
  { id: 74, word: 'farmer' },
  { id: 75, word: 'total' },
  { id: 76, word: 'class' },
  { id: 77, word: 'here' },
  { id: 78, word: 'fair' },
  { id: 79, word: 'cowboy' },
  { id: 80, word: 'reach' },
  { id: 81, word: 'whom' },
  { id: 82, word: 'mother' },
  { id: 83, word: 'composed' },
  { id: 84, word: 'please' },
  { id: 85, word: 'earlier' },
  { id: 86, word: 'himself' },
  { id: 87, word: 'but' },
  { id: 88, word: 'property' },
  { id: 89, word: 'stepped' },
  { id: 90, word: 'beneath' },
  { id: 91, word: 'modern' },
  { id: 92, word: 'north' },
  { id: 93, word: 'century' },
  { id: 94, word: 'blood' },
  { id: 95, word: 'topic' },
  { id: 96, word: 'hung' },
  { id: 97, word: 'brave' },
  { id: 98, word: 'terrible' },
  { id: 99, word: 'told' },
  { id: 100, word: 'tip' },
  { id: 101, word: 'salmon' },
  { id: 102, word: 'women' },
  { id: 103, word: 'belong' },
  { id: 104, word: 'me' },
  { id: 105, word: 'vast' },
  { id: 106, word: 'something' },
  { id: 107, word: 'wing' },
  { id: 108, word: 'difficult' },
  { id: 109, word: 'thy' },
  { id: 110, word: 'fewer' },
  { id: 111, word: 'red' },
  { id: 112, word: 'surprise' },
  { id: 113, word: 'with' },
  { id: 114, word: 'mathematics' },
  { id: 115, word: 'voice' },
  { id: 116, word: 'night' },
  { id: 117, word: 'sitting' },
  { id: 118, word: 'find' },
  { id: 119, word: 'carry' },
  { id: 120, word: 'according' },
  { id: 121, word: 'degree' },
  { id: 122, word: 'customs' },
  { id: 123, word: 'yellow' },
  { id: 124, word: 'movie' },
  { id: 125, word: 'broken' },
  { id: 126, word: 'her' },
  { id: 127, word: 'smile' },
  { id: 128, word: 'choose' },
  { id: 129, word: 'youth' },
  { id: 130, word: 'pig' },
  { id: 131, word: 'press' },
  { id: 132, word: 'chest' },
  { id: 133, word: 'industrial' },
  { id: 134, word: 'one' },
  { id: 135, word: 'easy' },
  { id: 136, word: 'theory' },
  { id: 137, word: 'upon' },
  { id: 138, word: 'edge' },
  { id: 139, word: 'else' },
  { id: 140, word: 'got' },
  { id: 141, word: 'him' },
  { id: 142, word: 'curious' },
  { id: 143, word: 'rubber' },
  { id: 144, word: 'pen' },
  { id: 145, word: 'fruit' },
  { id: 146, word: 'origin' },
  { id: 147, word: 'means' },
  { id: 148, word: 'soil' },
  { id: 149, word: 'earlier' },
  { id: 150, word: 'mathematics' },
  { id: 151, word: 'slabs' },
  { id: 152, word: 'lady' },
  { id: 153, word: 'world' },
  { id: 154, word: 'pass' },
  { id: 155, word: 'plastic' },
  { id: 156, word: 'kind' },
  { id: 157, word: 'compound' },
  { id: 158, word: 'merely' },
  { id: 159, word: 'mysterious' },
  { id: 160, word: 'onto' },
  { id: 161, word: 'drink' },
  { id: 162, word: 'were' },
  { id: 163, word: 'like' },
  { id: 164, word: 'studying' },
  { id: 165, word: 'welcome' },
  { id: 166, word: 'battle' },
  { id: 167, word: 'hurried' },
  { id: 168, word: 'indeed' },
  { id: 169, word: 'these' },
  { id: 170, word: 'rest' },
  { id: 171, word: 'as' },
  { id: 172, word: 'industrial' },
  { id: 173, word: 'travel' },
  { id: 174, word: 'top' },
  { id: 175, word: 'public' },
  { id: 176, word: 'hang' },
  { id: 177, word: 'voyage' },
  { id: 178, word: 'represent' },
  { id: 179, word: 'paid' },
  { id: 180, word: 'street' },
  { id: 181, word: 'table' },
  { id: 182, word: 'stood' },
  { id: 183, word: 'vowel' },
  { id: 184, word: 'buffalo' },
  { id: 185, word: 'every' },
  { id: 186, word: 'uncle' },
  { id: 187, word: 'percent' },
  { id: 188, word: 'getting' },
  { id: 189, word: 'brush' },
  { id: 190, word: 'secret' },
  { id: 191, word: 'relationship' },
  { id: 192, word: 'finger' },
  { id: 193, word: 'blanket' },
  { id: 194, word: 'which' },
  { id: 195, word: 'sense' },
  { id: 196, word: 'ear' },
  { id: 197, word: 'root' },
  { id: 198, word: 'current' },
  { id: 199, word: 'bottle' },
  { id: 200, word: 'common' },
  { id: 201, word: 'mainly' },
  { id: 202, word: 'rising' },
  { id: 203, word: 'activity' },
  { id: 204, word: 'run' },
  { id: 205, word: 'silence' },
  { id: 206, word: 'positive' },
  { id: 207, word: 'range' },
  { id: 208, word: 'sign' },
  { id: 209, word: 'donkey' },
  { id: 210, word: 'able' },
  { id: 211, word: 'sea' },
  { id: 212, word: 'movie' },
  { id: 213, word: 'mission' },
  { id: 214, word: 'seven' },
  { id: 215, word: 'high' },
  { id: 216, word: 'paint' },
  { id: 217, word: 'week' },
  { id: 218, word: 'eight' },
  { id: 219, word: 'famous' },
  { id: 220, word: 'including' },
  { id: 221, word: 'plant' },
  { id: 222, word: 'voyage' },
  { id: 223, word: 'very' },
  { id: 224, word: 'real' },
  { id: 225, word: 'dry' },
  { id: 226, word: 'alphabet' },
  { id: 227, word: 'stronger' },
  { id: 228, word: 'grade' },
  { id: 229, word: 'note' },
  { id: 230, word: 'aloud' },
  { id: 231, word: 'skin' },
  { id: 232, word: 'wheat' },
  { id: 233, word: 'ill' },
  { id: 234, word: 'graph' },
  { id: 235, word: 'aboard' },
  { id: 236, word: 'try' },
  { id: 237, word: 'honor' },
  { id: 238, word: 'desk' },
  { id: 239, word: 'newspaper' },
  { id: 240, word: 'guide' },
  { id: 241, word: 'trip' },
  { id: 242, word: 'voyage' },
  { id: 243, word: 'which' },
  { id: 244, word: 'facing' },
  { id: 245, word: 'crack' },
  { id: 246, word: 'depth' },
  { id: 247, word: 'enemy' },
  { id: 248, word: 'telephone' },
  { id: 249, word: 'traffic' },
  { id: 250, word: 'addition' },
  { id: 251, word: 'bring' },
  { id: 252, word: 'appropriate' },
  { id: 253, word: 'his' },
  { id: 254, word: 'score' },
  { id: 255, word: 'burn' },
  { id: 256, word: 'ourselves' },
  { id: 257, word: 'hour' },
  { id: 258, word: 'per' },
  { id: 259, word: 'common' },
  { id: 260, word: 'range' },
  { id: 261, word: 'actually' },
  { id: 262, word: 'frighten' },
  { id: 263, word: 'ordinary' },
  { id: 264, word: 'social' },
  { id: 265, word: 'changing' },
  { id: 266, word: 'quietly' },
  { id: 267, word: 'space' },
  { id: 268, word: 'she' },
  { id: 269, word: 'track' },
  { id: 270, word: 'across' },
  { id: 271, word: 'new' },
  { id: 272, word: 'dress' },
  { id: 273, word: 'pen' },
  { id: 274, word: 'wonderful' },
  { id: 275, word: 'ran' },
  { id: 276, word: 'main' },
  { id: 277, word: 'compass' },
  { id: 278, word: 'else' },
  { id: 279, word: 'develop' },
  { id: 280, word: 'day' },
  { id: 281, word: 'function' },
  { id: 282, word: 'stock' },
  { id: 283, word: 'leg' },
  { id: 284, word: 'hang' },
  { id: 285, word: 'earlier' },
  { id: 286, word: 'failed' },
  { id: 287, word: 'species' },
  { id: 288, word: 'sweet' },
  { id: 289, word: 'pictured' },
  { id: 290, word: 'percent' },
  { id: 291, word: 'traffic' },
  { id: 292, word: 'shoe' },
  { id: 293, word: 'poem' },
  { id: 294, word: 'battle' },
  { id: 295, word: 'wear' },
  { id: 296, word: 'giving' },
  { id: 297, word: 'ancient' },
  { id: 298, word: 'number' },
  { id: 299, word: 'command' },
  { id: 300, word: 'daughter' },
  { id: 301, word: 'fly' },
  { id: 302, word: 'heard' },
  { id: 303, word: 'package' },
  { id: 304, word: 'now' },
  { id: 305, word: 'any' },
  { id: 306, word: 'who' },
  { id: 307, word: 'arrow' },
  { id: 308, word: 'sold' },
  { id: 309, word: 'all' },
  { id: 310, word: 'out' },
  { id: 311, word: 'hospital' },
  { id: 312, word: 'careful' },
  { id: 313, word: 'continued' },
  { id: 314, word: 'personal' },
  { id: 315, word: 'another' },
  { id: 316, word: 'gone' },
  { id: 317, word: 'leave' },
  { id: 318, word: 'individual' },
  { id: 319, word: 'knew' },
  { id: 320, word: 'form' },
  { id: 321, word: 'successful' },
  { id: 322, word: 'shape' },
  { id: 323, word: 'average' },
  { id: 324, word: 'claws' },
  { id: 325, word: 'cool' },
  { id: 326, word: 'choice' },
  { id: 327, word: 'guard' },
  { id: 328, word: 'war' },
  { id: 329, word: 'degree' },
  { id: 330, word: 'moving' },
  { id: 331, word: 'so' },
  { id: 332, word: 'hide' },
  { id: 333, word: 'of' },
  { id: 334, word: 'upper' },
  { id: 335, word: 'page' },
  { id: 336, word: 'try' },
  { id: 337, word: 'program' },
  { id: 338, word: 'rays' },
  { id: 339, word: 'room' },
  { id: 340, word: 'such' },
  { id: 341, word: 'throat' },
  { id: 342, word: 'dig' },
  { id: 343, word: 'practical' },
  { id: 344, word: 'clay' },
  { id: 345, word: 'sky' },
  { id: 346, word: 'fix' },
  { id: 347, word: 'hello' },
  { id: 348, word: 'storm' },
  { id: 349, word: 'knife' },
  { id: 350, word: 'statement' },
  { id: 351, word: 'wind' },
  { id: 352, word: 'shorter' },
  { id: 353, word: 'orbit' },
  { id: 354, word: 'climb' },
  { id: 355, word: 'pick' },
  { id: 356, word: 'government' },
  { id: 357, word: 'flew' },
  { id: 358, word: 'chamber' },
  { id: 359, word: 'realize' },
  { id: 360, word: 'slide' },
  { id: 361, word: 'anybody' },
  { id: 362, word: 'experiment' },
  { id: 363, word: 'stems' },
  { id: 364, word: 'wise' },
  { id: 365, word: 'apart' },
  { id: 366, word: 'tell' },
  { id: 367, word: 'ants' },
  { id: 368, word: 'queen' },
  { id: 369, word: 'fire' },
  { id: 370, word: 'order' },
  { id: 371, word: 'pick' },
  { id: 372, word: 'bat' },
  { id: 373, word: 'stared' },
  { id: 374, word: 'its' },
  { id: 375, word: 'thumb' },
  { id: 376, word: 'enemy' },
  { id: 377, word: 'rest' },
  { id: 378, word: 'too' },
  { id: 379, word: 'direction' },
  { id: 380, word: 'angle' },
  { id: 381, word: 'loss' },
  { id: 382, word: 'darkness' },
  { id: 383, word: 'stems' },
  { id: 384, word: 'matter' },
  { id: 385, word: 'roar' },
  { id: 386, word: 'sell' },
  { id: 387, word: 'factory' },
  { id: 388, word: 'fifteen' },
  { id: 389, word: 'snow' },
  { id: 390, word: 'block' },
  { id: 391, word: 'per' },
  { id: 392, word: 'upper' },
  { id: 393, word: 'without' },
  { id: 394, word: 'them' },
  { id: 395, word: 'direction' },
  { id: 396, word: 'smallest' },
  { id: 397, word: 'directly' },
  { id: 398, word: 'atmosphere' },
  { id: 399, word: 'composition' },
  { id: 400, word: 'empty' },
  { id: 401, word: 'hurry' },
  { id: 402, word: 'golden' },
  { id: 403, word: 'neighbor' },
  { id: 404, word: 'show' },
  { id: 405, word: 'army' },
  { id: 406, word: 'driving' },
  { id: 407, word: 'worker' },
  { id: 408, word: 'southern' },
  { id: 409, word: 'kids' },
  { id: 410, word: 'bring' },
  { id: 411, word: 'not' },
  { id: 412, word: 'medicine' },
  { id: 413, word: 'about' },
  { id: 414, word: 'follow' },
  { id: 415, word: 'one' },
  { id: 416, word: 'mind' },
  { id: 417, word: 'pond' },
  { id: 418, word: 'plus' },
  { id: 419, word: 'general' },
  { id: 420, word: 'thumb' },
  { id: 421, word: 'strength' },
  { id: 422, word: 'dress' },
  { id: 423, word: 'knowledge' },
  { id: 424, word: 'sheep' },
  { id: 425, word: 'cry' },
  { id: 426, word: 'tears' },
  { id: 427, word: 'baseball' },
  { id: 428, word: 'mouth' },
  { id: 429, word: 'upward' },
  { id: 430, word: 'honor' },
  { id: 431, word: 'truck' },
  { id: 432, word: 'occasionally' },
  { id: 433, word: 'importance' },
  { id: 434, word: 'remain' },
  { id: 435, word: 'bicycle' },
  { id: 436, word: 'few' },
  { id: 437, word: 'desk' },
  { id: 438, word: 'fight' },
  { id: 439, word: 'product' },
  { id: 440, word: 'shown' },
  { id: 441, word: 'prize' },
  { id: 442, word: 'go' },
  { id: 443, word: 'canal' },
  { id: 444, word: 'syllable' },
  { id: 445, word: 'applied' },
  { id: 446, word: 'captured' },
  { id: 447, word: 'suggest' },
  { id: 448, word: 'regular' },
  { id: 449, word: 'horse' },
  { id: 450, word: 'degree' },
  { id: 451, word: 'waste' },
  { id: 452, word: 'ourselves' },
  { id: 453, word: 'wave' },
  { id: 454, word: 'audience' },
  { id: 455, word: 'cost' },
  { id: 456, word: 'practice' },
  { id: 457, word: 'idea' },
  { id: 458, word: 'judge' },
  { id: 459, word: 'lungs' },
  { id: 460, word: 'park' },
  { id: 461, word: 'location' },
  { id: 462, word: 'tower' },
  { id: 463, word: 'sitting' },
  { id: 464, word: 'egg' },
  { id: 465, word: 'label' },
  { id: 466, word: 'he' },
  { id: 467, word: 'forth' },
  { id: 468, word: 'report' },
  { id: 469, word: 'help' },
  { id: 470, word: 'butter' },
  { id: 471, word: 'market' },
  { id: 472, word: 'stiff' },
  { id: 473, word: 'first' },
  { id: 474, word: 'fifth' },
  { id: 475, word: 'birds' },
  { id: 476, word: 'copy' },
  { id: 477, word: 'bite' },
  { id: 478, word: 'hot' },
  { id: 479, word: 'took' },
  { id: 480, word: 'parallel' },
  { id: 481, word: 'coal' },
  { id: 482, word: 'open' },
  { id: 483, word: 'due' },
  { id: 484, word: 'usual' },
  { id: 485, word: 'century' },
  { id: 486, word: 'canal' },
  { id: 487, word: 'month' },
  { id: 488, word: 'baseball' },
  { id: 489, word: 'classroom' },
  { id: 490, word: 'attempt' },
  { id: 491, word: 'clay' },
  { id: 492, word: 'already' },
  { id: 493, word: 'kept' },
  { id: 494, word: 'buried' },
  { id: 495, word: 'everywhere' },
  { id: 496, word: 'worth' },
  { id: 497, word: 'factor' },
  { id: 498, word: 'movement' },
  { id: 499, word: 'fourth' },
  { id: 500, word: 'even' },
];