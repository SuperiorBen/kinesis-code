<template>
  <div class="content-svg">
    <div class="arrow-content">
      <img
        class="arrow"
        src="../../assets/images-home/section1/arrow.svg"
        alt="arrow"
      />
    </div>
    <img
      class="lune"
      src="../../assets/images-home/section1/lune-cut.svg"
      alt="arrow"
    />
  </div>

  <div class="content-animated">
    <div id="aniMain1"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    let animation = bodymovin.loadAnimation({
      animationData: {
        v: "5.9.0",
        fr: 25,
        ip: 0,
        op: 99,
        w: 1702,
        h: 1499,
        nm: "animated1",
        ddd: 1,
        assets: [
          {
            id: "image_0",
            w: 15,
            h: 23,
            u: "",
            p: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAXBAMAAAAmfQiPAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJ1BMVEVHcEz///////////////////////////////////////////////8NopmKAAAADHRSTlMAgMA1WaAgcPDckBAJ1jjyAAAAeElEQVQI12NggIPtggZgmrnnzEkwi/PMmTNHQAwfIOOMA5AhA2IcBjJ0QIyTG6CMMwIMDGvAjGNQNWcOMjDYgBknGRg4wIwzBgysEEYBAxuEsYCBIQbMUGBgyIAxWMCMAAaoXAGQAdaXAHJJBdhkIGBbdMiBARMAAAEQT6HxaX1EAAAAAElFTkSuQmCC",
            e: 1,
          },
          {
            id: "image_1",
            w: 15,
            h: 23,
            u: "",
            p: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAXBAMAAAAmfQiPAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJ1BMVEVHcEz///////////////////////////////////////////////8NopmKAAAADHRSTlMAgMA1WaAgcPDckBAJ1jjyAAAAeElEQVQI12NggIPtggZgmrnnzEkwi/PMmTNHQAwfIOOMA5AhA2IcBjJ0QIyTG6CMMwIMDGvAjGNQNWcOMjDYgBknGRg4wIwzBgysEEYBAxuEsYCBIQbMUGBgyIAxWMCMAAaoXAGQAdaXAHJJBdhkIGBbdMiBARMAAAEQT6HxaX1EAAAAAElFTkSuQmCC",
            e: 1,
          },
          {
            id: "image_2",
            w: 15,
            h: 23,
            u: "",
            p: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAXBAMAAAAmfQiPAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJ1BMVEVHcEz///////////////////////////////////////////////8NopmKAAAADHRSTlMAgMA1WaAgcPDckBAJ1jjyAAAAeElEQVQI12NggIPtggZgmrnnzEkwi/PMmTNHQAwfIOOMA5AhA2IcBjJ0QIyTG6CMMwIMDGvAjGNQNWcOMjDYgBknGRg4wIwzBgysEEYBAxuEsYCBIQbMUGBgyIAxWMCMAAaoXAGQAdaXAHJJBdhkIGBbdMiBARMAAAEQT6HxaX1EAAAAAElFTkSuQmCC",
            e: 1,
          },
          {
            id: "image_3",
            w: 121,
            h: 158,
            u: "",
            p: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAACeCAMAAAAhZVVBAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAACXBIWXMAAAABAAAAAQBPJcTWAAAATlBMVEVHcEyX1/8AJzuX1/+U1P8AJTsAJjoAJzyX1/8AJzuX1/+X1/8AJzqW1v+V1f9Mf55jmLmX1/8AJzsNN02Lye9DdZIlUmt1sNNckrNooMKEREiUAAAAEXRSTlMAjIbbFxe1P8DmQGVoUDC/fCSv+mwAAAKYSURBVHja7dzRUsIwEIXh2IIFRDSIqO//otZRRts0zW5yzsaL5AW+6f6znZYBnPs9Q9d1g7M/w/78dfZHY3fbnW/nfqhwwTd7a3bB9+fp2Xc29tOb95f3l6ltkHvT++8zs/m5b/B43a/TmZNzP/g/53I1zL3zk/Nml3smG+YOZLPcoWyVe0m2yb0sW+SOyfzcUZmee0Um516VvX/l5U7IxNwpeRz5PLeZ7P3HLPdgJnNyy2RGbqFMyC2W4bkVMji3Sobm1snI3FoZl1svo3LnyJjcWTIkd6YMyJ0tF+cukAtzl8hlucvk4OlYkbtUHkf+kjfyYjnMLXw6Bshh7qOZnJUbJGfkRsn63DhZmxsp63JjZU1usKzIDZfFuQmyMDdFFuXmyJLcLDmdmyencjPl9dxUOfhk629usrySmy5HcxvIkadjCzn8IPNoJge5Bzt5lntvKU9zD5byJLexPL5/VpP9tZr8Xk2+VJN9k5vc5CY3uclNbnKTm9xkA/mumrypJk+/dmkqu8dqstvc1ZJHe1dLdu7Q15Kd2XqFslXuBXkc+a6WbLLcEdlg5DGZv2Fxebyp9bVk7oaty8zcCZl4U0vKtA0TyKSRS2TOhslkxoZJZfzIxTJ85AoZvGEqGbphShmYWys7d9rVklEbliNjRp4lQzYsUwZsWLZcvGEFcmHuErlsw8rkceR9LTl/5MVy9oYB5MwNg8hZGwaSM3KjZP2rL07Wjhwp697DsLJmw8CyYsPgsnjkBFm4YQxZtmEcWbJhLDk9cpqc3DCinHgwp8qrG0aWV3Kz5fhNjS/HNuzna66OehZHjvwJtW7DbOCFDbvIf4AFHvmHzQUvjPxq+39Gvxv2tHXG5/s9rH92Fc7pcDi5f3E+AXcIM+s0J8zKAAAAAElFTkSuQmCC",
            e: 1,
          },
          {
            id: "image_4",
            w: 121,
            h: 158,
            u: "",
            p: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAACeBAMAAADklbhAAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAMFBMVEVHcEzyWgT/lxf4dwzxTgDxTgD/mBf5dQ3/lxfxUAD/lBX/mBfxTgD4cwv1XQT9iRKJ2qyIAAAAC3RSTlMAPsEXiejqWIHCp+QtB4AAAAJrSURBVGje7do/jtpQEMfxIRREqdgtcgkaRMVuGqRdKU0aJCQOQZMmadKkSrMVSpsbpF9p9ZagSKFA8hFQTpAb5I8C2Ng8e95785vZ0tN/Cvtr2U/WEB2mc/ua1NP5kmVzLe6+yfazVOp32XFuVPgqy/T8xe/1z1xv3uIXPXDO7XK+7aP6mXMV/zEE9YejXv/S8YHz+Fyl3aq48UuVLvmNSrt/Cl7pE0eyn2lF9nONZ/c0nN3TcHZfo9lrGsxe12X2iUpD2Zsayc5oIDunT91mKi3Pzmpxdl5Lswd02W2i0rLsQS3KHtaS7BEtyB7Rguwxnc4e1cnscZ3KntAu/m1P6TL7UKXXsexJHc2e1m5V8KlKl90+q7T7G8ou0sHsMl1m76t0ILtU89mlms8u1mx2ueayA5rJjuhmdkg3smO6nh3Uzj+TodrPjmr/LQ1rLzuu3bfqNavQp+zfdbrotlHqgveVOu+m1fmNV+vjM6fXO5N+bHWrW93qVre60Hcm/cqkeyZN7026e2fR+Z9ktabOwqLp+cKi6dqk6dKk8W6ehrt5Gu7ma+otLBrsVtdYt4aGujU10o3RQDdGA904Le/GahovLFraLaCF3UKaPpm0qFtQU2dg0ZJuES3oFtPpblFNL0061S2hu18tOtEtpePdkprGJh3rJtCRbhId7ibSwW4iHewm06FuQh3oJtU0Mmm2m1xz3QDNdAM00w3RzW6QbnTDdL0bqGsHC1T73WDtdYO11w3X5932eotupIzP9RRehxlVegNvw1TdHlWLPN2i2x/dDlLRbUa6OXZ7GCr14SB//9GwuXXRpyeY/+FEhbp+xACdAAAAAElFTkSuQmCC",
            e: 1,
          },
          {
            id: "comp_0",
            nm: "dots",
            fr: 25,
            layers: [
              {
                ddd: 1,
                ind: 1,
                ty: 2,
                nm: "blue-circle1",
                refId: "image_0",
                sr: 1,
                ks: {
                  o: {
                    a: 1,
                    k: [
                      {
                        i: {
                          x: [0.667],
                          y: [1],
                        },
                        o: {
                          x: [0.333],
                          y: [0],
                        },
                        t: 8,
                        s: [100],
                      },
                      {
                        i: {
                          x: [0.667],
                          y: [1],
                        },
                        o: {
                          x: [0.333],
                          y: [0],
                        },
                        t: 9,
                        s: [0],
                      },
                      {
                        i: {
                          x: [0.667],
                          y: [1],
                        },
                        o: {
                          x: [0.333],
                          y: [0],
                        },
                        t: 15,
                        s: [0],
                      },
                      {
                        i: {
                          x: [0.667],
                          y: [1],
                        },
                        o: {
                          x: [0.333],
                          y: [0],
                        },
                        t: 17,
                        s: [100],
                      },
                      {
                        i: {
                          x: [0.667],
                          y: [1],
                        },
                        o: {
                          x: [0.333],
                          y: [0],
                        },
                        t: 53,
                        s: [100],
                      },
                      {
                        i: {
                          x: [0.667],
                          y: [1],
                        },
                        o: {
                          x: [0.333],
                          y: [0],
                        },
                        t: 54,
                        s: [0],
                      },
                      {
                        i: {
                          x: [0.667],
                          y: [1],
                        },
                        o: {
                          x: [0.333],
                          y: [0],
                        },
                        t: 60,
                        s: [0],
                      },
                      {
                        t: 62,
                        s: [100],
                      },
                    ],
                    ix: 11,
                  },
                  rx: {
                    a: 0,
                    k: 0,
                    ix: 8,
                  },
                  ry: {
                    a: 0,
                    k: 0,
                    ix: 9,
                  },
                  rz: {
                    a: 0,
                    k: 0,
                    ix: 10,
                  },
                  or: {
                    a: 0,
                    k: [0, 0, 0],
                    ix: 7,
                  },
                  p: {
                    a: 0,
                    k: [1385.005, 175.782, 0],
                    ix: 2,
                  },
                  a: {
                    a: 0,
                    k: [7.434, 11.231, 0],
                    ix: 1,
                  },
                  s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6,
                  },
                },
                ao: 0,
                ip: 0,
                op: 100,
                st: 0,
                bm: 0,
              },
              {
                ddd: 1,
                ind: 2,
                ty: 2,
                nm: "blue-circle2",
                refId: "image_1",
                sr: 1,
                ks: {
                  o: {
                    a: 1,
                    k: [
                      {
                        i: {
                          x: [0.667],
                          y: [1],
                        },
                        o: {
                          x: [0.333],
                          y: [0],
                        },
                        t: 8,
                        s: [100],
                      },
                      {
                        i: {
                          x: [0.667],
                          y: [1],
                        },
                        o: {
                          x: [0.333],
                          y: [0],
                        },
                        t: 9,
                        s: [0],
                      },
                      {
                        i: {
                          x: [0.667],
                          y: [1],
                        },
                        o: {
                          x: [0.333],
                          y: [0],
                        },
                        t: 23,
                        s: [0],
                      },
                      {
                        i: {
                          x: [0.667],
                          y: [1],
                        },
                        o: {
                          x: [0.333],
                          y: [0],
                        },
                        t: 25,
                        s: [100],
                      },
                      {
                        i: {
                          x: [0.667],
                          y: [1],
                        },
                        o: {
                          x: [0.333],
                          y: [0],
                        },
                        t: 53,
                        s: [100],
                      },
                      {
                        i: {
                          x: [0.667],
                          y: [1],
                        },
                        o: {
                          x: [0.333],
                          y: [0],
                        },
                        t: 54,
                        s: [0],
                      },
                      {
                        i: {
                          x: [0.667],
                          y: [1],
                        },
                        o: {
                          x: [0.333],
                          y: [0],
                        },
                        t: 68,
                        s: [0],
                      },
                      {
                        t: 70,
                        s: [100],
                      },
                    ],
                    ix: 11,
                  },
                  rx: {
                    a: 0,
                    k: 0,
                    ix: 8,
                  },
                  ry: {
                    a: 0,
                    k: 0,
                    ix: 9,
                  },
                  rz: {
                    a: 0,
                    k: 0,
                    ix: 10,
                  },
                  or: {
                    a: 0,
                    k: [0, 0, 0],
                    ix: 7,
                  },
                  p: {
                    a: 0,
                    k: [1405.443, 187.483, 0],
                    ix: 2,
                  },
                  a: {
                    a: 0,
                    k: [7.434, 11.231, 0],
                    ix: 1,
                  },
                  s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6,
                  },
                },
                ao: 0,
                ip: 0,
                op: 100,
                st: 0,
                bm: 0,
              },
              {
                ddd: 1,
                ind: 3,
                ty: 2,
                nm: "blue-circle3",
                refId: "image_2",
                sr: 1,
                ks: {
                  o: {
                    a: 1,
                    k: [
                      {
                        i: {
                          x: [0.667],
                          y: [1],
                        },
                        o: {
                          x: [0.333],
                          y: [0],
                        },
                        t: 8,
                        s: [100],
                      },
                      {
                        i: {
                          x: [0.667],
                          y: [1],
                        },
                        o: {
                          x: [0.333],
                          y: [0],
                        },
                        t: 9,
                        s: [0],
                      },
                      {
                        i: {
                          x: [0.667],
                          y: [1],
                        },
                        o: {
                          x: [0.333],
                          y: [0],
                        },
                        t: 32,
                        s: [0],
                      },
                      {
                        i: {
                          x: [0.667],
                          y: [1],
                        },
                        o: {
                          x: [0.333],
                          y: [0],
                        },
                        t: 34,
                        s: [100],
                      },
                      {
                        i: {
                          x: [0.667],
                          y: [1],
                        },
                        o: {
                          x: [0.333],
                          y: [0],
                        },
                        t: 53,
                        s: [100],
                      },
                      {
                        i: {
                          x: [0.667],
                          y: [1],
                        },
                        o: {
                          x: [0.333],
                          y: [0],
                        },
                        t: 54,
                        s: [0],
                      },
                      {
                        i: {
                          x: [0.667],
                          y: [1],
                        },
                        o: {
                          x: [0.333],
                          y: [0],
                        },
                        t: 77,
                        s: [0],
                      },
                      {
                        t: 79,
                        s: [100],
                      },
                    ],
                    ix: 11,
                  },
                  rx: {
                    a: 0,
                    k: 0,
                    ix: 8,
                  },
                  ry: {
                    a: 0,
                    k: 0,
                    ix: 9,
                  },
                  rz: {
                    a: 0,
                    k: 0,
                    ix: 10,
                  },
                  or: {
                    a: 0,
                    k: [0, 0, 0],
                    ix: 7,
                  },
                  p: {
                    a: 0,
                    k: [1425.88, 199.185, 0],
                    ix: 2,
                  },
                  a: {
                    a: 0,
                    k: [7.434, 11.231, 0],
                    ix: 1,
                  },
                  s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6,
                  },
                },
                ao: 0,
                ip: 0,
                op: 100,
                st: 0,
                bm: 0,
              },
            ],
          },
        ],
        layers: [
          {
            ddd: 1,
            ind: 1,
            ty: 0,
            nm: "dots",
            refId: "comp_0",
            sr: 1,
            ks: {
              o: {
                a: 0,
                k: 100,
                ix: 11,
              },
              rx: {
                a: 0,
                k: 0,
                ix: 8,
              },
              ry: {
                a: 0,
                k: 0,
                ix: 9,
              },
              rz: {
                a: 0,
                k: 0,
                ix: 10,
              },
              or: {
                a: 0,
                k: [0, 0, 0],
                ix: 7,
              },
              p: {
                a: 0,
                k: [851, 749.5, 0],
                ix: 2,
              },
              a: {
                a: 0,
                k: [851, 749.5, 0],
                ix: 1,
              },
              s: {
                a: 0,
                k: [100, 100, 100],
                ix: 6,
              },
            },
            ao: 0,
            w: 1702,
            h: 1499,
            ip: 0,
            op: 100,
            st: 0,
            bm: 0,
          },
          {
            ddd: 1,
            ind: 2,
            ty: 2,
            nm: "blue-think-block",
            refId: "image_3",
            sr: 1,
            ks: {
              o: {
                a: 0,
                k: 100,
                ix: 11,
              },
              rx: {
                a: 0,
                k: 0,
                ix: 8,
              },
              ry: {
                a: 0,
                k: 0,
                ix: 9,
              },
              rz: {
                a: 0,
                k: 0,
                ix: 10,
              },
              or: {
                a: 0,
                k: [0, 0, 0],
                ix: 7,
              },
              p: {
                a: 0,
                k: [1412.406, 183.131, 0],
                ix: 2,
              },
              a: {
                a: 0,
                k: [60.249, 78.977, 0],
                ix: 1,
              },
              s: {
                a: 0,
                k: [100, 100, 100],
                ix: 6,
              },
            },
            ao: 0,
            ip: 0,
            op: 101,
            st: 0,
            bm: 0,
          },
          {
            ddd: 1,
            ind: 3,
            ty: 0,
            nm: "dots",
            refId: "comp_0",
            sr: 1,
            ks: {
              o: {
                a: 0,
                k: 100,
                ix: 11,
              },
              rx: {
                a: 0,
                k: 0,
                ix: 8,
              },
              ry: {
                a: 0,
                k: 0,
                ix: 9,
              },
              rz: {
                a: 0,
                k: 0,
                ix: 10,
              },
              or: {
                a: 0,
                k: [0, 0, 0],
                ix: 7,
              },
              p: {
                a: 0,
                k: [910, 839, 0],
                ix: 2,
              },
              a: {
                a: 0,
                k: [851, 749.5, 0],
                ix: 1,
              },
              s: {
                a: 0,
                k: [100, 100, 100],
                ix: 6,
              },
            },
            ao: 0,
            w: 1702,
            h: 1499,
            ip: 0,
            op: 100,
            st: 0,
            bm: 0,
          },
          {
            ddd: 1,
            ind: 4,
            ty: 2,
            nm: "red-think-block",
            refId: "image_4",
            sr: 1,
            ks: {
              o: {
                a: 0,
                k: 100,
                ix: 11,
              },
              rx: {
                a: 0,
                k: 0,
                ix: 8,
              },
              ry: {
                a: 0,
                k: 0,
                ix: 9,
              },
              rz: {
                a: 0,
                k: 0,
                ix: 10,
              },
              or: {
                a: 0,
                k: [0, 0, 0],
                ix: 7,
              },
              p: {
                a: 0,
                k: [1467.305, 273.87, 0],
                ix: 2,
              },
              a: {
                a: 0,
                k: [60.249, 78.978, 0],
                ix: 1,
              },
              s: {
                a: 0,
                k: [100, 100, 100],
                ix: 6,
              },
            },
            ao: 0,
            ip: 0,
            op: 100,
            st: 0,
            bm: 0,
          },
        ],
        markers: [],
      },
      container: document.getElementById("aniMain1"),
      path: "data1.json",
      renderer: "svg", // Required
      loop: true, // Optional
      autoplay: true, // Optional
      name: "aniMain1", // Name for future reference. Optional.
    });
    animation;
  },
};
</script>

<style lang="scss" scoped>
.content-svg {
  background: #f2f3f3;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
  opacity: 70%;

  .arrow-content {
    width: 100%;
    height: 15em;
    padding-left: calc(50% - 28em);
    .arrow {
      width: 15em;
      margin-top: 3em;
    }
  }

  .lune {
    margin: auto;
    margin-top: -12em;
    width: 80em;
  }
}
</style>