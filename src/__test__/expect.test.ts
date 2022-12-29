import React from "react";

describe("常用断言的使用场景", () => {
    // ... 本节课后续的test就放在这里

    test('1.基础类型的比较', () => {
      // tobe
      expect(1 + 1).toBe(2)
      // not toBe
      expect(1 + 1).not.toBe(3)
      // boolean
      expect(true).toBe(true);
      expect(true).toBeTruthy();
      expect(false).toBeFalsy();
      // undefined
      expect(undefined).toBe(undefined); 
      expect(undefined).not.toBeDefined();
      expect(undefined).toBeUndefined();

      // 函数返回值
      const test = () => {
        // console.log("test");
      }
      expect(test()).toBeUndefined();

      // 浮点数
      // expect(0.1 + 0.2).toBe(0.3)
      expect(0.1 + 0.2).toBeCloseTo(0.3)

      // NaN
      expect(NaN).toBe(NaN);
      expect(NaN).toBeNaN();
      
      // +0 -0
      expect(+0).not.toBe(-0);
    })

    test("2.引用类型的比较", () => {
      const a = { obj1: { name: "obj1", obj2: { name: "obj2" } } };
      const b = Object.assign(a);
      const c = JSON.parse(JSON.stringify(a));
      expect(a).toBe(b);
      expect(a).not.toBe(c);
      expect(a).toEqual(b);
      expect(a).toEqual(c);
    })

    test("3.数字符号", () => {
      // >
      expect(3).toBeGreaterThan(2);
      // <
      expect(3).toBeLessThan(4);
      // >=
      expect(3).toBeGreaterThanOrEqual(3);
      expect(3).toBeGreaterThanOrEqual(2);
      // <=
      expect(3).toBeLessThanOrEqual(3);
      expect(3).toBeLessThanOrEqual(4);
    })

    test("4.正则匹配", () => {
      expect("This is a regexp validation").toMatch(/regexp/);
      const obj = { prop1: "test", prop2: "regexp validation" };
      const childObj = { prop1: "test" };
      expect(obj).toMatchObject(childObj);
    })

    test("5.表单验证", () => {
      // 数组元素验证
      expect([1, 2, 3]).toContain(1);
      expect([1, 2, 3]).toEqual(expect.arrayContaining([1, 2]));
      expect([{ a: 1, b: 2 }]).toContainEqual({ a: 1, b: 2 });
      // 数组长度
      expect([1, 2, 3]).toHaveLength(3);

      // 对象属性验证
      const testObj = {
        prop1: 1,
        prop2: {
          child1: 2,
          child2: "test",
        },
      };
      expect(testObj).toHaveProperty("prop1");
      expect(testObj).toHaveProperty("prop2.child1");
      
    })

    // test("错误抛出", () => {
    //   const throwError = () => {
    //     const err = new Error("console err: this is a test error!");
    //     throw err;
    //   };
    //   expect(throwError).toThrow();
    //   expect(throwError).toThrowError();

    //   const catchError = () => {
    //     try {
    //       const err = new Error("console err: this is a test error!");
    //       throw err;
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   };
    //   expect(catchError).not.toThrow();
    //   expect(catchError).not.toThrowError();
    // })
});

describe("自定义断言", () => {
  test("同步自定义匹配器", () => {
    const toBeBetweenZeroAndTen = (num: number) => {
      if (num >= 0 && num <= 10) {
        return {
          message: () => "",
          pass: true,
        };
      } else {
        return {
          message: () => "expected num to be a number between zero and ten",
          pass: false,
        };
      }
    };
    expect.extend({
      toBeBetweenZeroAndTen,
    });
    expect(8).toBeBetweenZeroAndTen();
    expect(11).not.toBeBetweenZeroAndTen();
  })

  test("异步自定义匹配器", async () => {
    const toBeBetweenZeroAndTen = async (num: number) => {
      const res = await new Promise<{ message: () => string; pass: boolean }>(
        (resolve) => {
          setTimeout(() => {
            if (num >= 0 && num <= 10) {
              resolve({
                message: () => "",
                pass: true,
              });
            } else {
              resolve({
                message: () =>
                  "expected num to be a number between zero and ten",
                pass: false,
              });
            }
          }, 1000);
        }
      );
      return (
        res || {
          message: () => "expected num to be a number between zero and ten",
          pass: false,
        }
      );
    };
    expect.extend({
      toBeBetweenZeroAndTen,
    });
    await expect(8).toBeBetweenZeroAndTen();
    await expect(11).not.toBeBetweenZeroAndTen();
  });

})
