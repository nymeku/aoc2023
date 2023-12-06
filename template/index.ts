import fs from "fs"

function main() {
    const rawInput = fs.readFileSync("./input.txt", "utf8")
    const input = rawInput.split(/\r?\n/)
}

function consumer(line: string) {
    // your code here
}

// console.log(main())























const mocks: Record<string, number> = {
    // tests here
}

Object.keys(mocks).map(m => {
    const res = consumer(m)
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