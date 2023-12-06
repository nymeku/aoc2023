import fs from "fs"

function main() {
    const rawInput = fs.readFileSync("./input.txt", "utf8")
    const input = rawInput.split(/\r?\n/)
    let tot = 0
    input.map((val, i) => {
        const line = val.split(": ")
        tot += consumer(line[1])
    })
    return tot
}

function consumer(line: string) {
    console.log({ line })
    // your code here
    const code: Record<string, number> = { "red": 0, "green": 0, "blue": 0 }
    line.split("; ").map((sublist) => {
        sublist.split(", ").map((val) => {
            const split = val.split(" ")
            const nb = parseInt(split[0])
            if (nb > code[split[1]]) {
                code[split[1]] = nb
            }
        })
    })
    return code["red"] * code["blue"] * code["green"]
}
//"Game 100: 15 blue, 6 red; 1 green, 2 red; 12 blue, 8 green, 1 red; 1 red, 7 blue"

console.log(main())























const mocks: Record<string, boolean> = {
    // tests here
    // "Game 100: 15 blue, 6 red; 1 green, 2 red; 12 blue, 8 green, 1 red; 1 red, 7 blue": false
}

Object.keys(mocks).map(m => {
    const res = consumer(m) as any
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