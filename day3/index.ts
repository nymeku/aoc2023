import fs from "fs"


function main() {
    const rawInput = fs.readFileSync("./test.txt", "utf8")
    const input = rawInput.split(/\r?\n/)
    let tot = 0
    for (let i = 0;i < input.length;i++) {
        console.log(tot)
        let num = []
        let idx = []
        for (let j = 0;j < input[i].length;j++) {
            const actual = input[i][j]
            if (actual.match(/\d/)) {
                num.push(actual)
                idx.push(j)
            }
            if (num.length > 0 && !actual.match(/\d/)) {
                const before = input[i - 1] ? input[i - 1].slice(Math.max(idx[0] - 1, 0), j + 1) : ""
                const middle = input[i].slice(Math.max(idx[0] - 1, 0), j + 1)
                const after = input[i + 1] ? input[i + 1].slice(Math.max(idx[0] - 1, 0), j + 1) : ""
                const matrix = [before, middle, after]
                const f = matrix.flat().join("").split("").filter(a => !a.match(/(\d|\.)/))
                if (f.length > 0) {
                    tot += parseInt(num.join(""))
                }
                num = []
                idx = []
            }
        }
    }
    return tot
}


console.log(main())