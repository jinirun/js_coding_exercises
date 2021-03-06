const {sumMultiples,
        isValidDNA,
        getComplementaryDNA,
        isItPrime,
        createMatrix,
        areWeCovered} = require("../challenges/exercise006");

describe("sumMultiples", () => {
    test("returns an error if the array is not passed", () => {
        expect(() => {
            sumMultiples();
        }).toThrow("arr is required");
    });
    test("returns the sum of given numbers if they are multiples of either 3 or 5", () => {
        expect(sumMultiples([3, 5, 15])).toBe(23);
        expect(sumMultiples([1,3,5])).toBe(8);
    });
    test("works as expected with floating point numbers", () => {
        expect(sumMultiples([33.0, 10])).toBe(43.0);
    });
    test("should return 0 if none of the numbers are divisible by 3 or 5", () => {
       expect(sumMultiples([1, 2, 7])).toBe(0);
    });
});

describe("isValidDNA", () => {
    test("returns an error is a string is not passed", () => {
        expect(() => {
            isValidDNA();
        }).toThrow("str is required");
    });
    test("returns true if a valid DNA string is passed", () => {
        expect(isValidDNA("ATCA")).toBe(true);
        expect(isValidDNA("CGTA")).toBe(true);
    });
    test("returns false if an invalid DNA string is passed", () => {
        expect(isValidDNA("RGTA")).toBe(false);
        expect(isValidDNA("RGT56")).toBe(false);
    });
    test("returns false is the string is passed in lower case", () => {
        expect(isValidDNA("dsfg")).toBe(false);
    });
});

describe("isComplementaryDNA", () => {
    test("returns an error is a string is not passed", () => {
        expect(() => {
            getComplementaryDNA();
        }).toThrow("str is required");
    });
    test("returns a string which is complementary to the one that is passed (A=T;C=G)", () => {
        expect(getComplementaryDNA("AGTC")).toBe("TCAG");
    });
});

describe("isItPrime", () => {
    test("returns an error if no number is passed", () => {
        expect(() => {
            isItPrime();
        }).toThrow("n is required");
    })
    test("returns true if the number is prime", () => {
        expect(isItPrime(7)).toBe(true);
        expect(isItPrime(11)).toBe(true);
    });
    test("returns false is the number is not prime", () => {
        expect(isItPrime(6)).toBe(false);
    });
    test("returns true if 1 or 2 are passed", () => {
        expect(isItPrime(1)).toBe(true);
        expect(isItPrime(2)).toBe(true);
    })
});

describe("createMatrix", () => {
    test("returns an error if no number is passed", () => {
        expect(() => {
            createMatrix();
        }).toThrow("n is required");
    });
    test("returns an error if a 'fill' string is not passed", () => {
        expect(() => {
            createMatrix();
        }).toThrow("fill is required");
    })
    test("returns a matrix of size 1 when 1 is passed", () => {
        expect(createMatrix(1, "hello")).toBe([["hello"]]);
    })
    test("returns a matrix of the number of arrays matching the number passed and " +
        "filled with the string passed as the 'fill' parameter", () => {
        expect(createMatrix(2,"Hello")).toBe([["hello", "hello"],
                                                             ["hello", "hello"]]);
    });
});

describe("areWeCovered", () => {
    test("returns false if there are no staff for a particular day", () => {
        expect(areWeCovered([], "Sunday")).toBe(false);
        expect(areWeCovered([], "Monday")).toBe(false);
        expect(areWeCovered([], "Tuesday")).toBe(false);
        expect(areWeCovered([], "Wednesday")).toBe(false);
        expect(areWeCovered([], "Thursday")).toBe(false);
        expect(areWeCovered([], "Friday")).toBe(false);
        expect(areWeCovered([], "Saturday")).toBe(false);
    });
    test("returns false if there are staff but less than 3, not scheduled to work", () => {
        expect(areWeCovered([{name:"Gary", rota:["Monday", "Wednesday"]},
                                    {name:"Kasparov", rota:["Monday", "Wednesday"]},
                                    {name:"Danny", rota:["Monday", "Wednesday"]}],
                                "Tuesday")).toBe(false);
    });
    test("returns true if there are at least 3 of staff available to work on a given day", () => {
        expect(areWeCovered([{name:"Gauri", rota:["Monday", "Thursday"]},
                                    {name:"Maddy", rota:["Monday", "Thursday"]},
                                    {name:"Ava", rota:["Monday", "Thursday"]}],
                            "Thursday")).toBe(true);
    })
});
