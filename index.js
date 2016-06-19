
// See: https://github.com/CardJs/CardJs

export const UNKNOWN = "UNKNOWN"
export const VISA = "VISA"
export const MASTERCARD = "MASTERCARD"
export const AMEX = "AMEX"
export const DISCOVER = "DISCOVER"
export const DINERS = "DINERS"
export const JCB = "JCB"

export const CardPatterns = [
  { type: VISA,       regexp: /^4/ },
  { type: MASTERCARD, regexp: /^5[1-5]/ },
  { type: AMEX,       regexp: /^3[47]/ },
  { type: DISCOVER,   regexp: /^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/ },
  { type: DINERS,     regexp: /^(30|36|38)/ },
  { type: DINERS,     regexp: /^30[0-5]/ },
  { type: JCB,        regexp: /^35(2[89]|[3-8][0-9])/ },
  { type: VISA,       regexp: /^(4026|417500|4508|4844|491(3|7))/ },
]

export const NumberMasks = {
  [UNKNOWN]:    false,
  [VISA]:       "XXXX XXXX XXXX XXXX",
  [MASTERCARD]: "XXXX XXXX XXXX XXXX",
  [AMEX]:       "XXXX XXXXXX XXXXX",
  [DISCOVER]:   "XXXX XXXX XXXX XXXX",
  [DINERS]:     "XXXX XXXXXX XXXX",
  [JCB]:        "XXXX XXXX XXXX XXXX",
}

export const ExpiryMask = "XX / XX"

export function applyNumberMask (input) {
  const type = parseCardType(input)
  const mask = NumberMasks[type]
  if (!mask) {
    return input
  }
  return applyMask(input, mask)
}

export function applyExpiryMask (input) {
  return applyMask(input, ExpiryMask)
}

export function parseCardType (input) {
  const number = input.replace(/\D/g, "")
  for (let card of CardPatterns) {
    if (card.regexp.test(number)) {
      return card.type
    }
  }
  return UNKNOWN
}

export function applyMask (input, mask) {
  const nums = input.replace(/\D/g, "")
  for (let num of nums) {
    mask = mask.replace("X", num)
  }
  const index = mask.indexOf("X")
  if (index == -1) {
    return mask
  }
  return mask.slice(0, index)
}
