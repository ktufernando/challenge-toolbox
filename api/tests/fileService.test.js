const assert = require("chai").assert;
const { getFilesData, getFiles } = require("../src/services/filesService");

describe("Files Service", function () {
  describe("getFilesData", function () {
    it("should return file data for a given file name", async function () {
      const fileName = "test2.csv";
      const expected = [
        {
          file: "test2.csv",
          lines: [
            {
              text: "bUOCduvAff",
              number: 4224,
              hex: "4f237b30141203a5a1ba114e1c6436c8",
            },
          ],
        },
      ];

      const result = await getFilesData(fileName);
      assert.deepEqual(result, expected);
    });

    it("should return file data for all files when no file name is given", async function () {
      const expected = [
        {
          file: "test2.csv",
          lines: [
            {
              text: "bUOCduvAff",
              number: 4224,
              hex: "4f237b30141203a5a1ba114e1c6436c8",
            },
          ],
        },
        {
          file: "test3.csv",
          lines: [
            {
              text: "VQcvVdpUiKlmHfVrxnoHBhQRysQU",
              number: 6848463,
              hex: "7dad5384bd77ccec85ec4fa1fea1cc89",
            },
            {
              text: "OxCnNlHxQnZVxkbAYlYYkyVilaDfELDi",
              number: 7,
              hex: "52c635f2bd68b68ea018700fb16ecfb1",
            },
            {
              text: "dQrSTjWhAUSKQGETgCXSAQI",
              number: 6.903266463007065e30,
              hex: "0eaa75c956733b61c7d9ec83a060001f",
            },
          ],
        },
        {
          file: "test18.csv",
          lines: [
            {
              text: "IcsahRwTnMIrKohslURqABeB",
              number: 107,
              hex: "jz7200fa93efd8c0b16ea1806775b8",
            },
            {
              text: "CNDrllbiyE",
              number: 4067,
              hex: "jzea01b320f5b54ef8970f841db64f",
            },
            {
              text: "wAdMgfxQInmGxdepGxZuubR",
              number: 366614178,
              hex: "jz252ebe9b5cf9d8aff46d70a3397b",
            },
            {
              text: "GGALuEwWXKBiFHANDGkc",
              number: 4,
              hex: "jzdc514ae0cf09b6ed77b23824ccc5",
            },
            {
              text: "ItCUkbeJDyEAZUWkCkQxBfbGO",
              number: 25395,
              hex: "jzc5cb43abe6b3844a9e127aa5e669",
            },
          ],
        },
        {
          file: "test9.csv",
          lines: [
            {
              text: "duMyNtVZ",
              number: 45087860,
              hex: "1f3745e7f6852efaaa4e9d4ebcfdb78f",
            },
            {
              text: "krnsGqepEZdDmizEC",
              number: 87,
              hex: "1876dd2cf45c506ef91d798ffb0aa338",
            },
            {
              text: "xTcWNXfJgLjBivsXKUWCu",
              number: 7562173,
              hex: "c1fb9c9c6aef0e28d85d1a5dcea3a460",
            },
            {
              text: "qqzoujVmQdPRmeVE",
              number: 70,
              hex: "817f0a7c415732614ffc106b236bb250",
            },
            {
              text: "TbmSCCDMqCtMZOTEjwMfuDEERJu",
              number: 83800,
              hex: "ce72f6ef765aecc04ad742fa93bf54ef",
            },
            {
              text: "nFMCupOo",
              number: 2268,
              hex: "5c137bec3d7d51e0465e290cac6e1469",
            },
            {
              text: "Dd",
              number: 7250060,
              hex: "b46bf6e30622374b45556c1250d2b5d6",
            },
            {
              text: "qfWbuTPA",
              number: 245412,
              hex: "799ec58c4033fce089da8ab84845c436",
            },
            {
              text: "NpwJeeQpsemzG",
              number: 242,
              hex: "63fca46f9fcac29ad21cdcbef619a3a7",
            },
            {
              text: "fiAhbKuSBoMHkKjmHTb",
              number: 549484178,
              hex: "65fb5d68bb43db82fad1a9f97cdc2404",
            },
            {
              text: "osOtb",
              number: 6.862447967354417e31,
              hex: "434ae6bfd26f2a0a311b66a576af254d",
            },
            {
              text: "xfqaAwNJhnGFv",
              number: 981,
              hex: "06ad3bb6eae54034bc3d1f23c4db69d1",
            },
          ],
        },
      ];

      const result = await getFilesData();
      assert.deepEqual(result, expected);
    });
  });

  describe("getFiles", function () {
    it("should return a list of files", async function () {
      const expected = [
        "test1.csv",
        "test2.csv",
        "test3.csv",
        "test18.csv",
        "test4.csv",
        "test5.csv",
        "test6.csv",
        "test9.csv",
        "test15.csv",
      ];
      const result = await getFiles();
      assert.deepEqual(result, expected);
    });
  });
});
