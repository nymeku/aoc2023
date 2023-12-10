import fs from "fs"

function main() {
    const rawInput = fs.readFileSync("./input.txt", "utf8")
    const input = rawInput.split(/\r?\n/)
    let tot = 0
    for (let i = 0;i < input.length;i++) {
        for (let j = 0;j < input.length;j++) {
            let num = ""
            const actual = input[i][j]
            if (actual.match(/\d/)) {
                num += actual
                j++
            }
            else {
                if (num.length > 0) {
                    const matrix = [
                        input[i - 1].slice(j - 1 - num.length, j),
                        input[i].slice(j - 1 - num.length, j),
                        input[i + 1].slice(j - 1 - num.length, j)
                    ]
                    console.log(matrix)
                }
            }
        }
    }

    return tot
}


console.log(main())