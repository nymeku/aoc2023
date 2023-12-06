import fs from "fs"

function main() {
    const rawInput = fs.readFileSync("./input.txt", "utf8")
    const input = rawInput.split(/\r?\n/)
    const result = input.reduce((acc: number, next: string) => {
        return acc += day1(next)
    }, 0)
    return result
}

function day1(word: string): number {
    let ans = 0
    const digits: string[] = []
    word.split("").map((c, i) => {
        if (/\d/.test(c)) {
            digits.push(String(c))
        }
        ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"].map((val, index) => {
            if (word.slice(i, word.length).startsWith(val)) digits.push(String(index + 1))
        })
    })
    const score = parseInt(digits[0] + digits[digits.length - 1])
    return ans += score
}

console.log(main())










































const mocks: Record<string, number> = {
    "fcvvkvjjnhfivesixfiveninesxlvnhfckc54": 54,
    "three1sdmq9sevenfournine": 39,
    "khnlbmzhvlsix3": 63,
    "nineone6onesixvlnlxeightfive": 95,
    "oneight": 18,
    "sevenine": 79,
    "treb7uchet": 77,
    "1abc2": 12,
    "pqr3stu8vwx": 38,
    "a1b2c3d4e5f": 15,
    "hs1": 11,
    "two1nine": 29,
    "eightwothree": 83,
    "abcone2threexyz": 13,
    "xtwone3four": 24,
    "4nineeightseven2": 42,
    "zoneight234": 14,
    "7pqrstsixteen": 76,
    "foursix1rfgvmxqfrninekthjjk": 49,
    "three8cvfqmntngvmhddgqdgonetjgnnzggjz9xqlxffgsc": 39,
    "threesix2fkzsjkr6six": 36,
    "trgpkmkbtlslmpqtdxfourxjspnnmhdtg1nvfxpllcrrbzjrhrstn": 41,
    "636": 66,
    "6798seven": 67,
    "six8b32csscsdgjsevenfivedlhzhc": 65,
    "feightwo4twofivefour": 84,
    "37142745": 35,
    "four73": 43,
    "8552ztclnd": 82

}

Object.keys(mocks).map(m => {
    const res = day1(m)
    const expected = mocks[m]
    if (expected !== res) {
        console.log(`input: ${m}`)
        console.log(`expected: ${expected}, got: ${res}`)
        console.log("-".repeat(40))
    }
    else {
        console.log("✅")
    }

})