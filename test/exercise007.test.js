const {sumDigits,
        createRange,
        getScreentimeAlertList,
        hexToRGB,
        findWinner} = require("../challenges/exercise007.js");

describe("sumDigits", () => {
    test("returns an error is a number is not provided", () => {
        expect(() => {
            sumDigits();
        }).toThrow("n is required");
    });
    test("returns the sum of digits of the digits of a number", () => {
        expect(sumDigits(123)).toBe(6);
    });
});

describe("createRange", () => {
    test("returns an array of integers from given start to end numbers with a step", () => {
        expect(createRange(1, 7, 2)).toEqual([1, 3, 5, 7]);
        expect(createRange(3, 10, 2)).toEqual([3, 5, 7, 9]);
    });
    test("returns an array of integers from given start to end numbers, and assumes step to be 1 " +
        "if step is not provided", () => {
        expect(createRange(2, 8, 0)).toEqual([2, 3, 4, 5, 6, 7, 8]);
    });
});

describe("getScreentimeAlert", () => {
    test("returns an error if users array is not provided", () => {
        expect(() => {
            getScreentimeAlertList();
        }).toThrow("users is required");
    });
    test("returns an array of usernames who have used screen time of more than 100 minutes on a given date", () => {
        expect(getScreentimeAlertList([
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [{ date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                             { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                             { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                             { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                             ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                            { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                            { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                            { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                            ]
            }
     ], "2019-05-02")).toEqual(["beth_1234"]);
    });
});

describe("hexToRGB", () => {
    test("returns an error if a hexadecimal string is not passed", () => {
        expect(() => {
            hexToRGB();
        }).toThrow("hexStr is required");
    });
    test("returns the decimal equivalent of the hexadecimal number passed to the function", () => {
        expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)");
    });

});

describe("findWinner", () => {
    test("returns an error if no board is passed", () => {
        expect(() => {
            findWinner();
        }).toThrow("board is required");
    });
    test("returns X if player X has won", () => {
        expect(findWinner([   ["X", "0", null],
                                    ["X", null, "0"],
                                    ["X", null, "0"]])).toBe("X");
    })
    test("returns 0 if player 0 has won", () => {
        expect(findWinner([   ["0", "0", "0"],
                                    ["X", null, null],
                                    ["X", null, "0"]])).toBe("0");
    })
});
