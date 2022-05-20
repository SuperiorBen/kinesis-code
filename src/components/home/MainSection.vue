<template>
  <div class="content-section1">
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

    <div class="content-animated4">
      <div id="aniMain4"></div>
    </div>
    <div class="content-animated1">
      <div id="aniMain1"></div>
    </div>
    <div class="content-animated2">
      <div id="aniMain2"></div>
    </div>
    <div class="content-animated3">
      <div id="aniMain3"></div>
    </div>

    <div class="content-text">
      <p class="title-head">
        Create your platform for <span>digital business</span>
      </p>

      <p class="paragraph">
        By bringing together advances in cloud infrastructure, intelligent
        operations, and modern applications, we help businesses deliver on the
        promise of digital transformation.
      </p>

      <div class="actions">
        <div class="action1">
          <div class="action-image-button">
            <img src="../../assets/images-home/section1/advice.png" alt="" />
            <div class="button">
              <img src="../../assets/images-home/section1/advice.svg" alt="" />
              <p>Get advice</p>
            </div>
          </div>
        </div>

        <div class="action2">
          <div class="action-image-button">
            <img src="../../assets/images-home/section1/bitcoin.png" alt="" />
            <div class="button">
              <img src="../../assets/images-home/section1/cryto.svg" alt="" />
              <p>Crypto business</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // alert(screen.width +  " " +  screen.height);
    // alert(window.innerWidth +  " " +  window.innerHeight);
    
    let animation1 = bodymovin.loadAnimation({
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

    let animation2 = bodymovin.loadAnimation({
      animationData: {
        v: "5.9.0",
        fr: 25,
        ip: 0,
        op: 100,
        w: 1702,
        h: 1499,
        nm: "animated3",
        ddd: 0,
        assets: [
          {
            id: "image_0",
            w: 50,
            h: 164,
            u: "",
            p: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAACkCAMAAADi3o3dAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAQlBMVEVHcEz/m3z/nnv/nXz/nXwbk9Ibk9Ibk9Ibk9R7lbT/n3kak9L/nXsbk9IYj8//nXqSmKU7lMYbk9L/nXtalrrQm40HnuTOAAAAEnRSTlMARaCAxcXmgj0QJlfspCBn++BBNTTZAAACZklEQVRo3u2Z25KkIBBEUUFEu7UHZv7/VzfmjjZCHjf2bev9RJJVRRV2G/McobfWbgZEsOk9Bkyk1KnEfPsi0i2IyJB+wopI/4uodmyGiHa6HBHt5CcT7exkRDu3hO3sTqbZmXdI6vnJ0kxL05TZ7BCOSKq7SaUYiA0laXNfgho3NHRdz072qWUxkl1NvZpb4v1sOTJzZNfPIhLyDIijpuNInoEZz0191lpWy33S1FGbj+cLyMyRjVem54i9UH9xo8140+xG1MAR1X/W/zfey2oxLfdvuZmB3/8cSRcQzf8Gxn/pCdBz5MKUTbjJ1GJeeM7wxbTfMjeOaMW0f/vOGnCTacXcIwn3pea/Q2+ZEtJzRPEfEvd/QDqOKMV8vH7E40327+JPfGDtZl7iLl7f2sW8x0M8OnCur3hpLcD4HHeOxIUjI0fiVCPWIuJryPQf+ffIEnHHeF79C4grItUbMxaR6tyLuPnLCXPcveNWPK59FSmfq1aWMGLkRCRyEcdFHE1XJWHBnSGLvCWaCTsnIidGTJTXy+oqRDFhy1gjCgkLPtZjfSqgaxCj2iSn7RJckzi4b/h+dh98VGIFvp/caxJ57VUisyIjQerDk6o4EfEcWVvDt3pXcL5UZAytbVU916QhE0acwcjCLuPBvIh4g5FVno4nU9JhEQVx0pOgulW4iOEihotMXGTCIm1kNXRF3A1GVox4uLOP90RqscVAZJwMRHwAH48ViQriA/tErUicfj0F+Ogeq581JcQ3fgfwUKKA+PZv7R5KHLvSSz/nOyixQ7z6H7iDEr9PN1niGwIS3x2AJP4AeAj0RpSR4UMAAAAASUVORK5CYII=",
            e: 1,
          },
          {
            id: "image_1",
            w: 106,
            h: 142,
            u: "",
            p: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAACOCAMAAADuKm0xAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAVFBMVEVHcEz/n3n/n3wck9KhmKYbk9L/oXsakc8Xi8gTgLgEXoobk9P/n3z/n3oIaJf/n3sKbJz/n3v/n3ykm57/n3r/n3wbk9L/oHsAU3sRfLMJaJhll7b8Gd2bAAAAFnRSTlMAJ7vIEO7ZbyVJ9KCAYMSgl3BA9pBQVK+J3wAAAudJREFUaN7tmdmWmzAQRAUSq1e8tMDz//8ZY0/GCJDNoqrknKQf/HpPlVqlbqzUs04noxi1TW1bWzjNPEH3SiMwKrY/lWJJke3UDntQXdSW5d9/1F+Osv8EylQnEipKYZnhhIU9VO0vKApPdlCpYaFQJHXtk2LYq7XtkQ6kYMe+IhfeFXYi0EY0FPbBj0k90UfteKiIhgLPZgfaUTnBhD0qZWhH5RwWej3YvVCVojkI7kClUlpfqIonqzvInHgOxmDUhXe1Il42dR1Ey7r8mchFpxNv73EeLUuLXHQ6Gd6ExpybHAdjWmCgQzflyap4W0JkebN7ypNFXOlcB7Gh6zoIHQkPlpZOV96qryxPlusgNJ12vQ9ArEcLfI1j2temXuRCZfUC43w2nMA4i0iSMRz8kkcVeAfPT5IkBu7gtyiRDfzRkp/KwQ5+vVCwzhiIwp3WwWkKqKxrXxTwtAaiRDTIwnggCtbwu4EoGMs4nY5tjdiKkFjVKArCisZREFYqNFYlPJYPBeh57WeFzo2NFxU8ozI/SpKw2ZvLO1bY5kjescI2R/YWFfTA8vcoSQpKD4a+zXnyiRWuOzL5WMmmQCeGQ8sC4EwiEyvRWVasutiFzCt9V1igunBc4maBRKNlcenWVBOy4ydIBB3Xmru+WY+a/Ojo9Swd/HattzBPeBYWt4ZloTrWdX1rGoaFD1aLWy5v+ujzzbpXuRA32cIOa6mZ2TLWAzeXNT2Bi7peR9MzorccwOqygVh4nzZGYHO0zXrE9nW9gqbnjWzjsPIW3MK2Pcp6sTQ9dww41p5qgkXGJxc/wZbtZT4X7z76UUvntmM5V9nyCd/v4vi9XrVLzHJx7Z453cX1G63fRfeaBdmdiynCQm3OWfnpxALu6Pv3rRj0k4rXxSb8xxtvLzaAT/S+XmwQX0bHXTxivs+PCNuj/iMaCIORBsJKhayusDJX2NrTSK/ZA0/6PXMXSpFYHFLLOipW+TT9Am/WQL6NTWquAAAAAElFTkSuQmCC",
            e: 1,
          },
          {
            id: "image_2",
            w: 128,
            h: 476,
            u: "",
            p: "data:image/png;base64,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",
            e: 1,
          },
          {
            id: "image_3",
            w: 374,
            h: 483,
            u: "",
            p: "data:image/png;base64,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",
            e: 1,
          },
          {
            id: "image_4",
            w: 102,
            h: 90,
            u: "",
            p: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAABaCAMAAAB9udOGAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAACXBIWXMAAAABAAAAAQBPJcTWAAAARVBMVEVHcEwAUnwAUHYAU3wAUHgAVXoCVHwAT3wAU3sAU3oANE4AQGAAUHcAT3YAU3vK7P0AJztnob664PMUYoicyeBIiqosdJh3uHGFAAAADnRSTlMAwJ9GZTDRE/CF/vrgsDWmGhQAAAKYSURBVGjevZrrloMgDIQFsYgXwOv7P+ra2rWKoiYE5+fuab8TM8xiskniSLBFKoml9KVXYjIORemtXlkEiHxpVzk9J8v1gQQxRRxStKY1gvh+69D0pu2HFYdL8ifWtGZWszaCpKWMvVk0RDDC7LGx/VFMuzFcSoKpPxSzEb3hxK6WSeOWw8Mf2bsxnUMxnWPs4ORhH485FLM7QIHJk76/o3MpvSZOnuqwmIY4eeZUdjvTdrTJI/MDM3uKCUieOcuae8Xgk6c6xIzaK5wR9BFm0CdCJc8R5pSCM9z8wfWxaa8omOTRbjn9qK8FTh695fSDviVo8iwf7JpJnb4roOE0WuIZDCh58gAOIHkOrpr3BUgeyQM4ECOoEA7ACGlIgwCcLKRBgOSR7BkjBDUIkjwixAiAP0FZiBEAnJCTCrry8Gcw+AYBL3DYkwq9JyIbBL6OyvoRDO6kYi7XiAah7vBZ9QgGHqUl8t0U2KDClmHTlXuy1ha4VxJIlBb2Ldw7I+Ck2lnIBnFQMZNUzAaV/5QCO6S4dVKLH0ZXWawGLRQLvblBonR5ZDMGPTxQt1w2qfz+pI7QIOsWg58inUSp3ReDHyd6o3RFKSimO/yKYp1fIRskTj22eWSfN+YR26D8jFI4lNaYJqU4qcUJZR4zDMiTyj2l7Ci6n2fZPLBBlSrOKDPGjNjxmxR8OkPs/dRLX/d/mCZkIC+/Fqp9pbwXJ79RZvBAnntKWabnDc0GSHgg/+V8J00x1nELp1+GZuH7klszEoq1jHoG4939EWOu741Eu7mLa0lFtv89NUIdb5sdaxF8YgTSvbbXCIx2qe0zAvWS/tgIEf6HQlFsLTBGiELZGUEkkbQ2AsuSaFqMUKVJVCnGWK2y5Hn9ARbL0C+xEPSfAAAAAElFTkSuQmCC",
            e: 1,
          },
          {
            id: "image_5",
            w: 13,
            h: 20,
            u: "",
            p: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAUBAMAAACkHKocAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJ1BMVEVHcEz///////////////////////////////////////////////8NopmKAAAADHRSTlMAwIDmEECgKmjQsFCnebI/AAAAU0lEQVQI12NgAALWEBDJwG1z0gFIscucObMBSOWcOXNGgYFF+QyYdj4DoXWgtAxWegGUFkCjGyD0YQYInQKhpzKAaQuQ5WvOHANZzlB8MIABCQAAyiA9/Bd6BzkAAAAASUVORK5CYII=",
            e: 1,
          },
        ],
        layers: [
          {
            ddd: 0,
            ind: 1,
            ty: 2,
            nm: "right-arm",
            refId: "image_0",
            sr: 1,
            ks: {
              o: { a: 0, k: 100, ix: 11 },
              r: {
                a: 1,
                k: [
                  {
                    i: { x: [0.667], y: [1] },
                    o: { x: [0.333], y: [0] },
                    t: 0,
                    s: [0],
                  },
                  {
                    i: { x: [0.667], y: [1] },
                    o: { x: [0.333], y: [0] },
                    t: 50,
                    s: [11],
                  },
                  { t: 99, s: [0] },
                ],
                ix: 10,
              },
              p: { a: 0, k: [1527.451, 813.457, 0], ix: 2, l: 2 },
              a: { a: 0, k: [7.918, 143.745, 0], ix: 1, l: 2 },
              s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
            },
            ao: 0,
            ip: 0,
            op: 750,
            st: 0,
            bm: 0,
          },
          {
            ddd: 0,
            ind: 2,
            ty: 2,
            nm: "left-arm",
            refId: "image_1",
            sr: 1,
            ks: {
              o: { a: 0, k: 100, ix: 11 },
              r: {
                a: 1,
                k: [
                  {
                    i: { x: [0.667], y: [1] },
                    o: { x: [0.333], y: [0] },
                    t: 0,
                    s: [0],
                  },
                  {
                    i: { x: [0.667], y: [1] },
                    o: { x: [0.333], y: [0] },
                    t: 50,
                    s: [6],
                  },
                  { t: 99, s: [0] },
                ],
                ix: 10,
              },
              p: { a: 0, k: [1482.283, 829.894, 0], ix: 2, l: 2 },
              a: { a: 0, k: [94.555, 120.774, 0], ix: 1, l: 2 },
              s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
            },
            ao: 0,
            ip: 0,
            op: 750,
            st: 0,
            bm: 0,
          },
          {
            ddd: 0,
            ind: 3,
            ty: 2,
            nm: "body",
            refId: "image_2",
            sr: 1,
            ks: {
              o: { a: 0, k: 100, ix: 11 },
              r: { a: 0, k: 0, ix: 10 },
              p: { a: 0, k: [1496, 945.391, 0], ix: 2, l: 2 },
              a: { a: 0, k: [63.837, 237.772, 0], ix: 1, l: 2 },
              s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
            },
            ao: 0,
            ip: 0,
            op: 750,
            st: 0,
            bm: 0,
          },
          {
            ddd: 0,
            ind: 4,
            ty: 2,
            nm: "cable",
            refId: "image_3",
            sr: 1,
            ks: {
              o: { a: 0, k: 100, ix: 11 },
              r: { a: 0, k: 0, ix: 10 },
              p: { a: 0, k: [1430.769, 914.125, 0], ix: 2, l: 2 },
              a: { a: 0, k: [186.941, 241.157, 0], ix: 1, l: 2 },
              s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
            },
            ao: 0,
            ip: 0,
            op: 750,
            st: 0,
            bm: 0,
          },
          {
            ddd: 0,
            ind: 5,
            ty: 2,
            nm: "clavija",
            refId: "image_4",
            sr: 1,
            ks: {
              o: { a: 0, k: 100, ix: 11 },
              r: {
                a: 1,
                k: [
                  {
                    i: { x: [0.667], y: [1] },
                    o: { x: [0.333], y: [0] },
                    t: 0,
                    s: [0],
                  },
                  {
                    i: { x: [0.667], y: [1] },
                    o: { x: [0.333], y: [0] },
                    t: 50,
                    s: [22],
                  },
                  { t: 99, s: [0] },
                ],
                ix: 10,
              },
              p: {
                a: 1,
                k: [
                  {
                    i: { x: 0.667, y: 1 },
                    o: { x: 0.333, y: 0 },
                    t: 0,
                    s: [1614.565, 728.706, 0],
                    to: [-0.167, 0.167, 0],
                    ti: [0, 0, 0],
                  },
                  {
                    i: { x: 0.667, y: 1 },
                    o: { x: 0.333, y: 0 },
                    t: 50,
                    s: [1613.565, 729.706, 0],
                    to: [0, 0, 0],
                    ti: [-0.167, 0.167, 0],
                  },
                  { t: 99, s: [1614.565, 728.706, 0] },
                ],
                ix: 2,
                l: 2,
              },
              a: { a: 0, k: [16.533, 18.565, 0], ix: 1, l: 2 },
              s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
            },
            ao: 0,
            ip: 0,
            op: 750,
            st: 0,
            bm: 0,
          },
          {
            ddd: 0,
            ind: 6,
            ty: 2,
            nm: "toma",
            refId: "image_5",
            sr: 1,
            ks: {
              o: { a: 0, k: 100, ix: 11 },
              r: { a: 0, k: 0, ix: 10 },
              p: { a: 0, k: [1246.882, 1120.045, 0], ix: 2, l: 2 },
              a: { a: 0, k: [6.436, 9.857, 0], ix: 1, l: 2 },
              s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
            },
            ao: 0,
            ip: 0,
            op: 750,
            st: 0,
            bm: 0,
          },
        ],
        markers: [],
      },
      container: document.getElementById("aniMain2"),
      path: "data2.json",
      renderer: "svg", // Required
      loop: true, // Optional
      autoplay: true, // Optional
      name: "aniMain2", // Name for future reference. Optional.
    });

    let animation3 = bodymovin.loadAnimation({
      animationData: {
        v: "5.9.0",
        fr: 25,
        ip: 0,
        op: 100,
        w: 1702,
        h: 1499,
        nm: "animated4",
        ddd: 1,
        assets: [
          {
            id: "image_0",
            w: 252,
            h: 293,
            u: "",
            p: "data:image/png;base64,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",
            e: 1,
          },
          {
            id: "image_1",
            w: 65,
            h: 279,
            u: "",
            p: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAEXAQMAAADImbtYAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAACXBIWXMAAAABAAAAAQBPJcTWAAAABlBMVEX///////9VfPVsAAAAAXRSTlPA24Ia1gAAACNJREFUSMftxrEJAAAIA7B+7uk6CP4gJFOSU73MzMzMzH7uDFpsFVGSnD9PAAAAAElFTkSuQmCC",
            e: 1,
          },
          {
            id: "image_2",
            w: 65,
            h: 279,
            u: "",
            p: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAEXAQMAAADImbtYAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAACXBIWXMAAAABAAAAAQBPJcTWAAAABlBMVEX///////9VfPVsAAAAAXRSTlPA24Ia1gAAACNJREFUSMftxrEJAAAIA7B+7uk6CP4gJFOSU73MzMzMzH7uDFpsFVGSnD9PAAAAAElFTkSuQmCC",
            e: 1,
          },
          {
            id: "image_3",
            w: 233,
            h: 285,
            u: "",
            p: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOkAAAEdBAMAAAAbbV1rAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAGFBMVEVHcEz///////////////////////////8dS1W+AAAAB3RSTlMAwH9MHOqoh2wO3wAAAt1JREFUeNrt2U1r20AQBuCNpTpXK2Dr6m5T9yqsgK9qTMi10BBf01DjayVbmr9fKIXYSZqdtWZ3WvedH6CH/Zh3QGsMv5Zlaa39lu3VxNryyoSppLSzLKc/VZvZshIF09JmK2LU5IMQnM5nY+JXe9F/r5c2I++6v+x1kHZMx9X9VXTyV11Ux5zlmnpW67vNy/ckUT7LTeY5CVVXsJe5IrmqWWy5JtliHO61tMlgQ5gudhnGdLA5Bau20FCprjRUaioNlb6qqHSporaVhkqNikrfVdRX9zi4+uo9Dq/SVEXtVFR6UFE7FfXlYqOonYr6YrFx1E5Ffd6zkdStivosjSOpdKeidirq4X2Kpu5U1IP7FE092OJ46lZF3d/ieOr+FkdUdypqraJSoaJ+UVEbFfWpd2KqT70TVb1TURsVte2h/n5V6dOxPmr2ePB6k5az8ZEdy1TbiS0FfvBuPdTMvvGGkPr8P++Yav3ofJe69jiliqeOOE8Ua9+ckFBN+tHzOomofHYrqZp043WdhFSTrHzSSUo1n33SSUw1vD1+EFYTj0ssp5oF/xILqqzFNtIqa7GtuDpkJ7GkyhpgU3H1hts6omrCbR1RlZMUO3n1htk6suqAOXVkVbPiNaywuuA1rLD6jjfrhNWEFxPCKuNgRwHUT6yYkFZvWTEhrbrnzjaAmrDCSVp1X6cuhOocAHUI1Z1OIdRzTiSKq0NOJIqrA04kiqupiupunVEIdaOiOvP/Rwh1wYh/efWcEf/y6pmKOmQMHXl1oKImjFEnrxrGqDsZNXcP2ADqRkV1RmIVQnVGYnE66q2K6oz/6emoZ/+ROlRRnaNuBLWfmkA9SdVAhfqvqzlUqFChQoUKFSpUqFChQoUKFSpUqFChQoUKFSpUqFChQoUKFSpUqFChQoUKFSpUqFChQoUKFSpUqFChQoUKFSpUqFChQoUKFSpUqFChQoX616lz+3YVR6jOb/4E8qHOAfGHv/IAAAAASUVORK5CYII=",
            e: 1,
          },
          {
            id: "image_4",
            w: 301,
            h: 370,
            u: "",
            p: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS0AAAFyBAMAAABSFZH/AAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAHlBMVEVHcEz////////////////////////////////////JATChAAAACXRSTlMAxH8RMl2esOAO5kYzAAAHW0lEQVR42uXdsW/bZhQEcCYi5dWF28Gb1mzSVHvjWG1atano5M1AJ28B5AweLUu09d+2KLK1he69d3ckEM0B8sN99L0niraa33+68Pqlobwu/j/fX39+//e35wuvA4U1P4Ovjde1BVmnxurq0Lh2XtcaZA2N1dWicd14Xfcg63Vpdc1uQdexsbpWIOuj97qeoiXhcYU71eT6Ei4JiyveqR7XNl4SDleiUy2udaIkDK7ZS7xTHa5VpiQMrttEpxpccKcuvK6HTKfqXXCnPnpduU6Vu5KdKnehnXrurS64U58bqyvbqWpXtlPFrnSnil3pTtW68p2qdeU7VeoqdKrUldxT1a4ZGtexsbpW+REkdVU6VeiaF0aQ0lXqVJ0r995f74I7tbG6ip0qc61LI0jmqnaqyrWqjSCVK3P72eG6qnaqyPVQHEEi17zcqRrXtjqCNK6OEhffRehUhYswgiQuUlxsF6VTBS7GCFK4WHGRXXPGCBK4KCOI7/pcubMkdHFGEN1FGkF0F9qp743VxRpBbBdrBJFd8Ai6aayu6p0lkQuO67mxuubUuHgu3giiungTm+vacuNiuTrexKa6iBOb6WqJE5vpWrPj4rjguK69rnvmxOa5uBOb51rx42K4aO+xyS50BH30XteDIC6CSxIXwfWFPLFJLnhib7yurSSusksUV9nFn9gUF3/B4bhUcRVdsriKrrvy59gSl2LBYbgUCw7BJYyr5LrSxVVySRacukuz4NRdyrgKLmlcBddWGVfepVpwqi7RPlh1ieNKu8RxZV3wgrPwumT7YM2l2wdrLnlcOZc+rpwLXZ/fG6tLuQ9WXML1ueJyxJVxOeJKuCxxJVzou43cPph3SdfnvGtuiSvu8sQVdpniCrtMcUVd7I/XWS7Nzfqyq3PFFXRtXXHFXL64Yi5fXCEX/eENkov+8AbHxXzckulyxhVwWeMKuNbOuHBXa40Ld3njgl2CR4MoLjSu0puzuIv67DPR5Y4LdNnjAl32uDCXPy7M5Y8Lco0QF+QaIS7ENUZciGuMuADXKHEBrlHiuux6HyUu+BcWzXHxXNy4aC5yXDQXOS6Wix0Xy8WOi+Six0Vy0ePiuPhxcVz8uCguQVwUlyAuhksRF8OliIvgksRFcEniqrs0cdVdmrjKLlFcZddbM9G8+mm6zt8m6mJ8SPVD9Sr4hwhG2Cc2E3UNE3VNdV8tP/Qiez/0baIufomRXMNE7wNM9b4J/dKn3Zc7TdRFbn2ea5io6/zHRF3ezzsCr58n6jr3E3WdJuoidgXXdZioi/TQEN81TNTlew5mpHJlu877ibpI5cp3PU/UxQns8vMAD6MEBjw/8TLGNAKeN/l1jPENuOAHkJmBIa721h8Y4sJ/C4YXGOQKn6Tr9ztm0ZPceVzhkxxMrvBJ7kyu6M/kYHKF23VncsG/msYJDHe11sBwF/4HohmBBVyzJ2NgARf+Z/cJgUVc0RLbuVzBFXFwuaKX/sLlmsWW/ZPLFb30Ny5X8NI/2VytKbCoq/nNE1jYFVxdNy5XcOE52lxNrCt6myvWFc82V7ArepurMwSWceHfj56/45pyxcp1b3PF9opUYDlXrFyvba5YYIPPFQtsZ3PFbqQMPldsGm18rlBgJ59LHFje1UmHUd4VG9+9z9Uph1HBFQrsY+lzdcJhVHGFAhuMrk43jEquUGDO7+/oZN1ac4U2auf3w0Q2auv36axF3Vp1RQKzfl9TJLBHo6vTdGvZFeqwjdHVSbq17goF1htdkcDejK5IYHBVMFydoCoYrkhgg9P1mV8VFFfkveTR6ZrTq4LjigR243QFAnt1uiLPT+6crhV5SLJckRuIvdEVCezodLXcIUlzRRbqR6erpQ5JnisyvTdOV8e88omuQGCX79IxXYFh9NXpCkzvwer6xLvyqa7AMDo6XfAXAP39WjpdgW69droCw2iwujrWlU92Bbr1aHXNSZ3PdgW69dHqwvfWg9U1e6Hs+XRXoCrerC68W1+trkBV7KwuvCpOVlegKnqrC6+KG6trRhjeClegKjZWV1cf3hIXXhX/O7w1rnl5eGtc+BuQg9XV3FcrTOTCh+Te6sKv/MHrmhcrTOXCb5wfvS54SP733VaZC7/yd1YXfuWfvC78Q8ml1dU8VW6hCF13lVkkdLWVWSR04Vf+3uuCO//d68I7f+F1wdvOs9cFX/mvXhf+NwUWXtdVeqnQuuA9/1/vi7Qu/B3uo9fVZZcKsQu/t7P0ulbJpULtapNLhdqFD+/e65rnDlLugivs4HXhFdZ7XXCF7b0uuMIGs2uVOUiDq80cpMGV+uJuh+sqcZAOF/yR5JvXBVfYu9kF30LZeF3wG8m92XUfPkiPqwsfpMcFz6K92XUXrVaTq41Wq8kF3xHYm12fggfpckUP0uWCl4qvZhd6kAezaxY7SJsLPshrs+sqdJA+F3yQS68rdpBGF3qQJ7MLXfP/uddqdMFr/s7sQg/yaHahP5GvZhf8E7kwu9CDfDO7Igc5zddfHyMNWLAoQQsAAAAASUVORK5CYII=",
            e: 1,
          },
          {
            id: "image_5",
            w: 205,
            h: 293,
            u: "",
            p: "data:image/png;base64,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",
            e: 1,
          },
          {
            id: "image_6",
            w: 205,
            h: 293,
            u: "",
            p: "data:image/png;base64,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",
            e: 1,
          },
          {
            id: "image_7",
            w: 80,
            h: 80,
            u: "",
            p: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAIVBMVEVHcEz+mQD9mQD/mAD+mQD9mQD/mgD/mAD/nwD+mgD+mQBQOMTvAAAACnRSTlMAxZpF6oBnIxCwMuOyIAAAAZhJREFUSMfFlz9LA0EQxc+cmsPqRES9KqJVqggGxEpMo1dFQkCsLIRoKhG1sFLxA1iIQiovbhIyn9L7G/b2bneeIOSVx48ZZndm9p1l5VVtnq2GWu/cWiZVb3xKJT4N6INHkoKejtsjRTvl3BUVtAbFi/RV5F7LOBKXKmf7pSAFau0XpFELSRyrLXOOpweHMvhCBtWwgLmQxoByyIEZHGXcEjFqpOAhB56kpfgcOAUzZ7mfePAoBus8OI7nhOdIRGAFAClqyzcEdEOwj4AT/v5m1TgIR0E4LBBIz1jRUdkLGFizVjDQ5Xss0TcKTvSTn9cP0jvJiXsYOJofOETB4N/B6TyPB75CuCn6aJvBjQuPAjxc8LjCCwBeKfCSwtfeIgK+Y69H8n4g1Yg/PR/ItndjcJkHU6vi8UOd6J4DN1OQyy1mJqnOjUGmCv8QIiFlh1QBAxpDjnMmTl+4aOTt3r4O3FD8ozMAvJ7BkqqJdV5TtMts812RO9cYeyW7uNZZe3tX5o5N/xWPHxl22rPMspvd7a1u50D9/gvLVoziNk9aXQAAAABJRU5ErkJggg==",
            e: 1,
          },
          {
            id: "image_8",
            w: 80,
            h: 80,
            u: "",
            p: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAIVBMVEVHcEz+mQD+mQD+mgD+mQD/mAD/mAD/nwD/mgD9mAD+mQBxjAGmAAAACnRSTlMAxXyn6UUjEGCQYgjxYAAAAZhJREFUSMfFl71Lw1AUxa8fbdQpKipk0korOFVRh0xCESFTLYLgJNXJSdHFLYNTJ+dOpomlvX+lSfpa8l7y3jtbz1h+3Jub3I9TIln13tF2qp3mE5lUPw5YKDk3oH2PC4paOu6OFV1Wc99c0h4UL9NVmfuq4jg5VLlaUAlypNZ+yhrdyNwHayUldzw9GBfBdzaojQWUQhoDFkP6ZnA051bZoq4AH23grSglsIExmHme+9UOXiM1Z5rkc2LnOMnANQDkMAU/EdBNwQECjrFa8q/oIBxH6bBAIL/RJgaGtIKBP7SFga69x2b6RcGxfvJl/dEQAyfkYeBoeWBMAYNdAYNw6iW+Hh/9hHBTDNA2gxsXHgV4uOBxhRcAvFLgJYWvvXUEbGPXY3Y/kGryZY+sgPx8INveRU+csCrWJp+KM/xiAw8EuGGreWGShkjNwDkMCXMf04JBMoaUPJePPKH5pSdd2e7d68B9xT86vr0SkyVVE+tMbtniZnoucycaYx9gXPqcF0WuY/pf0V+gnRaZVes1znYbzQf1939Chorn9VI0lgAAAABJRU5ErkJggg==",
            e: 1,
          },
          {
            id: "image_9",
            w: 395,
            h: 395,
            u: "",
            p: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYsAAAGLAgMAAABLjlYYAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAACXBIWXMAAAABAAAAAQBPJcTWAAAADFBMVEVHcEz+mQD+mQD+mQCJGjlnAAAAA3RSTlMAwGhy5fr6AAABu0lEQVR42u3RsU3DABSE4We7cOHCPY1H8AhmCSRKSpQl7FEo2cJboChVhkgQTTAS0IASKUXuZD39/wKfdBfxXfGg6/GHiGbRdfg1eoPRGYzZYCx6ozAYjcGoDUZvMDqDMRuMRW+UBqMwGI3BqA1GazB6gzEYjNlgjAZj0RulwaiSGHUSozUYXRJjMBhjEmPRG6XBKAxGZTCaJEZtMFqD0RuMLokxGIw5iTEajEVvlEmMwmBUSYwmiVEbjDaJ0ScxOoMxJDHmJMaYxFhyGCXG1UZhMKokRoOxKqM2GC3G1UaPsSqjS2IMGFcbM8aqjBFjVcbNGjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMLIZHwZjrzc+Q29sDcakN274+EXjXm8cQm9MeuOmb5w3TpPe2IfceA+5ceulzhlPITe2ITcExH/jPeTGW8gNDfHH2IXceA61cXoJtbGbQmwcXyO0xmkToTWOm0lLxN3Flb4A0crFkgfcFHYAAAAASUVORK5CYII=",
            e: 1,
          },
          {
            id: "image_10",
            w: 395,
            h: 395,
            u: "",
            p: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYsAAAGLBAMAAADEzqO4AAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAD1BMVEVHcEz///////////////8T4DEaAAAABHRSTlMAwII3kzSvHAAAAoJJREFUeNrt101qG0EYBNCenwNEzhxAWHMAQeYC48z9zxSyMJHAJhJo8XXxat+LR3U1dGu3GU595nynaOvRZ37cKaYjgjFnMNYIRrd36p4xZDC2DMYSwRiPCMaQwVgzGEsEo+Np3DKGDMaWwVgiGNMRwRgzGHMGY81gLBGMrhf+jzFmMIYMxpbBWDMYRwRjymCMGYw5g7FlMNYMxhLB6Pyh+mSMGYwhgzFnMLYMxprBWDIYRwRjxCjEmDMYG0YhxprBWDIYRwRjymCMGYwhgzFnMDaMQow1g7FkMI4IxpTBGDEKMYYMxoxRiLFlMFaMQowlg3FEMCaMQowRoxBjyGDMGIUYG0YhxopRiLFkMA6MOowJoxBjxMB4NWPAKMSYMQoxNgyMVzNWDIxXMxYMjJd/YstlxsDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAKMs4RzB+twTGR0tg7NcIxrklMIoqnmRcWgKjrOIpRl3FM4xrC2DslRUPMz5KKx5l/Gytf0bxKh5kVK/iIUb9Kh5g7JfW+mf0gfgP4/3aumfs/SC+Z+yX1lO+Zrz1hfiSsV+urXXO6GoR3zBOfRpuGfvbpVfDJ+PUNeFvhvfLr2fP/AHmVAN0PnugEwAAAABJRU5ErkJggg==",
            e: 1,
          },
          {
            id: "image_11",
            w: 237,
            h: 237,
            u: "",
            p: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO0AAADtAgMAAAAuIxocAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAACXBIWXMAAAABAAAAAQBPJcTWAAAACVBMVEVHcEz+mQD+mQD6PFsSAAAAAnRSTlMAwO33D4gAAABMSURBVGje7csxEQAwCASwN4kJpFVlPcCxJXtSc0m/MVmWZVmWZVmWZVmWZVmWZVmWZVmWZVmWZVmWZVmWZVmWZVmWZVmWZVmWb/LGBzUy0h+IutV5AAAAAElFTkSuQmCC",
            e: 1,
          },
          {
            id: "image_12",
            w: 928,
            h: 875,
            u: "",
            p: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA6AAAANrCAMAAABvNAX0AAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAVFBMVEVHcEyY1/8BJzuX1/8AJzsAJzoAJzuP0PgmTGUAJzuZ2P+X1/+X1/+X1/8AJzuX1/8AU3v9/v8QYYkueqJus9uCw+pJkrpaockPQ1/J4/Q2XHGBlJ4eq+BWAAAADnRSTlMAsprb6cF7/RxMO4VZcEVWt4sAACAASURBVHja7N3bcuJYEgVQKOwSxmAIc3P4/z90bE9VF8YCJKFLHp213iZinro7A2XubWkyAaBrT1/m/kFAuOH89fjy1+MvQwpxzH89vHz38NuMQpDxfCnx8Ns/GQgwn4+PDy+lI/rkHw7EWEF/P5aM6KPnXBjut3Px/Gm1+P//+l3yQ2oVhUEsp8X6P7PnxdeIes6FCL+dzyfT+WdGl1/7qOdcGNrP8fwa0c9f0aeS51yxKPRnMVtfMP2cxJJVVOQCvf18rq94npTnolZR6MV0fZ1VFIYzW98yvbSKilxg4N/P/4/opDwV9ZwLw+2f/xTPl55zjSh0ZrGu6isVfXoUuUCkBVTkAsEfcEUuMID5ui6RC0T9Ab3a/hO5QMvWTXyuoiIX6Nxy3YzIBXowbTigIhfoQbFu7CtyeRK5QGcW63uIXKBTq/V9VhORC8RbQb1wAbp3pea3O2zf397f37fHfbP2n+dcuNOlqTu+n87a23bfZBUVucBdylPQ4vD6dj5s7zuRC/SstOe3e92UffPhfd/ghQs+twTNldyIiu2mdD4/bAuRCwy6gu5fN5u3CwP68nYUuUBvFvXm8+YqKnKBFq3qzuet51wvXIDuVtDiYz5vDejLy0HkAn04rylsq8znxyraKHKxikI95/nKx3xuXqoQuUDnzmsKr5UH9NYqOvFZUbjXWU3huKn2hPvnOfcgcoEeb0R1fkBFLtDvCvq1gdYZ0I8RFblAVxY/T7jVn3DviVysolD7RvTaZEBFLtDLCrrfNBrQhpGLd1zDDbN7V1CRC/R1Izo0/AG9uYpe/qyoH1Ho9EYkcoGOnNUUNncNqMgFurwR3bGC/reKilygoxX0eP+AXo9cfFYUhlpBRS7QrlZqCiIX6GMF3W9aGtCmkYsRhVOztm9EdSIX77iGOjeiQ2s/oLdXUZELDHIjErlAO1quKdR8x7XIBWrciNpcQSs9585ELlB5BT12MKAV3nE991lRKDPvdgWt/sIFkQv81FFNoaUXLohccCPqpqYgcoH7zTq/EfmsKLR0Izp09wMqcoHaFv3ciLxwAe5fQdebrge06WdFPeeSpWmPK6jPikJNRQ81BZELNDPveQW987Oi/oWRl1VPNQWRC9x9I9pv+hvQG5GLz4pCvzUFkQvU1GtNwTuuoZbFQDcikQvUXkHXm/4H1GdF4aLpkCvonZGLESWzG9FxmAH1jmsoNR98Bf37nHv1HdciF/K0HKymIHKBmjei/WbAARW5QMgbkcgFyg1cUxC5wBWLKDcinxWFn1bD1xRELpDIClppFRW5kI0gNQWRC5SYx1tBRS7wV6Cags+KwrlQNYV6kYt3XONGNPhzrsiFnEWrKYhc4J9F3BtRtcilePacy3iFrCnUbP+JXLCChl5FRS6MVNSagsgFftyIYq6gld5xLXJhhELXFEQu5O57TaHYxB7QCp8VnfusKG5EoV+48OiFC4xzBT0kMKA+K0o+FgndiEQuZCeNmkLNVVTkwjhX0H0yAypyIQvp1BS8cIHsb0TbZH5ARS7kIK2agsiFzKRWUxC5kPGNaJfSClo9cnkSuTCKFfSQ4oCKXBitRdI3on/Pud5xzSilWlMQuZDhCrpPd0CbvuPacy6RJVxTaBK5+KwoKd+Itgn/gIpcGP2N6DXxAW34woUHL1wgpuRrCiIX8rkR7dJeQUUujHsFPYxiQEUujHQF3Y7gCfeeyEX7j1iWY6kplKyiIhdGtoLuxzSgDSMXqyiBjKqmIHJh3Dei7Zh+QCu8cGHis6KkdCN6Hd2A3visqMiF0EZYUxC5MNYb0W5kK6jIhVGtoIeRDqjPijKKFXQ7xidckQvJGnFNoZ3IxWdFibOC7kc9oCIXkjPumkLNyOXiO679iBLiRrQd9w/o7VVU5ELkG9Hr+AfUZ0VJSA41BZELI7kR7Ua/gv59zvVZUZJQZFJTELmQonl2NyKRCwlZZVRTaCtyMaIMdCPaZzagVSIX77hmQLnVFEQuJCXjFbTSKipyYUg51hRELiS6ghabLAe06QsXRC50LdOaQt3IZf4ZufisKL3LtqZQL3JZi1wYwtyNqGrk4rOi9G+ZdU1B5EJSN6J97gMqciGW7GsKP59zDyIXwrCCthW5WEVpX1lNYfOSvWbvuPacS7craGEFrR65+Kwo3VNTELmQzI3oYEArRy4XPyvqPypao6YgciEwNYV7IhefFaXXG5GagsiFwDciNYX2IherKC2wglZaRUUuDGJhQDuMXKyi3GmlptBt5GJEaW8FVVNoHLl4xzVdUFNorf0ncqF1agoiFwJTUxC5EJiagsiFZG5EagrVIpejyIV+WEH7i1y845q6fPRB5EJgagrdRC6FyIX2V1A1hRbbfyIX7qem0OEqKnLBjSjFyMUqSjVqCt1GLt5xzV3UFEQuJHMjUlMQuWAFzS5y8VlRmvE2BZELgakpiFxIZgVVU+hyFRW5UJuagsgFN6KcnnN3IhfaoqbQe+Qy/4xcfFaUStQUeo9c1iIXGt6I1BT6iVx8VhQrqMiF5HmbgsiFwNQUOn3OPYhcaHEFVVPoNXLR/uMWNYXOR1TkghtR2pGLd1xT6UZkBRW5EImaQoTI5eJnRf0H6kakpiBywQqKz4py7wpqQEUuRLJUU4gVuUxELlxcQdUUelhFRS5Up6aQSORiFXUjsoLGjlyMaPY3IiuoyIVI1BRELiRzI1JTELlgBaXKKuqFC3ibgsiFyNQUho5cjiIXqq6gagoiF0JRU4geufisqBuRG5HIhRRuRFbQwVZRkQsl1BRELiRzI1JTSC9ysYqOWvHzRuQHNHDkYhXNy1xNIdhzrs+KcsKHQUUuJHMjUlMIH7kUz55zc6KmIHIhMDUFkQtx+VOWNFdRkUuWK6iaQjKRi8+K5kFNQeRCYGoKyUcu3nE9YmoKI41cjOg4rNQUEo9cfFY0oxuRmoLIhVDUFEQuBKamkMpz7kHkoqbgRpRq5DITuWRwI1JTCD6itz4rKnJRUyBq5LIWuWRxI/IDKnJBTQGRC7d4m4LIBTUF+lxFRS5jvRGpKYw8crGKqikQJXKZiFzUFBhyFfVZUTUFRC6oKdBF5HLxs6L+y1dTQOSCmgI+K6qmQMKrqMhFTYHQq6j2n5oCIhfUFLj8nHtsErlYRdUUiB25GFE1BQJELj4rqqZA5MilELmoKSByoZsbkRVU5IKaAsOuotp/agqIXFBT4Mpzrs+KqikgckFNgQ4iF3/loqaAyAU1BUQuagqIXFBToOfIxTuu1RRINHIxImoK9DSiTSIXP6JqCkSIXIoLnxV9MKFqCkSOXEyomgKBIhe/oWoKRI5cHuyhMVdQN6I8nnMPN55zf2yiv0yKmgJBIpfnkglVWXAjIkrkMv05oQ9GJcKNyAoqcvk7oQ9+QtUUCBq5fEzok5/QcDcif8riOfff34n+8hNqBWVgFyv0i/OHXIdcNQXibKKz88KCZ9wBLNUUPOZe/Au0s59QZQU1BeL8hs7Ot1B/eKamwBB2F39CLaFuRAyvuPQT+u0Z99G8qCkQaA2df3/GNaBqCkR6yF19LysYUDUFIv2ETg2oFZQQSv+Iu5hMDKiaAgFsS39CDaiaAiG8Xaj7GVA1BcKeib4PqKKCmgJDOdweUH/O4kZEqCX0+4Dq4qopECpoWZzGLP6aRU2BWFeibwOqiqumQKxf0G9VPyto3worKNd+QYvJowEdzlxNgau/oNOJFXRAPvrA9QF9Pl1B1RTciIgVsyxOX0qkpqCmwHDKigpWUDUFgtiVvVHh9IUKBkZNgeGUraBzK6gVlLA3ouXpCqqmoKZArBvRXE1BTYFEVlBNeTUFhlPy4s3p6QqqptA3b1Pgn7Ki30pT3o2IuDeixekKqqYw7I1ITSFvN2sKVlA1BULdiDTl1RSIQlM+mpUVlKsr6FJTXk2BGLaa8tHMrKBcW0E15dUUiOJWTcEKqqbAcMpqCks1BTUF4t6INOXVFAiitKagKa+mQNgbkaa8mgJR3GrKuxGpKRBrBdWUV1MgiK2mvJoCcR1vNOXVFNQUGFChKa+mQFhvmvJqCqR1I9KUj1ZTMKDZOnihn5oCce005dUUiEtTPnZNwY3ICnq1pmAFVVNgOCU1hUJNQU2BII6a8rFvRGoKedurKYSuKRRW0KyV1RQWagpqCsS9EakpqCkQxEFTXk2BuHZWUDUF4tKUV1PACoqaAg1sNeXVFIjrqCmvpkBce015NQXCetOUV1MgqRuRpryaAlEcNOXVFIhLTUFNgcA05WPfiNQU3IjUFNQUCKq0pnD6fzAwagqEuhE9qymoKRDEXlM+9I1ITcGN6NzcCqqmQAzvmvJqCiR1I1JTUFMgipKawkpTXk2BuCuopryaAkG83WrKG1A1BaygXKspGNBsHTTlE7gRGdBs7TXlE7gRGVA3Ik35kDUFA5q3d0352DeiPwPqiutGpCkfcQU1oHnb3WjKqyn0bb4u+VsWA5qroqQpr6YQ6Eb054prCc3Tm6a8ASWpG5Gawv/YO9cl1XEdCm+GOuOuhp5QtmPv93/SQ0MIufgi2QlJ7KU/UzUNAWaiSEv6JO+qiNuRRMhx6zQLUn7vDvpkcRFCUSMCKb9LB+2qRAihVRowhd1r0G5gGyEUEvQpQf9Agu7LQcUNIbRWUyDldw8q9HVceCgkKEj5Hdh5FkIlktxKTUCC7s9Os/8nXacFHlqbRTEFeMsGdm28SS48tPoaEUj5HYrQd5ILHVqVGZDyx8hxmxYeihoRSPm9NlruIXTgoXDRagyk/GFC6CDLRRCtWIKClN9pCB0QRXDRWkyBlN+pXZweqhVctCqzEVIemMJ+YIWuITrIc+GixVsMU4AE3S7JFW4PFchz67G/IOWPJkN/Gy7IcyuuEYGU38IXr5fL5fRr939+f/t5opcUlXDRKiyGKUCCru+bl9NcbZ5Pl+9AljuWooD/yjUNUn5L+/o5NX47Xf98+f8OKVqDgZTf0K7nJman648/iEKK1ihBTyDlPxM8T6Ih2SUQZCFFCzcHpnAFpvAR92zodgpEWgP6r2SzIOV3754PF/VHW4E8t2BzYQog5beB+IJ2DgRRSNFi7S9I+Q1KQ6JJsZCLatB/1dSIfoAprNv1PDWpFvBQASlapBmQ8jsXn5P0BnluXaZByn9WfIomz4h5Lly0EIuQ8sAUPs0l5LmoRZ5bvAQFKb9D8cmQogiiJZkCKb/n1orXDdFyqcQsSPkP2Y9oljS0XOqwFgv9PpPdnpul7SwgRYu3GKYACbov8QkpihoRSPltxaew6m4a9B/svzimAAn6aa7vpR9VmxtEIUWLxBQEMIUNxecwM1UiN4hiEK1ETAGk/HZc35AEut2kyc5zMYgGTAG2GNdnbhOTOj/PhYuWhSl8A1PYiOtr5W1uKt9FsYYemAIsv7Vibm6jVYvOGESrA1MAKb+QcTuf9uY1YrWoQculghoRJOgW4vNuyu+gN2mXbLnARQ+NKUCCbsP1BSLoMl1RrKEvokYECfrp1kpMgy7WFQX9VwCmAFL+s1yfTyi6zECKQoKClP8o1xfkFBKlqIAULcX+gpTfUnwKbY3RrY/Nc7qoyHZRSNFjYwog5T8kPntHkaPUNZLnquw5NNB/xzEDUn6r1soomR0zt+E8d4GVKJCiB8YUQMp/gusTJsTcCpMdQSP7FjCIBkwBXB+vFjRqdHrzXMUpQQXzXNB/h8QUQMqvz/UJRWAR3HmuYVaFkecCU4AxuT6/xBxXi+zsdbJl923OGEQrDFMY/h2et7j4jBRpR43O6UtVUof13NBaLvDQQ0hQYAqrik9HWAyNfw6D7RxSaH+7qNlSFEH0UJgCJOiaXF+M5ZsFyrf/zNLbTslS4CK0XIqRoF+QoCzjLYs3N5rN67nz5UTv4ErZinKmimK46K4xBZDy63F97oUmbiU6cSDdhvuolFE0SNESakTAFNbi+mLjnmOz3EIwZc4FUvT4NaIfkPLriM+7TzH8M9buNAk+/euFDaTo0TEFkPLU1gq35aFuS0VQT6pMqRZRpSjov33WiAQwhTVaK2wHDc6U+aVsdrUI9B8kaIXik++gbeqFCCiDwCDaUUyAlF+f60vQoJGarMlduXCGFD0qpgBSfmGuL6WK27uYVY+MU05Wy4vIygW9YMsFLrqvGhEk6JLiU5snY6A6Ho+GEbUOJnDiopGtKLldUQyi7cMsSHm2MdzTqvmYipbU8Dnj5FvKvBrDRZHnHrBGBFJ+Ma5vxsQ/xaEwNMeax8jxJFp0+59ZruUCF90NpjAi5YEpJHN9wpmDPr0vkOf2BR53I2VS/4mMxVAmuwX1EQNn2YcEBSm/RGtFeCViOM/tWySGVv8J57kye1QU9N/eMAWQ8gtwfa2S0Qqr04M1JXkdi8vQSyXt60KKAlOoieuLFmqfYXL+slf4FLGJtLEU9ea59OUokKKHwRRAymeKT63Ibc5J8NO02s+c0/U49NM/W210Zj0XUnRPmAJI+RzxqRULFBrc+a+oKGhXGJO6rqBtBn/IbblAigJTKIHr0+Rp7JdDCqPUTSplBfcSE5Z+muc+le773xJmRSFFd2fzMvzpDyRoMtfHmcZ243iCQdPb0Fsfcnb0r4jHc2MQbeeYAkj5ZK5PyBvP5oknZ9pFBRYUWVcwJgC64UcR6L/tMQWQ8ulcn75xbRrVWCFYeT3o4fiuYAz6DxK04qEyvoNOOyGG81ZXyiqsMaYNaFnVZua5cNEdYQporfDuXpngoSOXMXkBlBSL49UicssFUnRlsyDlFxoq467U9LiM5r/JdT535Fmh0XI5LKYAUp7P9eV76Lt6o5jveI+zTXLX3EE07P7bJ6bwBUyByfU9DkdRqotiwiR5qHtCOxo+x8+D8aFoHFaQn+eC/tumRgRSni0+B1WTR022VXlBlODi3Wvn53NbBhBsRVYQxRr6bTAFkPKsobIp2fdwnUQX1VTX6qKfq0wrNWOc2+bluZCiG2AKIOVZ4tMB3j4IHp0kRQVtgqwNBtqhvIwF47gUPTeQovvCFP6pHlOg7+uzyt+etAkuaimuZaIuPJSXkWAsc6dcQP9tiSnUKEHprRW/C8o2uFGBtp/E7Vqv8KnIFwoHc9PkGui/T2IK1ZPyC7hnH8TYUlRHJ2MMSVyOpWgwzyU5aLhYhDX0n8QU6iblyVxfPIHVDdtF38/LF3YwCcJd+OQt1g2+QRJ/MKToJtaGMYV/IT6Z68DmHsKoFtmup9odaa+m9eDXDk2iuqXUcxW91wspugtMoWJSniw+qeWfzqGIUlSJWTr6cPHXrS+7tiUjKLeRNfTPNktrlFImk6DHGvotMAW0VtiHFrmCGGUEu0tIp4HuOXSt9Zu05fRvbHiRmRyBT7n7FpDnfhxTqEmC0pfFtzyAT1CiXkcMODx5uhqehfqa4DoWM7le9oFooP/WxxSudWIKnKEy7sinjQe+Lni5U+fxEgQW6GsC6M/zsoZ9IBo9+4d/rYApVEnK887hZc9kP7NXf2FJxUqzw3os63zu1p+HPiL7PBznDrmA/lsbU6iQlOcOlfEJoW57nwoFSEObPDG3VAnaP2DMqyRk04ZcIEU3xBTqI+Wv7GOyEyY+pe9gUEkFDyxbAQ/ip/41Qd0eaERmngspuhqm8FMbpsBfmZA4q/Kq0ipXG5IyQtrPZ0um/ux54UkRSHFDLz3PhRRdC1OojJSni8/Wql8zVrB7HZNY2fZatD/Snng1xdib24fP0bVHRaDMfQsNpOjWmELxEvSSchRSF/RMcp77SjlbdjxW5Fao8aWxA8+TmfsWIlEUUnSFGtGIlC8dUyAPlU08qMsUk/JckadoNY1lUm3AkxXxwZC9hR703/KYQkWkPFl8OtojXSjUCS5qsypOhnQ+hA2/RhriGTAEFz1jEO2zmEI1pHzmUJkSrIJNQN2xnNwQKlWE3WO95+XvW4g93ZDnLoop1ELKk7k+b4x5sXkJG/zG6o7loDr+7LCkBPZVnoovP8rOc+Giy9WIKlno931eop3ibW3yxsByjkqaPx7oqzuDOpXVcWG0XCBFF8QU/gfxmTaAwouEOi3BdT9CLEfY9nvpzbobUTCItliNqAZSnj5UFr/JpUmVooJPv7/j7mN+Uyk7nQfva8TES/bLFEJZwGNoXGdqUbRcVsAUipSg12zxuYwU1eyP6pXr4GnwPGLwiVC8z+em14VV/DvYLv7JWF9UgP5bvUYkSscUyOKTcch1mhQ1zA0NPRg08T6H23DOF20j3+H+sf0H5vZFsYY+H1Mom5RnDJXxNn0lSNGW9UDoh7YdkdrmDMPp8He458xmuWlR0H+5NaKyMQXGObwtM2E1XPrPsFLqcMF14jYy1UFnl79feJotx/qiAlJ0TUzhu2BM4co5h5d/TDaL/hu5VPuCco1MA4MmbsPq94Tq1verOtLe5aQoWi55mEJREpQ5VNayHZRD/73vcfGaBHtUeNzurQRBqA7chhFBHQsX3t/B+BbbWwEpug2mUC4pz575TDnhs4tjsYLPINwNY+ajBONIYYnEz7uCY7hf2OlAqvUXgzOrRaD/IEGTxWeWh7oW2wZu7tmCTT3Pcw29s9nnzcQC1+ubaKMeo6nvvbjtc/mCZIVeSNEPYApFSlBia+W3mygHN2rSAZ9ds9D/3kF2a9wOPlokr1md0lcyrOlb70evnURUSUvTMYj2MUyhRFKe2FoZjZS95GTKAZ8ytGNz4AHuFzzaKd2f+nULdAqiJ4Oi5WTPGt7RuKpZc1oU9B+/RlQiKX9hFy6GnmRSXLTzq7kUHdzSgaOMnpvoh2gd/UEhFXFpkvLtbZH0UwvfAzGg/zbAFIqQoMShMtfdTNsHH8oep3FvkBQG60jT0g2r5UPyriD7RD61MH9aFINovBpRaaQ8VXyakJxMO8h+LkUH93LU68f6jvUFBIEfjM2aDyNj7LuqxVou2P0XxxSKIuWpXJ+OrR2wGVJU6OHcCV1Q2sSWrIzzgxR0WNET7Mx6Lug/r4mySflLk5zdzgRhUp7r4VapQzIiKcM1gSRyFPIMbYyO8NrccVFIUTKmUBApT+X6DG3tQI4UTRySeXsoI4CrWPnrFT4lNQWIP8Xy57kxiEarEZWDKXxnZ7ezkGMzpGjaAj/LD6E6lkQaQU6yx/Iy8F+qbfINUpSCKRRDyhPdkxrNnp0HkYQWjeOL4Hi54mbFnUO99tZL815/+/tL+4FuctlLhlePkiQoBtGWqxEVgilQuT5GTJQZLZehFLW3W1q6Slm+oudPHWcXxCQEce/zTIlmIYMUjWMKJZDyVPHJO59McokBd9eCFYQtvZZ18x0A7FhTkrFDcPbz80/7hRRlSNACMAXyUJllOpllMnfuapHhPxNoea704sNTH9K3dAed/gDVNssa6L8gpnB8CUre16eTpWRintuBC/QI7Mgd/XmuCfn/2I3Sg/js55tmccMgWkCCfh1dgv7Q9ZBKdtDUPPcZyai6d7Zg81Hw8TwcohuRlEhzUBmS7rJt1jBIUR+mcHRS/puz0YTtoJq5L9cXjmgB2LVg8+GzDiekrP0czqDecoJ40y/5tKJZybCGnoApHE6CfvFWJnAdVHHwozB5EA/A0rND4TdSzvyQuFDwHZKpX/3t1K01Rhmjmw8ZBtGcNaKfI5PyF+5TOqOZmZznWloANv5sdDrPzVnJSz+zZRw+3y+XRnzIRZHn/mdLIuWv/BuHEwIfaqs1ajxFzUeLLCUAy/CJRqO9RcxzJ6K7AR0p/bislX+iL1ouqTUicVhMgSU++SHwuctLMVVfhInzfXr82M7fmCm0udtrQIZeGrZ+hN4TPs3CM9rY/ZeMKRyVlP86pd4BtFKPW/ilHPZg4zwP6UDASffRslVwNOgGFyGp9mNStOIgWgwpfxHLKJ1QbcV1MxM3bAagm/mnS0v8YkMtmHrOgz/+q8iZhJCim2AKhyTlr+fllI7PE3zewhoMGY+1dJvkJ59O2k8904Lp5zxEFp6ENqZsIUXrarnYEkj579OiSoeW3c5uU1YF9f6B6j1rMry41PS4PqwlsVSwiP74/khflTKMDim6IqZwOFL+tLjSCRRMQ7cpvQc5fundGdqnu0rFXwvf8iOojf14xhrez0nRGvPcv8cn5X9WmXMKtBwDgyoiVG8aSLZpWJqnigxYV+YNj7l+PDF8rofiQop6a0QjUn7/mML3eSWlMwwl/2fvWhsjN2FgcunF22wuTsCGtP3//7PxG8xDEjZgr+Fbc5tdb8MgjTQaBN6f3Q1lNbtln0DXgjQD19A6uly52EFp0sxffpnvxla+eF2oaKQlzq2Uvz3vvQPWF6JQGqXCkxQq2a1L6V6FKhAbCp6UButa5tDdxNIsPtmE3lGyGHq5QbTm1Er5e+Q0qi8OEbDCXJf3qi7tznCsvihM94CoJNt1fkxsG2Rn6QB6sTz3zDKF90hduNHAVvRjGjQdH7dTN/AiFiPMhur3W2TN1XidWY0lffE65bqQDf2JlfL7ks+9hl1sAiCFXoIhboIy4XNXs2DedpHvRqVVNZake2B12nWZQTR+VqX8/uRzj1kXlYz9xGGm37WJY7NExwVlFmy4ytMv3vUmr5qGQoaw4GTrKuq/s8oU7ok0ZuFzKkAfD4zCyArNGPZmg03eOM8BUYFRnAXeMyHr9OsaVNTY589PJ6Cg7y+pdgF5FLsNkyrZ3qQJM9h0iIZZi4riChXFO983dZZ1gUG07zMq5d+e0+0BtlsApRSDOXLKxnG1p632LNCPMVNR7BOLOtt6eBv6f0+olH9OugNo8bMLJeMtZmtfENLIKKom6/ZQ6Pua1gvtUVFcUCjzkjNUUsymZoWKxpIpHJ2CpiKfIVXcHhbLLzC1LEq6ORB1967XQ6Enk5Lpzg9o5cEyLQoC2mZCylJS0semooBM4cLkk1R4nQPaCgGK+DbYJdp1p3ALiAlG4WHThgRxjszMl/ApskBc7QAAIABJREFU8rHSR6ai51LKvz1nJzoeIby9NCNDImgLSvgFoqu69srkYU/gudVYuEVHPGWi+7Dqv3Mp5e91poUU0Pk1uIThlBaK4liDTRFMgiXihFqqSQJsqpZBtJ1kCrfDyhT+VHW+hRDQVcAUC1p5MG/sVvKp2qRDQKKLrGqqGW64YEegBENsoaK7yxQOq5R/e6nzLl+06iDlzYOHZFOQwufq6pP5P4kGmzyopcvAEwoInxmo6COq/9qTKOVvz3X25RzF7iAFlUcHVMFF1DkprcyiSz+7OdV88JNgPCSCthATl5iDKzEVfTwb+u+TKOXv9SGWFRRdFQhjFzZUi7DbuQGKLpQRm4ZcR56i+Gi626zPDEbRMvCq5Lk7yhR+HU+m8P5SH2XZcYNsxAwqBoGozFQc2OmkkjBJdqA8xtLRnbLqVghdgUEbEC8tl51lCrcLt1ZwLRdL6xOEivP1oNfmstN5EEBxxqBjdNRfyyQ2o8gupX8k77/m8Er527HgqUe3PrCQ7h/knkiGUfuwJgCgLQVTExIRV9wT0uw26V/ocdR/h1fK36v6eGtM9HqrrZYopm9ckUxUOH38EN84+VBAwmqM4lYcr+o9PCiIFyq6n0zhtZBP8LCmDrtweyQDJ6nXgt8N2PDUdRhwW1vwPRPJ510ew/uPH1op//ZcH35RLzVTwpkKAsQk9QpG2CGbRZTUXb0rRG+50Pjx16IuethwWVShovvIFEprBVzk27Wl2bXjEjdJrb9LSzKUVjqEfaJqC5GswRwS82AM6VbVHEzlAaioX6aQlYL+qepHBKhvp1IGultUjcbRVe14pvlhAntIjO8qDo7PR6CiJgU9iEzh7aU+xyJaivn8UEhCH4FBtLOrykwz7vHJUIfEoHbC0++Fueq22IWKkmtEx1DK357r0yxSkcg73iEDii6ou32d6ezyDxO1JF30gOyCLlZInFnm2KNXCU5MRS01oiMo5e/1iVZFmIFulUbNOKZSBWbLEmyaQF3V7mnmxyDn2AKNZ7sVUsJJtBMPojVHVMq/V/W5FjaQSGv9dpHvBRZdAFWgwMdzUksXeTy5nQQT1nVPa0PvV8r/LuQzWKDr09GuXj2bolBS3Nb/8dirPWV4wQtnciQ8r0o5iXbOQTRzlCW3Uv5M5JMkels2oyXgTbEVHcAUsA858vo+NnRXVQUJzdSsQhxPkJNgQip6ypYLIFNIT0HvVX3W5aVvivGI9JiiIOns1K6UfGqjVsZ9bPiu6gKSvU3N5vjsCbIJJ9FO2HIx5FeaUj65TOH9pT7zwlzbCzrwIbJMi51CF4JHnhVgsNkGFKRXjU3bZ83f2qstZgmrRacbRDMSjJxK+bfn+uzLkcg1uILvsFNBF7DWiohNkyYVuc+joKod+prOGhBYeUo5LHoyG3pTppBPKX9+eDoQKPAO0BKBYmdpdsOkiSSCeo651fQLXZatBcolfNLaT4WKemUK2ZTyJyaf/jx3iWwt2oEPzJUd5p47TJqgGqHzy4UeB5fn5sgico6Wy4moqFEjymXo9/ZSP85S9+RSHMLKGQYIeu5y8L1V6KSJoHSMnCWoH1SO8zIt8Usnnuc+DRX1yxR+F/K5TVvGuryPGEkmAFSCGD7X6CGJHloCeZUe8K1SVYrugWcrFhSl/CPp+qJKjbRU1ZErg2819i1ECAWF81ygg6OXZOlOMEX9R5AppKGg79Xj47Mh39FtTmxytFU1ddJENdjkwDw33MFRqskk7T/PeWh+n4SCVskp6EORT+dW+KSvPhQtWSRvKJGYUayShLFf+9PB1rsEPQfp9VuzFZXl3Dym+k94KWgCpfztub7C4p8hqy/49E7yk2s0fscPKgJMz8RqsNl3hozDAG+aNEV7egCtmubn66ZKqo5uQ99klinc62usz8C10h5Q3MkErmfiNNjsaan+U4pp0vC+hCy70Zqq6aQLx85zTQqaUqbw/nIRfNYsFKF69Sak5OJnv9zjodBjRrExIjY2+xiOzbK5KaFKBtEDD6IBMoVbaa1kTXHXzCxQye7OcyGDzWWeW0jCPSwqQnH2KY31nXkqVnpY7z+jRpRQKX8heG4KocoVgKSSi4B7Jj5/apfpAaWxKZFlLe7ky6kEgEdV/+WjoPfqUvikCGrstgXUkos+atK4DTYBE/tVolmFZNn+UpVX25hs0OWYVNT48omU8tchn3amEwhQAjqMGUsDhuPORxhsqsd4WGPTdzxxoNycjooeT/337aegf5fWSjRxWVj7HptfLpt6uNuzMS4XxvlTm2gnJQISFlJBowH2MbqrUFGjRpREKX+vr7pC8lxdJIur0CxiPK6Nc7O1gB+rb1oegvINGHw8DWFcoL/QxaioX6YQh4L+qeoLr5ZvwicKU8wuxus2uRSBBps8oEa0zrLN42kMn5i3vCYVNVKH6Er5t5f64osmypX0TJk7bzBcIYZU72mpefp0TAw5trSZufSgw2YVyS6OOJL6z5QpxFXKX5V8hlLRGVGt5IO5NGha5BXjMRHcm22IWfZUguI6LVZ2/1B7wp9X6aT0h1H/GRS0iitTuBdwUlLLxdeWr3/o3NaQGE+tt5BCeRuSZVvqUpXobAjZeNSE2wAn+wPlhCj3UtC9lfLvVYEmJc+dsLaOl0PBxNq8ZAivzaXeEqiWgFuns2kSg2o9TVgQvwoVTSlTeCvZLSnP9flV9v9myXMFLkJPyCekuEapyptlt+5y0qrWw44K0GPY0BshLZpSvpBPWp479zF9pgWrf4Mc3E0JXoCJfd3dHOi1BgVMk3TZwYYgnqDlkpuKppMplOyWludOgHCDeNjnwlLvbfHidCRCZ946z4Ix4ZrnRpgmBdJg1ib/A+XOcy0yhThK+VIcgsuFth3sDYX9q9rh4gfFmgwrJJAYLqlnpdrjWOe55/DJkbIDwq2NVe4zND1ERSIK+qcgkZLnCmwoHPd5q4QWgowAaaAyB671WzNpybKRpkmLAp4fkn86agX5ZQpRKOhbwaHvjOb26ILq36/lNZSiKG6ee647CXsMV3/OCKZJjDT8vYTP8bIozpO5XGdU/xnPcotCQV8KCtFnNFAcApQHJGkQQ/RMoCvS+nnuKctuaFkrx+s2rPfaYIZcJO8ebCt5zUVFEynl3wsEwR0gV6YFBMWuWnIJ9bh0jWJKsODMNtzP3SB1G+5Lj4G8d36WzTrePFTUL1PYjYKWBstOtSN4XDN0FMweIXFtGz2QUewWGE634cOxNzgKQNJ8eCpqPPSfKEr5gjcq6QmzuA6koC6OydA3jCoooT06RrcBXQvnDI4tLdqSynmJgqgpU4ihlC8lIuoKmeoe9yknx8/hpiNpzHO7R2J8SShJucf8J4QOK/cxIcGIt9NIaWoqasgUqigyhUJBqclUiOvC5ELLSSFX0cp0UGhMg82Wdlco6dmFBwC48OkMjnY470lFE6j//vVS0L+KSCEXAf0MWww9vWW3qv4BbdUXqxSDTerNgW14jm3CEH+r6jo4SmjWZ4/qwPdjyBReC0ATAdQ75mJJSH0Bi84oOU134GiSKCeCUh8WhCQbeO7NVDRhnms8ahSl/GvhoNQt8Bm+eFVjDbisUUYGk2FGO17mmNdNoivjoT8Pz9nPfyq3quKybBXwDSXablKWfCeVKUShoL8KQNOQUFW44Mlzhd+qmoXa2DNsOqqhSX2x3UUen2VjJfhM7NhyiUhFEynlf5c2y6a2eGC1yJHnIrw2eZB/n8ooJcPmo5JBwY3QV1WLwhyt7QhruaRQ/xkc/R5FpvBxK0q/gA2wBaK8cQUynNfmRP4oEVRz9PJHPU+DdYsuSdfTA1+Rn4CKGiRdU8rvJlP4eC19lo0bILBaZOxR5rnHzJqBhhtseh5feOfiVrWjQFszRBzfTkVjq/+MB4yjlP/46+2fgrfUee6nfje3u7fi3b5tkMHmYLorWeAQixbcwnUP4EHE9lT/fSeQKUTylP/4eP0qaNu6AQKWrM0r7QmRGT/PPYVPxWCTV448F2WapITj8ACKOIs2OzREpaKJZApda/W5IHT7BggULjTjmExFxTzDAnqqO3GjUurKsUHkLHVWQolIArqCKDPgEamoUWuOo5Tv3vT7qyA0HxUNpXQCBybh8FDocav/lGCaNGXC6CKRi1J6Pmsfj6No6j9TphDFU75H/X9fX4WHZqGievEm8H5uAQLJCoMOMxUnDq/Bcicqn3SaD04JhtgI1EjqvzQyhQGgH/98FYjmablojQtSOBaIMCT8CO4+e8yxm4raOGH4rFw9hhreP6wKO+kyH5yeZaMfWZRBNJOCPkXxlB8A+pPkfpU8N0+eq0QX0vu0YBhioMGmOQom6CEcYuKa+InZsl7L/0CpPctWcVEEKmrKFOIY+o3v+t3F0BJEM+W5s4snsQjsr1dJDHxWop2wy0VbZM13/Trh9Epp16F8q7hod/WfcbRF8pSfYf/fV4FotpbLNP5JreH2u350kl/tftif2lK+oc0BYE4ozZGJufN07RzpgCt3Vi7sbUPfpqGgC0DHIFogmqXlMgYT7Dy3WBgdGzub2jz3lDfjkm8RVqViCCbuCZ9rAM9P3/3ILoTcRkV3zXMBmcJTBID+8N6S5+ajomNGikmW7V6b3Ty3mGzsaWGdBTmiNODXV8Ons5TG9ZuHexEFbIC0mYl871wjiqOUf3p61T625LkZqei4nQWWfRoxe7V9CQfGLCDaJDxYf33leby1YSV5bVr/ObFV/7eb959RtYqjlF8DtEB04xI7UFE/sHxW1dr2JQ2akHNcOyNUv74WPgm9JqCavZmK7hNEjZrVLYpMwQToREUL1rLkucP280RiwGtTQUXYoAny+eeTYLL0ble/rt78gEgs9MgoUdN2Wamon4LeIgK0UNGtee62rmi//VwVJ9cktSXCBBdkKcID5btOEKu6+0kbevVMEyOQWkM5qKhRI4qjlF8ViUqee4SWy7DTbZEMZ1U95ouBskEMohr7C+3JJ5qXM8JvbR0W3UxFDZlCHKV8d7O2/YAoEM3YcnH4cwrsDaMDxCl3PODHuZXHMEFkSvIqQjohKadcZipq1Ig0pfzrjgDVUmcjzy1UNCMVXc1zU64D7H4fL0sShCTAH8UNSR4PDePwKZdV/eeXKdz2BOgvZ6enBNF8LZchTi2biAliSJLoJ1ANNtncRXV8joBIsM4P5Wc4QOFBuv3+QmT1n0FBnyJRUFeOW6jo/+xd12LjOAxUqpzsXrJhTXb//z/PViUlFgBUsw0+J7Jka4gZYADuXXLp5nP6k+QRsLdAph08wdBGyjiQ0xdd8kk/zQ3Ac+WSv9B3oU1hHad8OoSepahmnlsidOQCUpTKGAWIaceqqoF2bidkGUD0RwNUYKWCXPYX+i6SoK9rSdBzCH1JbRUsRfeUohOIogKSAuRaEoJy0s6dP8w7FAwRFHdIMNWd+T/7acsMXCBBdCunfIfQ59S9MM/dseQySVYKPEBTYTxzgmHTzi2mewUsQ92TYYlkC575P/kVynr5XwgqRTdzykNiKEN035KL65uh9ZqozIDNqCewKddo33igkJM+6fNTxr0ptMfYHs5Cbj+G3iRtCi/V8gh9TG8YzHN35LmOC47aaxJCSQ/85AYyffkRqrqvrdbwCWQmGiSn20IboM1CtgV0yWUWvH+vZVOABlF2/+1ZchlincH/SwQl4Kqq9/Jjjjsck7K5j+i2ilDWONzP3War3MAvFzz5Nw/ReXZqLae85/l7Zp57eCkKDWDD6S3tJPl6+vojqqqu9wDF1g3s6dPHRYkAzNv/MGmHRJEURSrQz8+1nPIT33wSouz+27PkMkyHF/DwqaVwAW7ELCrCto1xvAr5JJY4jza55xpZdne37RGrYmkHPVyKzj9oNac8TopyyWVXKWqgOScTQt/5tW47w5wBm+Ab0gSACsjTB6fex1n2mRBYHQ3lG0nRQKz+b3UJCs3nshTdU4qC5gz1R0KInFHH4k/2xPgkNIDlGxgtmPZz1/npKeW/UKzk8jfwb+s55VmKblxyKZSiKvdCi8SsTZ8EotrRNDZJFGqqnt4U+LTFaT+3xH3uolI0hM8VnfKhIJqRopohuh/P7WJElOdmZm26EYZieoAq6WErqK10fQfe0xtUIJcwgC4gRd2rAxK4nxOn/Ee1+mIpemCe28WIcLOXzaJoiDCogQsCd/smFDL9YS7CIE9b/ANOJi8rRb0w+h0eWbamUz7CczNVUQ6iO5ZcOhjaWLt0+vLDZBJyn0mOpkfPMOy2FuV4bTFfhYbeQnnJxb/z73b9+Y5VW3+/bidBWYpuIkXLgmhL4yZXSZ1jFvpD8qiDzMAVm2DD0wBEHsOrNzycO+aqikjQt20AepaiEPcfQ3RPKepepeOu8BO34aeYaQRNz5RYJwpRUAGaP2K4+PBfJYUXlePE+WkbmwK7/65KirZ0q83BCGljtZUE5oBtKQNf1FaOBxVmfD/xDchTiEQdDKLHC3SL9iNFjUrK2rWd8sxz91mFJRcxrygY5NsO2CRkYIZC88khCGba1+aVEMw3oLE0xG71Q/7ezKaAdf8xRHfluVOlJfB8MROFROSUCREaiQL234/3jdhR8CM95Va/4xZO+bJGtB+G6E48V5HiJ9QtLxMDNtWswwTSvja5b7Dxobtd3Zj/xwlNyQ/bLILuJEFZil5BycWVdKh4bPObhEi7E6THc6XC7TkG8/xd+Bz/1uEOURoi+9PSTL3uT7iVU56l6FWWXEZJh4G6N6naiuR1Y5Br0kfa9v1s+YCMD+Hun/pIFLkZD2q8cnlGN7l+7ShBuRHtiqQo3cleJ072TN3d7M3XFN+BApn/TYI7mBCxcHEr9Yq/nzfQ720fgLL779BStAUKHB3z9zV6sifqAAbUgYfAfm4bv/Jo7JnuIma258j1eK5rU3iudlvs/jtwyaUFChAfzpACeSnGC2nrycmeGo44V+GhqICB8Px0b4Dj6bP+7c+3vHL/X0yCVvszXJai60vRQp7bvsqQlEvwBMMzzOYnewKdDJYGUAXg+TZHMMYPHy9g6vCXKdZJ63oS9LQnQIGNaAw2Is8tlaKXWJbFeVRbNpXN89J44m0pAJX5fHamtW5aaWq/wPMD6mxeelGbwuNBAii45MIQ3ankImwWVokTDHNzAAHB0NIIbiRgW+A24czPbdtkJIA+LGhTGKPW86nafb3xjOsDl1wakMX1bMbr42V8JEVOIufI1627t3cSe1G9C58SxB38r1FuaQB8eN0/hctS9GpKLs17HbuIye4DY8aHeG4gjBbPe877vaHj+dJoFMv2+bJduc/FZ7jPxyG4PIb+Ckou/okqodpn6hOGRArRlgTJR898QbNsMH63spjvcEme+/S6Tx8Lu/+ut+TSvK2zi1jgWy8VHqA1BlYm8lezJCuiqioE7jtczv33awigL6fqQIt57pFLLhcW5yMAM6q6CTAIijtrNEkFMBnxBQXIJ2qfQkbfpUouTy/HxCe7/44uRZV3VoJFBaXmz8F34BDGWqmMyM1kZt00FWocikRrBbFIEH08mv5k99+VlFwuTLJuJ8kP3VnwJLEFM+3AgE0b3WHyhU1BO5z7j8LnxJdwFj309ZW36oiLx9AfueQyCypYJzskjJvQDIUGtIEApkCRbYj2xCwVlIgs0M/91IfPU3XQxVL0wDx3EiIIRwdmRyPE6qqXUDndYWQNfKjeGwR+/EThJEFEylVo/X1weLIUPXTJRSDK9xFwp8N4qq46HVvUgcgi6qTQXJmTklXGuJz+M3HYxkL4fHk7NDxZih5ZihYAVOXDeK6uasfbF9LiSLaAb1DCuVURkLKRGfzlDaL14+vrW3UN68SNaIeUogURVObDeL6u2nWpKkVI+xhoTdhE9jK3jjJ/ggXqoE/VFS2WokeUohMNioCHb7UJ7RGwuqrfzm0om0v66cdAGB5rFn6CJcx+v6rrWhkpymPot5eis0HP4KvY3B4hoLYkN1RpIj1PPL1JWztkuHVuAaffw6m6tgWSooxQKs/FQzTA4mCCNvj+ev8qa3hMHKkm0X4f57lj+Iw+2PglDEF0AQ/Rw3t1jYsb0Q7Ec8MsDpIXdablGacXbGSJ2AGbPZxRAM2PW3COpJAgNqDb8S6E7NDDk/MVPvyurnaxFD0Iz+1fXm2c01RAVxlCjhu0u5OaLkOjrcJnrwSa4s6j3Oy+JdQetYDgrE/V++9f5/Xf+6m66gU6EY3H0K9dcpHzfq6Rt6bY8vgy+4AIzH7G2JIsMoQGo5z/9Baxb5XP3HyobmZxI9ruJRcRdNSNGIszQhMfPz2NaShbkkSRAP+jxhlJzk2FTnRaFaLvt4NQlqI7S1EZc+GITNTJ5Fz8l5yY8TGYeDfa75Urih3CDs6dlR7/cEMhtOIT0faUoklH3chgjSDkXCR1Aq6F7zAirHGDQhI1JrsseVvfFEDZ/bfqSoUNk3lzo9xwjFsmn3uimg7yO4yMZrMCw/AJXezkdapuDKIsRXfguZA5ssEjkYTFBWhUSnZaV43fnxM+ZZal1vjScIEU/a+6tcUll615boeybK7Xzkv3NTwL1b/kYBE6DtgUZzVpVHyHMZli0CR7RHI/UqXoQ3V7i8fQb1pyAbdbusWUy6qRpVaDSaDOG8di3dxjjip+Zfe8YvuHtIhzFL4utPCtYinKi1ZyaUEHNQ8EuR7YrCTAeA5XfELd3NGulChf1jSA0qRo/fVeVY9vNxdEuRFtTYja4YBaqRARMAJRROdpfgC2Gz4DwJ92czu3k0vNjokqch+eJED0DNDTx9sN8lyWouvmi5zjjnB23WnOBcMYBSjqhudTz7u5nePUQBRgCIH0ZnZ8tugM0MebBGj2RDTmudsUSDOvaU0dQhv7WJGp+LRSVLnuXrT9nj60CVsV/fl6P33cJkBZim4USymvqZM3JXeahoMeoOIzC2Pwed2SviuF22WyAfTr/fFmAcruvy2WLIskquDljp7iAG6dQRuDLEU6p9vZ0wH06/3jhgHKUnT9RSZ7Ch2Aba7oI6FD+VymiSLZhhJ3/aVRAfTr8bYBmmtEY55buujT/ywuSeSWKbQK8FzUgE2QxTBTzaTxXI3C58PHjQOU3X+HpLgOYwW+5gM0VDfkUlq3mDIM2AQXVTXlASy5RESguJcX8+X2Aco8d92qKD2ECkSJIzgL1wCMTtmED3UqKI3nwufiNoHj4eMeAMpj6De0FlGqJtmwZyN4mLpzLOHTEWmq0FgzZBVYY8JnF0DvAKBcclm1EioLAZrrBUvMwvVrJqSiqiWIYFrUFgYVPtsM0X0AlN1/qy5azUGC4nBuFq57QgpNDGLs9yUcAuwj6uD59ffjjgDKUvRwPFdDuKIMnTMYydygTBMWtcF4OeSmhU1KozEQB5vle3jq4dW8E4ACG9EYojRHUXm6JACTsVFbQN59QcMnwH4fflCpwSUXcEdoB8+fvx/3B1AeQ7+qFCWM6mnP4u4Hcs17wWpggO6QAj/FbLY7pP7V5aZBb0T2FgWV3d4ZQNn9dxApOu/ybv25XhwWmFHypobH8XCyJnr3NgljC+AQFgnPf/5beU8AZSm6qhSVmHyoCQXVASbCIi+qoWB2Bmx6B+9mT0IKR8nY1G10cqiH58/3xz0DFDaGniG6Hs9tg52KKM4LaIxRGh+WNYwOh0KeiN4TpCkteRwEODkUEJ/3CVB2/+3Kc7uGMLl0K9hYtknyXBkZdB928jrWhOSdxMfnQ5NDEXZ7nwBlKbofz82NAJxAFJUbBsRxFTdXzHcON/hl9h1ngKgsYLf/gq/jHQKUpeg+PFfWWR7szUShHr4b4bn9pSPeJ+PevZCIwfQemrVp/PzCKZQSxec9AzRXcuGZKCXLJI6AyIpEp1sT5Q2SmbpsD6G4NXHMG2vA40CsumXi864BylJ0a55rwEmfESgFzofpB3XhM/35QT88uLpKQWia3d41QJnnrspzg6ewQA1HvXgTZHxOj0HSwO1hVrNEuBjNGvC8Z4DyGPqt8rktbcVYdi0ueo1nv3TeJO1uB9KCo/cU6fTjmsrFZ7dOdwxQbkRbc+nWydc7AXAzQtQnHNM9qGpHLTY8uRngqz5xH79EmgqBz7j4bNdzdd+LG9E2Wlg7PTiDOlj3rEiUbCx6c8D+13ziQjG7vazH6t4XS9FNMru0mUV5ZtrjUImU6RY3m2VsEifd8YLwvHOG27v/eAz96nldQQZokuf2RZlwoHWMsshuOINM4aLGxv98wdgtB1CWoptldYvm38UPD64zEO5jIXoEfm/+QwfdxcRnq0A5gLL7b5OEET2AxnluHyCTToIu54OfnATwPZWETwC7ZXyyFD1ojmj+wgeCZBc+cxDqHEyEwUng6gzcRYSCJwtQTCMa89yyECooSRqPJYtQ+IQMFWwuRzmsAWavgB/OixGf5/XC+GT333ZpIomUf2nvA2aGQoc0ymENJs9zDTZ8QuH5xohknrtpEJUITERA3h/8ALXu+V0ylMMaVFrm4sMnjN0+MzxJ7j+GaMkCACQ7YEsrWmq4kbWUAaFJnmvWgefHI7NbLrnswXPNYtlQfGZWqk/S+djCxJJR6HF9LD43kKL/WIquxXORPZWSFAwVnecSx/UhxSezW5aiu3oWyuUcFaCdwDV4iM4nheLPcgCKz1fG31KNaAxR2goDxKAbnjXlUBhLK7l05HvYXaRaBZ4sPlmKHrPkMnjyLi1qtl4RoYIoRXvXr7JWceXzCqQoB9ESniuDb3+fRAKzXdLJas1mgP9PjX/MXnxyaYWl6DWXXPrkkCNPoQqvJh1PevnAGitFDRGeLD5XdP9BGtEYojSeaxvbwUhoJzUYqCZVJJ5r8DzXEOH5zeKT3X+3mN1dl+c2WR8UuC0Fniw+V+e5LEV3yhsheK4h8VyFAjdlogmLT5aiN+JfEGV90JomRTUY3CiPE4vPraUoj6FfeeVHgkWA2VRuGOdcAAAHoElEQVRl6Dz3InQh4MZ4nFh8shS9Of1Js897VRkazwVJUZTHicUn89z/27uj3rR5KA7jUrWC3ptKCyQd5ft/z7UUeAsjwXHs4ODfs5tpmrRd9Oj8Hx/75PloYh6gXU9l4nLuofoGRy4R6ZZ8Fnf7T4lOctDN6A52eaz0HYWjRi7fKrpJmm7Jp9t/zz5luXNY1DOV6aJKtF9Fm4htty35LFRFNdEpg5ZuxKKF/qlMXM493EJ4b0YeUZFPKqqJ3hp09P3NQxXH5dyvVnl9+2/EslsbTRaior6INoUu7K5d/w7NJn7kcijHdtNMSrfkk4pWfFjUhk5l1pE599CAf3zBkHy6/YdLhrpfe7eD/n+eGzdyifovk08qWtNh0WboNmy7XQdOZaJy7vivZJNPt/8cFh0D6Pde3INnDpffYXYZtWMzc3mST7f/nvWwaPtjIVB7VzO7+402RYGSTypa52FR809PvKjIr/q7M5XZxlwt6mLK07cc3P6rsIk2l+3zKtN+5dx1wFRmXM5txmwWJJ9GLiYux/bZ3t4DOLzWL2RyE735c6x8SrdFqqg19NMnLp/N8r13k+7Q3duwG0pR94bO6ZZ8GrlUPHF57zbd+7p/hfxnibabgAOfgCv0o1YmkM/nu/2nROPD7vBRUN9UJvyGUt50qzypaLUFeqisWwdB/1ykHcy5GW/Fk89FTEU10dRj0Yts+s9h0a2G2Hu3ISrdkk8qirBjnq/+1wW8su652zAm3ZLPBTdRa+gf1UQPh0VNwJKSdjNnulWeS1RRFTp5LNqz2Ot4VDv8jPP6vkPGN5/SbYE51+2/7GPR/negp6nM8Oimu1qLm0c+PSqjovWNRTdJ3nK275vNxVebyGddKhrwEG2nRNMfFm3z/bvks6aRCxWd0EQHDovWZZTnG/mUcx0W3TwmarfbDG3URpMnxEO0mQ+LmvaYf5vuoeUp3T7TyMXtv1SHRd2PP2wSdlHyWa+KaqLJDovO7TPm4Rj5pKJUNGsT7dbXPTVNziWftauoNfQJmmizvTV9mZ5zyScVpaKTJi7N92WgnvsL03Iu+awm57r9l2/ksm2H1sx363nKk3xSUfRn3URrTMhnvTk36CGaUotso8kWgV22z8DylG5rGLm4/TeBLtkusAj59C0HKop7PTRgxXwe+bTRpBoVdfsv+e2/iJxLPo1cjFyyNNFNgk+unOTTaIWKWkOf+fbfre9uk08YuTzw4sKUfQvn8rROs3I8RHtMEyWfoKLlNtGGfCLVVFQTTX5YNOSg5BNU9LE5tyOfSKqi1tDH59zNmKsK5BMTVFSFJmiiA49ayCcGcq7bfzMcFg20T/IJKvrgJtr/ISXyifs51xr6rNdzN1vyiawjFyqahVP79OYTVLTY8iSfmD5yUaKZyrMln0g4cnH7Lw3kE1SUfMLIBeQTpaioNfTkE1SUfPqWA6JVVM4ln6Ci5FO6RV8TtYaefIKKkk/yidic6/bfw9Kt8gQVJZ9YvIrKuenKc0c+MffIxe0/8gk5l3wCfVhDTz5h5EI+lScyqagm2l+f5BNUlHyCigY8RFOiMeX5Rj4xk4qq0PHyaaMJEuVct//IJ6go+QQic27IGvqKS5R8ovCRS80qurNOE1SUfAJUlHxiuTn3JURFlSf5BBUln4Ccm0w+pVvMgzX0UY/K/OCgDBWt4iHaSPn0qAwlqeiz51zyCSpavnwaraDcJlrtGnryCSpafnnaaILic251t//IJ6go+QSSqWg9OZd8YoklWsntP/IJOZd8Aul5+jX05BPLzrlPPXIhn3h2Fd0vV0XJJ6houZBPVKKiS1xDf2qf3nyCipJP4LEquqQmeirPlnyCipJPYJYmGvQQbfdc6ZZ84mly7gJu/5FPPHfOXbSKkk9Q0XJLlHyiChVd5hp68gkqWqyKjpVP7RNy7uzplnyiEhb1EO23Dwmiupy7mNt/5BNUtNg19OQTVLRcFT2lW/IJKlrcF9HIJ6hosSpKPoFib/+RT6BcFSWfwCnnFreGnnwCP0u0qNt/5BMoVkVHfsWefKIOCrn9N04+PSpDPTm3gJEL+QRiVTT7GnryCQyr6ANHLuQTmKqi+dbQ22gCFKui5BNIo6IZHqKRT6BYFSWfwMgmOuMaevIJ5FHRHfkEHpVzZ7j951sOQLEqOlI+PSoDrlQ0YA39bkc+gQeVaLaHaLtR5Wm0AsyYc8knkIj0D9HO5WmjCTA95wbd/tuNLU/yCcyjoseKC6jR3bk83esD5lXRezV6rk7yCcyqoucS7cu6P4rT5BOYXUV/lOihlX420+Ovi9oMDrfkExiZc4dV9O2j/X2XNrA8ySeQWkXf/uwHa3QfWJ3kE4jLuXdU9KuP7ne3inO3/3gLhXwCsSX6GlBhfz72+/3uyOdvP/68hUM+gYwqOg3yCWRW0QnlST6B6Tn3JU99kk9gPhUdCfkEis255BNIyuoX+QRqUFHyCRSrouQTKFZFySdQrIr+8i0HoFgVJZ9A/pwbqaK+5QAUq6LkE5gt545VUfIJFKuiyhMotosqT+AxLvrqaAgouo2+Dlen5gk8uI+uXm+E3V+vK70TKKST/rdavbweeVmtdE4AAAAApfAXfNqHYFLYplkAAAAASUVORK5CYII=",
            e: 1,
          },
          {
            id: "comp_0",
            nm: "Comp 1",
            fr: 25,
            layers: [
              {
                ddd: 0,
                ind: 1,
                ty: 2,
                nm: "e/for-animated.ai",
                cl: "ai",
                refId: "image_0",
                sr: 1,
                ks: {
                  o: {
                    a: 0,
                    k: 100,
                    ix: 11,
                  },
                  r: {
                    a: 0,
                    k: 0,
                    ix: 10,
                  },
                  p: {
                    a: 1,
                    k: [
                      {
                        i: {
                          x: 0.667,
                          y: 1,
                        },
                        o: {
                          x: 0.333,
                          y: 0,
                        },
                        t: 103,
                        s: [819, 461, 0],
                        to: [0, -16.667, 0],
                        ti: [0, 19, 0],
                      },
                      {
                        i: {
                          x: 0.667,
                          y: 1,
                        },
                        o: {
                          x: 0.333,
                          y: 0,
                        },
                        t: 107,
                        s: [819, 361, 0],
                        to: [0, -19, 0],
                        ti: [0, -0.333, 0],
                      },
                      {
                        i: {
                          x: 0.667,
                          y: 0.791,
                        },
                        o: {
                          x: 0.333,
                          y: 0,
                        },
                        t: 118,
                        s: [819, 347, 0],
                        to: [0, 0.27, 0],
                        ti: [0, -4.673, 0],
                      },
                      {
                        i: {
                          x: 0.667,
                          y: 1,
                        },
                        o: {
                          x: 0.333,
                          y: 0.259,
                        },
                        t: 124,
                        s: [819, 368.499, 0],
                        to: [0, 1.104, 0],
                        ti: [0, -0.51, 0],
                      },
                      {
                        t: 126,
                        s: [819, 363, 0],
                      },
                    ],
                    ix: 2,
                    l: 2,
                  },
                  a: {
                    a: 0,
                    k: [126, 146.5, 0],
                    ix: 1,
                    l: 2,
                  },
                  s: {
                    a: 1,
                    k: [
                      {
                        i: {
                          x: [0.667, 0.667, 0.667],
                          y: [1, 1, 1],
                        },
                        o: {
                          x: [0.667, 0.333, 0.333],
                          y: [0.128, 0, 0],
                        },
                        t: 103,
                        s: [44, 0, 100],
                      },
                      {
                        i: {
                          x: [0.667, 0.667, 0.667],
                          y: [1, 1, 1],
                        },
                        o: {
                          x: [0.763, 0.333, 0.333],
                          y: [0.402, 0, 0],
                        },
                        t: 107,
                        s: [44, 44, 100],
                      },
                      {
                        i: {
                          x: [0.667, 0.667, 0.667],
                          y: [1, 0.88, 1.417],
                        },
                        o: {
                          x: [0.333, 0.333, 0.333],
                          y: [0, 0, 0],
                        },
                        t: 118,
                        s: [44, 51, 100],
                      },
                      {
                        i: {
                          x: [0.667, 0.667, 0.667],
                          y: [1, 1, 1],
                        },
                        o: {
                          x: [0.333, 0.333, 0.333],
                          y: [0, -0.252, -0.313],
                        },
                        t: 122,
                        s: [44, 40.094, 100],
                      },
                      {
                        t: 125,
                        s: [44, 44, 100],
                      },
                    ],
                    ix: 6,
                    l: 2,
                    x: "var $bm_rt;\nvar e, g, nMax, n, n, t, v, vl, vu, vu, tCur, segDur, tNext, nb, delta;\ne = 0.7;\ng = 4000;\nnMax = 9;\n$bm_rt = n = 0;\nif (numKeys > 0) {\n    $bm_rt = n = nearestKey(time).index;\n    if (key(n).time > time)\n        n--;\n}\nif (n > 0) {\n    t = $bm_sub(time, key(n).time);\n    v = $bm_mul($bm_neg(velocityAtTime($bm_sub(key(n).time, 0.001))), e);\n    vl = length(v);\n    if ($bm_isInstanceOfArray(value)) {\n        vu = vl > 0 ? normalize(v) : [\n            0,\n            0,\n            0\n        ];\n    } else {\n        vu = v < 0 ? -1 : 1;\n    }\n    tCur = 0;\n    segDur = $bm_div($bm_mul(2, vl), g);\n    tNext = segDur;\n    nb = 1;\n    while (tNext < t && nb <= nMax) {\n        vl *= e;\n        segDur *= e;\n        tCur = tNext;\n        tNext = $bm_sum(tNext, segDur);\n        nb++;\n    }\n    if (nb <= nMax) {\n        delta = $bm_sub(t, tCur);\n        $bm_rt = $bm_sum(value, $bm_mul($bm_mul(vu, delta), $bm_sub(vl, $bm_div($bm_mul(g, delta), 2))));\n    } else {\n        $bm_rt = value;\n    }\n} else\n    $bm_rt = value;",
                  },
                },
                ao: 0,
                ip: 36,
                op: 786,
                st: 36,
                bm: 0,
              },
              {
                ddd: 0,
                ind: 2,
                ty: 2,
                nm: "i/for-animated.ai",
                cl: "ai",
                refId: "image_1",
                sr: 1,
                ks: {
                  o: {
                    a: 0,
                    k: 100,
                    ix: 11,
                  },
                  r: {
                    a: 0,
                    k: 0,
                    ix: 10,
                  },
                  p: {
                    a: 1,
                    k: [
                      {
                        i: {
                          x: 0.667,
                          y: 1,
                        },
                        o: {
                          x: 0.333,
                          y: 0,
                        },
                        t: 103,
                        s: [586.5, 459.5, 0],
                        to: [0, -16.667, 0],
                        ti: [0, 19, 0],
                      },
                      {
                        i: {
                          x: 0.667,
                          y: 1,
                        },
                        o: {
                          x: 0.333,
                          y: 0,
                        },
                        t: 107,
                        s: [586.5, 359.5, 0],
                        to: [0, -19, 0],
                        ti: [0, -0.333, 0],
                      },
                      {
                        i: {
                          x: 0.667,
                          y: 0.791,
                        },
                        o: {
                          x: 0.333,
                          y: 0,
                        },
                        t: 118,
                        s: [586.5, 345.5, 0],
                        to: [0, 0.27, 0],
                        ti: [0, -4.673, 0],
                      },
                      {
                        i: {
                          x: 0.667,
                          y: 1,
                        },
                        o: {
                          x: 0.333,
                          y: 0.259,
                        },
                        t: 124,
                        s: [586.5, 366.999, 0],
                        to: [0, 1.104, 0],
                        ti: [0, -0.51, 0],
                      },
                      {
                        t: 126,
                        s: [586.5, 361.5, 0],
                      },
                    ],
                    ix: 2,
                    l: 2,
                  },
                  a: {
                    a: 0,
                    k: [32.5, 139.5, 0],
                    ix: 1,
                    l: 2,
                  },
                  s: {
                    a: 1,
                    k: [
                      {
                        i: {
                          x: [0.667, 0.667, 0.667],
                          y: [1, 1, 1],
                        },
                        o: {
                          x: [0.333, 0.333, 0.333],
                          y: [0, 0, 0],
                        },
                        t: 103,
                        s: [44, 0, 100],
                      },
                      {
                        i: {
                          x: [0.667, 0.667, 0.667],
                          y: [1, 1, 1],
                        },
                        o: {
                          x: [0.333, 0.333, 0.333],
                          y: [0, 0, 0],
                        },
                        t: 107,
                        s: [44, 44, 100],
                      },
                      {
                        i: {
                          x: [0.667, 0.667, 0.667],
                          y: [1, 0.88, 11.5],
                        },
                        o: {
                          x: [0.333, 0.333, 0.333],
                          y: [0, 0, 0],
                        },
                        t: 118,
                        s: [44, 51, 100],
                      },
                      {
                        i: {
                          x: [0.667, 0.667, 0.667],
                          y: [1, 1, 1],
                        },
                        o: {
                          x: [0.333, 0.333, 0.333],
                          y: [0, -0.252, -7.875],
                        },
                        t: 122,
                        s: [44, 40.094, 100],
                      },
                      {
                        t: 125,
                        s: [44, 44, 100],
                      },
                    ],
                    ix: 6,
                    l: 2,
                    x: "var $bm_rt;\nvar e, g, nMax, n, n, t, v, vl, vu, vu, tCur, segDur, tNext, nb, delta;\ne = 0.7;\ng = 4000;\nnMax = 9;\n$bm_rt = n = 0;\nif (numKeys > 0) {\n    $bm_rt = n = nearestKey(time).index;\n    if (key(n).time > time)\n        n--;\n}\nif (n > 0) {\n    t = $bm_sub(time, key(n).time);\n    v = $bm_mul($bm_neg(velocityAtTime($bm_sub(key(n).time, 0.001))), e);\n    vl = length(v);\n    if ($bm_isInstanceOfArray(value)) {\n        vu = vl > 0 ? normalize(v) : [\n            0,\n            0,\n            0\n        ];\n    } else {\n        vu = v < 0 ? -1 : 1;\n    }\n    tCur = 0;\n    segDur = $bm_div($bm_mul(2, vl), g);\n    tNext = segDur;\n    nb = 1;\n    while (tNext < t && nb <= nMax) {\n        vl *= e;\n        segDur *= e;\n        tCur = tNext;\n        tNext = $bm_sum(tNext, segDur);\n        nb++;\n    }\n    if (nb <= nMax) {\n        delta = $bm_sub(t, tCur);\n        $bm_rt = $bm_sum(value, $bm_mul($bm_mul(vu, delta), $bm_sub(vl, $bm_div($bm_mul(g, delta), 2))));\n    } else {\n        $bm_rt = value;\n    }\n} else\n    $bm_rt = value;",
                  },
                },
                ao: 0,
                ip: 36,
                op: 786,
                st: 36,
                bm: 0,
              },
              {
                ddd: 0,
                ind: 3,
                ty: 2,
                nm: "i2/for-animated.ai",
                cl: "ai",
                refId: "image_2",
                sr: 1,
                ks: {
                  o: {
                    a: 0,
                    k: 100,
                    ix: 11,
                  },
                  r: {
                    a: 0,
                    k: 0,
                    ix: 10,
                  },
                  p: {
                    a: 1,
                    k: [
                      {
                        i: {
                          x: 0.667,
                          y: 1,
                        },
                        o: {
                          x: 0.333,
                          y: 0,
                        },
                        t: 103,
                        s: [1023.125, 458.875, 0],
                        to: [0, -16.667, 0],
                        ti: [0, 19, 0],
                      },
                      {
                        i: {
                          x: 0.667,
                          y: 1,
                        },
                        o: {
                          x: 0.333,
                          y: 0,
                        },
                        t: 107,
                        s: [1023.125, 358.875, 0],
                        to: [0, -19, 0],
                        ti: [0, -0.333, 0],
                      },
                      {
                        i: {
                          x: 0.667,
                          y: 0.791,
                        },
                        o: {
                          x: 0.333,
                          y: 0,
                        },
                        t: 118,
                        s: [1023.125, 344.875, 0],
                        to: [0, 0.27, 0],
                        ti: [0, -4.673, 0],
                      },
                      {
                        i: {
                          x: 0.667,
                          y: 1,
                        },
                        o: {
                          x: 0.333,
                          y: 0.259,
                        },
                        t: 124,
                        s: [1023.125, 366.374, 0],
                        to: [0, 1.104, 0],
                        ti: [0, -0.51, 0],
                      },
                      {
                        t: 126,
                        s: [1023.125, 360.875, 0],
                      },
                    ],
                    ix: 2,
                    l: 2,
                  },
                  a: {
                    a: 0,
                    k: [32.5, 139.5, 0],
                    ix: 1,
                    l: 2,
                  },
                  s: {
                    a: 1,
                    k: [
                      {
                        i: {
                          x: [0.667, 0.667, 0.667],
                          y: [1, 1, 1],
                        },
                        o: {
                          x: [0.333, 0.333, 0.333],
                          y: [0, 0, 0],
                        },
                        t: 103,
                        s: [44, 0, 100],
                      },
                      {
                        i: {
                          x: [0.667, 0.667, 0.667],
                          y: [1, 1, 1],
                        },
                        o: {
                          x: [0.333, 0.333, 0.333],
                          y: [0, 0, 0],
                        },
                        t: 107,
                        s: [44, 44, 100],
                      },
                      {
                        i: {
                          x: [0.667, 0.667, 0.667],
                          y: [1, 0.88, 11.5],
                        },
                        o: {
                          x: [0.333, 0.333, 0.333],
                          y: [0, 0, 0],
                        },
                        t: 118,
                        s: [44, 51, 100],
                      },
                      {
                        i: {
                          x: [0.667, 0.667, 0.667],
                          y: [1, 1, 1],
                        },
                        o: {
                          x: [0.333, 0.333, 0.333],
                          y: [0, -0.252, -7.875],
                        },
                        t: 122,
                        s: [44, 40.094, 100],
                      },
                      {
                        t: 125,
                        s: [44, 44, 100],
                      },
                    ],
                    ix: 6,
                    l: 2,
                    x: "var $bm_rt;\nvar e, g, nMax, n, n, t, v, vl, vu, vu, tCur, segDur, tNext, nb, delta;\ne = 0.7;\ng = 4000;\nnMax = 9;\n$bm_rt = n = 0;\nif (numKeys > 0) {\n    $bm_rt = n = nearestKey(time).index;\n    if (key(n).time > time)\n        n--;\n}\nif (n > 0) {\n    t = $bm_sub(time, key(n).time);\n    v = $bm_mul($bm_neg(velocityAtTime($bm_sub(key(n).time, 0.001))), e);\n    vl = length(v);\n    if ($bm_isInstanceOfArray(value)) {\n        vu = vl > 0 ? normalize(v) : [\n            0,\n            0,\n            0\n        ];\n    } else {\n        vu = v < 0 ? -1 : 1;\n    }\n    tCur = 0;\n    segDur = $bm_div($bm_mul(2, vl), g);\n    tNext = segDur;\n    nb = 1;\n    while (tNext < t && nb <= nMax) {\n        vl *= e;\n        segDur *= e;\n        tCur = tNext;\n        tNext = $bm_sum(tNext, segDur);\n        nb++;\n    }\n    if (nb <= nMax) {\n        delta = $bm_sub(t, tCur);\n        $bm_rt = $bm_sum(value, $bm_mul($bm_mul(vu, delta), $bm_sub(vl, $bm_div($bm_mul(g, delta), 2))));\n    } else {\n        $bm_rt = value;\n    }\n} else\n    $bm_rt = value;",
                  },
                },
                ao: 0,
                ip: 36,
                op: 786,
                st: 36,
                bm: 0,
              },
              {
                ddd: 0,
                ind: 4,
                ty: 2,
                nm: "n/for-animated.ai",
                cl: "ai",
                refId: "image_3",
                sr: 1,
                ks: {
                  o: {
                    a: 0,
                    k: 100,
                    ix: 11,
                  },
                  r: {
                    a: 0,
                    k: 0,
                    ix: 10,
                  },
                  p: {
                    a: 1,
                    k: [
                      {
                        i: {
                          x: 0.667,
                          y: 1,
                        },
                        o: {
                          x: 0.333,
                          y: 0,
                        },
                        t: 103,
                        s: [686, 460, 0],
                        to: [0, -16.667, 0],
                        ti: [0, 19, 0],
                      },
                      {
                        i: {
                          x: 0.667,
                          y: 1,
                        },
                        o: {
                          x: 0.333,
                          y: 0,
                        },
                        t: 107,
                        s: [686, 360, 0],
                        to: [0, -19, 0],
                        ti: [0, -0.333, 0],
                      },
                      {
                        i: {
                          x: 0.667,
                          y: 0.791,
                        },
                        o: {
                          x: 0.333,
                          y: 0,
                        },
                        t: 118,
                        s: [686, 346, 0],
                        to: [0, 0.27, 0],
                        ti: [0, -4.673, 0],
                      },
                      {
                        i: {
                          x: 0.667,
                          y: 1,
                        },
                        o: {
                          x: 0.333,
                          y: 0.259,
                        },
                        t: 124,
                        s: [686, 367.499, 0],
                        to: [0, 1.104, 0],
                        ti: [0, -0.51, 0],
                      },
                      {
                        t: 126,
                        s: [686, 362, 0],
                      },
                    ],
                    ix: 2,
                    l: 2,
                  },
                  a: {
                    a: 0,
                    k: [116.5, 142.5, 0],
                    ix: 1,
                    l: 2,
                  },
                  s: {
                    a: 1,
                    k: [
                      {
                        i: {
                          x: [0.667, 0.667, 0.667],
                          y: [1, 1, 1],
                        },
                        o: {
                          x: [0.333, 0.333, 0.333],
                          y: [0, 0, 0],
                        },
                        t: 103,
                        s: [44, 0, 100],
                      },
                      {
                        i: {
                          x: [0.667, 0.667, 0.667],
                          y: [1, 1, 1],
                        },
                        o: {
                          x: [0.333, 0.333, 0.333],
                          y: [0, 0, 0],
                        },
                        t: 107,
                        s: [44, 44, 100],
                      },
                      {
                        i: {
                          x: [0.667, 0.667, 0.667],
                          y: [1, 0.88, 11.5],
                        },
                        o: {
                          x: [0.333, 0.333, 0.333],
                          y: [0, 0, 0],
                        },
                        t: 118,
                        s: [44, 51, 100],
                      },
                      {
                        i: {
                          x: [0.667, 0.667, 0.667],
                          y: [1, 1, 1],
                        },
                        o: {
                          x: [0.333, 0.333, 0.333],
                          y: [0, -0.252, -7.875],
                        },
                        t: 122,
                        s: [44, 40.094, 100],
                      },
                      {
                        t: 125,
                        s: [44, 44, 100],
                      },
                    ],
                    ix: 6,
                    l: 2,
                    x: "var $bm_rt;\nvar e, g, nMax, n, n, t, v, vl, vu, vu, tCur, segDur, tNext, nb, delta;\ne = 0.7;\ng = 4000;\nnMax = 9;\n$bm_rt = n = 0;\nif (numKeys > 0) {\n    $bm_rt = n = nearestKey(time).index;\n    if (key(n).time > time)\n        n--;\n}\nif (n > 0) {\n    t = $bm_sub(time, key(n).time);\n    v = $bm_mul($bm_neg(velocityAtTime($bm_sub(key(n).time, 0.001))), e);\n    vl = length(v);\n    if ($bm_isInstanceOfArray(value)) {\n        vu = vl > 0 ? normalize(v) : [\n            0,\n            0,\n            0\n        ];\n    } else {\n        vu = v < 0 ? -1 : 1;\n    }\n    tCur = 0;\n    segDur = $bm_div($bm_mul(2, vl), g);\n    tNext = segDur;\n    nb = 1;\n    while (tNext < t && nb <= nMax) {\n        vl *= e;\n        segDur *= e;\n        tCur = tNext;\n        tNext = $bm_sum(tNext, segDur);\n        nb++;\n    }\n    if (nb <= nMax) {\n        delta = $bm_sub(t, tCur);\n        $bm_rt = $bm_sum(value, $bm_mul($bm_mul(vu, delta), $bm_sub(vl, $bm_div($bm_mul(g, delta), 2))));\n    } else {\n        $bm_rt = value;\n    }\n} else\n    $bm_rt = value;",
                  },
                },
                ao: 0,
                ip: 36,
                op: 786,
                st: 36,
                bm: 0,
              },
              {
                ddd: 0,
                ind: 5,
                ty: 2,
                nm: "k/for-animated.ai",
                cl: "ai",
                refId: "image_4",
                sr: 1,
                ks: {
                  o: {
                    a: 0,
                    k: 100,
                    ix: 11,
                  },
                  r: {
                    a: 0,
                    k: 0,
                    ix: 10,
                  },
                  p: {
                    a: 1,
                    k: [
                      {
                        i: {
                          x: 0.667,
                          y: 1,
                        },
                        o: {
                          x: 0.333,
                          y: 0,
                        },
                        t: 103,
                        s: [488.5, 441, 0],
                        to: [0, -16.667, 0],
                        ti: [0, 19, 0],
                      },
                      {
                        i: {
                          x: 0.667,
                          y: 1,
                        },
                        o: {
                          x: 0.333,
                          y: 0,
                        },
                        t: 107,
                        s: [488.5, 341, 0],
                        to: [0, -19, 0],
                        ti: [0, -0.333, 0],
                      },
                      {
                        i: {
                          x: 0.667,
                          y: 0.791,
                        },
                        o: {
                          x: 0.333,
                          y: 0,
                        },
                        t: 118,
                        s: [488.5, 327, 0],
                        to: [0, 0.27, 0],
                        ti: [0, -4.673, 0],
                      },
                      {
                        i: {
                          x: 0.667,
                          y: 1,
                        },
                        o: {
                          x: 0.333,
                          y: 0.259,
                        },
                        t: 124,
                        s: [488.5, 348.499, 0],
                        to: [0, 1.104, 0],
                        ti: [0, -0.51, 0],
                      },
                      {
                        t: 126,
                        s: [488.5, 343, 0],
                      },
                    ],
                    ix: 2,
                    l: 2,
                  },
                  a: {
                    a: 0,
                    k: [150.5, 185, 0],
                    ix: 1,
                    l: 2,
                  },
                  s: {
                    a: 1,
                    k: [
                      {
                        i: {
                          x: [0.667, 0.667, 0.667],
                          y: [1, 1, 1],
                        },
                        o: {
                          x: [0.333, 0.333, 0.333],
                          y: [0, 0, 0],
                        },
                        t: 103,
                        s: [44, 0, 100],
                      },
                      {
                        i: {
                          x: [0.667, 0.667, 0.667],
                          y: [1, 1, 1],
                        },
                        o: {
                          x: [0.333, 0.333, 0.333],
                          y: [0, 0, 0],
                        },
                        t: 107,
                        s: [44, 44, 100],
                      },
                      {
                        i: {
                          x: [0.667, 0.667, 0.667],
                          y: [1, 0.88, 11.5],
                        },
                        o: {
                          x: [0.333, 0.333, 0.333],
                          y: [0, 0, 0],
                        },
                        t: 118,
                        s: [44, 51, 100],
                      },
                      {
                        i: {
                          x: [0.667, 0.667, 0.667],
                          y: [1, 1, 1],
                        },
                        o: {
                          x: [0.333, 0.333, 0.333],
                          y: [0, -0.252, -7.875],
                        },
                        t: 122,
                        s: [44, 40.094, 100],
                      },
                      {
                        t: 125,
                        s: [44, 44, 100],
                      },
                    ],
                    ix: 6,
                    l: 2,
                    x: "var $bm_rt;\nvar e, g, nMax, n, n, t, v, vl, vu, vu, tCur, segDur, tNext, nb, delta;\ne = 0.7;\ng = 4000;\nnMax = 9;\n$bm_rt = n = 0;\nif (numKeys > 0) {\n    $bm_rt = n = nearestKey(time).index;\n    if (key(n).time > time)\n        n--;\n}\nif (n > 0) {\n    t = $bm_sub(time, key(n).time);\n    v = $bm_mul($bm_neg(velocityAtTime($bm_sub(key(n).time, 0.001))), e);\n    vl = length(v);\n    if ($bm_isInstanceOfArray(value)) {\n        vu = vl > 0 ? normalize(v) : [\n            0,\n            0,\n            0\n        ];\n    } else {\n        vu = v < 0 ? -1 : 1;\n    }\n    tCur = 0;\n    segDur = $bm_div($bm_mul(2, vl), g);\n    tNext = segDur;\n    nb = 1;\n    while (tNext < t && nb <= nMax) {\n        vl *= e;\n        segDur *= e;\n        tCur = tNext;\n        tNext = $bm_sum(tNext, segDur);\n        nb++;\n    }\n    if (nb <= nMax) {\n        delta = $bm_sub(t, tCur);\n        $bm_rt = $bm_sum(value, $bm_mul($bm_mul(vu, delta), $bm_sub(vl, $bm_div($bm_mul(g, delta), 2))));\n    } else {\n        $bm_rt = value;\n    }\n} else\n    $bm_rt = value;",
                  },
                },
                ao: 0,
                ip: 36,
                op: 786,
                st: 36,
                bm: 0,
              },
              {
                ddd: 0,
                ind: 6,
                ty: 2,
                nm: "s/for-animated.ai",
                cl: "ai",
                refId: "image_5",
                sr: 1,
                ks: {
                  o: {
                    a: 0,
                    k: 100,
                    ix: 11,
                  },
                  r: {
                    a: 0,
                    k: 0,
                    ix: 10,
                  },
                  p: {
                    a: 1,
                    k: [
                      {
                        i: {
                          x: 0.667,
                          y: 1,
                        },
                        o: {
                          x: 0.333,
                          y: 0,
                        },
                        t: 103,
                        s: [938, 460, 0],
                        to: [0, -16.667, 0],
                        ti: [0, 19, 0],
                      },
                      {
                        i: {
                          x: 0.667,
                          y: 1,
                        },
                        o: {
                          x: 0.333,
                          y: 0,
                        },
                        t: 107,
                        s: [938, 360, 0],
                        to: [0, -19, 0],
                        ti: [0, -0.333, 0],
                      },
                      {
                        i: {
                          x: 0.667,
                          y: 0.791,
                        },
                        o: {
                          x: 0.333,
                          y: 0,
                        },
                        t: 118,
                        s: [938, 346, 0],
                        to: [0, 0.27, 0],
                        ti: [0, -4.673, 0],
                      },
                      {
                        i: {
                          x: 0.667,
                          y: 1,
                        },
                        o: {
                          x: 0.333,
                          y: 0.259,
                        },
                        t: 124,
                        s: [938, 367.499, 0],
                        to: [0, 1.104, 0],
                        ti: [0, -0.51, 0],
                      },
                      {
                        t: 126,
                        s: [938, 362, 0],
                      },
                    ],
                    ix: 2,
                    l: 2,
                  },
                  a: {
                    a: 0,
                    k: [102.5, 146.5, 0],
                    ix: 1,
                    l: 2,
                  },
                  s: {
                    a: 1,
                    k: [
                      {
                        i: {
                          x: [0.667, 0.667, 0.667],
                          y: [1, 1, 1],
                        },
                        o: {
                          x: [0.333, 0.333, 0.333],
                          y: [0, 0, 0],
                        },
                        t: 103,
                        s: [44, 0, 100],
                      },
                      {
                        i: {
                          x: [0.667, 0.667, 0.667],
                          y: [1, 1, 1],
                        },
                        o: {
                          x: [0.333, 0.333, 0.333],
                          y: [0, 0, 0],
                        },
                        t: 107,
                        s: [44, 44, 100],
                      },
                      {
                        i: {
                          x: [0.667, 0.667, 0.667],
                          y: [1, 0.88, 11.5],
                        },
                        o: {
                          x: [0.333, 0.333, 0.333],
                          y: [0, 0, 0],
                        },
                        t: 118,
                        s: [44, 51, 100],
                      },
                      {
                        i: {
                          x: [0.667, 0.667, 0.667],
                          y: [1, 1, 1],
                        },
                        o: {
                          x: [0.333, 0.333, 0.333],
                          y: [0, -0.252, -7.875],
                        },
                        t: 122,
                        s: [44, 40.094, 100],
                      },
                      {
                        t: 125,
                        s: [44, 44, 100],
                      },
                    ],
                    ix: 6,
                    l: 2,
                    x: "var $bm_rt;\nvar e, g, nMax, n, n, t, v, vl, vu, vu, tCur, segDur, tNext, nb, delta;\ne = 0.7;\ng = 4000;\nnMax = 9;\n$bm_rt = n = 0;\nif (numKeys > 0) {\n    $bm_rt = n = nearestKey(time).index;\n    if (key(n).time > time)\n        n--;\n}\nif (n > 0) {\n    t = $bm_sub(time, key(n).time);\n    v = $bm_mul($bm_neg(velocityAtTime($bm_sub(key(n).time, 0.001))), e);\n    vl = length(v);\n    if ($bm_isInstanceOfArray(value)) {\n        vu = vl > 0 ? normalize(v) : [\n            0,\n            0,\n            0\n        ];\n    } else {\n        vu = v < 0 ? -1 : 1;\n    }\n    tCur = 0;\n    segDur = $bm_div($bm_mul(2, vl), g);\n    tNext = segDur;\n    nb = 1;\n    while (tNext < t && nb <= nMax) {\n        vl *= e;\n        segDur *= e;\n        tCur = tNext;\n        tNext = $bm_sum(tNext, segDur);\n        nb++;\n    }\n    if (nb <= nMax) {\n        delta = $bm_sub(t, tCur);\n        $bm_rt = $bm_sum(value, $bm_mul($bm_mul(vu, delta), $bm_sub(vl, $bm_div($bm_mul(g, delta), 2))));\n    } else {\n        $bm_rt = value;\n    }\n} else\n    $bm_rt = value;",
                  },
                },
                ao: 0,
                ip: 36,
                op: 786,
                st: 36,
                bm: 0,
              },
              {
                ddd: 0,
                ind: 7,
                ty: 2,
                nm: "s2/for-animated.ai",
                cl: "ai",
                refId: "image_6",
                sr: 1,
                ks: {
                  o: {
                    a: 0,
                    k: 100,
                    ix: 11,
                  },
                  r: {
                    a: 0,
                    k: 0,
                    ix: 10,
                  },
                  p: {
                    a: 1,
                    k: [
                      {
                        i: {
                          x: 0.667,
                          y: 1,
                        },
                        o: {
                          x: 0.333,
                          y: 0,
                        },
                        t: 103,
                        s: [1108, 460, 0],
                        to: [0, -16.667, 0],
                        ti: [0, 19, 0],
                      },
                      {
                        i: {
                          x: 0.667,
                          y: 1,
                        },
                        o: {
                          x: 0.333,
                          y: 0,
                        },
                        t: 107,
                        s: [1108, 360, 0],
                        to: [0, -19, 0],
                        ti: [0, -0.333, 0],
                      },
                      {
                        i: {
                          x: 0.667,
                          y: 0.791,
                        },
                        o: {
                          x: 0.333,
                          y: 0,
                        },
                        t: 118,
                        s: [1108, 346, 0],
                        to: [0, 0.27, 0],
                        ti: [0, -4.673, 0],
                      },
                      {
                        i: {
                          x: 0.667,
                          y: 1,
                        },
                        o: {
                          x: 0.333,
                          y: 0.259,
                        },
                        t: 124,
                        s: [1108, 367.499, 0],
                        to: [0, 1.104, 0],
                        ti: [0, -0.51, 0],
                      },
                      {
                        t: 126,
                        s: [1108, 362, 0],
                      },
                    ],
                    ix: 2,
                    l: 2,
                  },
                  a: {
                    a: 0,
                    k: [102.5, 146.5, 0],
                    ix: 1,
                    l: 2,
                  },
                  s: {
                    a: 1,
                    k: [
                      {
                        i: {
                          x: [0.667, 0.667, 0.667],
                          y: [1, 1, 1],
                        },
                        o: {
                          x: [0.333, 0.333, 0.333],
                          y: [0, 0, 0],
                        },
                        t: 103,
                        s: [44, 0, 100],
                      },
                      {
                        i: {
                          x: [0.667, 0.667, 0.667],
                          y: [1, 1, 1],
                        },
                        o: {
                          x: [0.333, 0.333, 0.333],
                          y: [0, 0, 0],
                        },
                        t: 107,
                        s: [44, 44, 100],
                      },
                      {
                        i: {
                          x: [0.667, 0.667, 0.667],
                          y: [1, 0.88, 11.5],
                        },
                        o: {
                          x: [0.333, 0.333, 0.333],
                          y: [0, 0, 0],
                        },
                        t: 118,
                        s: [44, 51, 100],
                      },
                      {
                        i: {
                          x: [0.667, 0.667, 0.667],
                          y: [1, 1, 1],
                        },
                        o: {
                          x: [0.333, 0.333, 0.333],
                          y: [0, -0.252, -7.875],
                        },
                        t: 122,
                        s: [44, 40.094, 100],
                      },
                      {
                        t: 125,
                        s: [44, 44, 100],
                      },
                    ],
                    ix: 6,
                    l: 2,
                    x: "var $bm_rt;\nvar e, g, nMax, n, n, t, v, vl, vu, vu, tCur, segDur, tNext, nb, delta;\ne = 0.7;\ng = 4000;\nnMax = 9;\n$bm_rt = n = 0;\nif (numKeys > 0) {\n    $bm_rt = n = nearestKey(time).index;\n    if (key(n).time > time)\n        n--;\n}\nif (n > 0) {\n    t = $bm_sub(time, key(n).time);\n    v = $bm_mul($bm_neg(velocityAtTime($bm_sub(key(n).time, 0.001))), e);\n    vl = length(v);\n    if ($bm_isInstanceOfArray(value)) {\n        vu = vl > 0 ? normalize(v) : [\n            0,\n            0,\n            0\n        ];\n    } else {\n        vu = v < 0 ? -1 : 1;\n    }\n    tCur = 0;\n    segDur = $bm_div($bm_mul(2, vl), g);\n    tNext = segDur;\n    nb = 1;\n    while (tNext < t && nb <= nMax) {\n        vl *= e;\n        segDur *= e;\n        tCur = tNext;\n        tNext = $bm_sum(tNext, segDur);\n        nb++;\n    }\n    if (nb <= nMax) {\n        delta = $bm_sub(t, tCur);\n        $bm_rt = $bm_sum(value, $bm_mul($bm_mul(vu, delta), $bm_sub(vl, $bm_div($bm_mul(g, delta), 2))));\n    } else {\n        $bm_rt = value;\n    }\n} else\n    $bm_rt = value;",
                  },
                },
                ao: 0,
                ip: 36,
                op: 786,
                st: 36,
                bm: 0,
              },
              {
                ddd: 0,
                ind: 8,
                ty: 2,
                nm: "dot/for-animated.ai",
                cl: "ai",
                refId: "image_7",
                sr: 1,
                ks: {
                  o: {
                    a: 1,
                    k: [
                      {
                        i: {
                          x: [0.833],
                          y: [0.833],
                        },
                        o: {
                          x: [0.167],
                          y: [0.167],
                        },
                        t: 112,
                        s: [0],
                      },
                      {
                        t: 113,
                        s: [100],
                      },
                    ],
                    ix: 11,
                  },
                  r: {
                    a: 0,
                    k: 0,
                    ix: 10,
                  },
                  p: {
                    a: 1,
                    k: [
                      {
                        i: {
                          x: 0.667,
                          y: 1,
                        },
                        o: {
                          x: 0.333,
                          y: 0,
                        },
                        t: 110,
                        s: [586.25, 357.5, 0],
                        to: [0, -26.944, 0],
                        ti: [0, 0.554, 0],
                      },
                      {
                        i: {
                          x: 0.667,
                          y: 1,
                        },
                        o: {
                          x: 0.333,
                          y: 0,
                        },
                        t: 115,
                        s: [586.25, 195.836, 0],
                        to: [0, -2.464, 0],
                        ti: [0, -5.987, 0],
                      },
                      {
                        i: {
                          x: 0.667,
                          y: 1,
                        },
                        o: {
                          x: 0.333,
                          y: 0,
                        },
                        t: 122,
                        s: [586.25, 262.978, 0],
                        to: [0, 3.764, 0],
                        ti: [0, 1.347, 0],
                      },
                      {
                        i: {
                          x: 0.667,
                          y: 1,
                        },
                        o: {
                          x: 0.333,
                          y: 0,
                        },
                        t: 125,
                        s: [586.25, 247.811, 0],
                        to: [0, -1.125, 0],
                        ti: [0, -0.464, 0],
                      },
                      {
                        i: {
                          x: 0.667,
                          y: 1,
                        },
                        o: {
                          x: 0.333,
                          y: 0,
                        },
                        t: 129,
                        s: [586.25, 273.184, 0],
                        to: [0, 0.382, 0],
                        ti: [0, 1.791, 0],
                      },
                      {
                        i: {
                          x: 0.667,
                          y: 1,
                        },
                        o: {
                          x: 0.333,
                          y: 0,
                        },
                        t: 132,
                        s: [586.25, 263.37, 0],
                        to: [0, -2.33, 0],
                        ti: [0, 0.556, 0],
                      },
                      {
                        t: 134,
                        s: [586.25, 267.5, 0],
                      },
                    ],
                    ix: 2,
                    l: 2,
                    x: "var $bm_rt;\nvar e, g, nMax, n, n, t, v, vl, vu, vu, tCur, segDur, tNext, nb, delta;\ne = 0.7;\ng = 4000;\nnMax = 9;\n$bm_rt = n = 0;\nif (numKeys > 0) {\n    $bm_rt = n = nearestKey(time).index;\n    if (key(n).time > time)\n        n--;\n}\nif (n > 0) {\n    t = $bm_sub(time, key(n).time);\n    v = $bm_mul($bm_neg(velocityAtTime($bm_sub(key(n).time, 0.001))), e);\n    vl = length(v);\n    if ($bm_isInstanceOfArray(value)) {\n        vu = vl > 0 ? normalize(v) : [\n            0,\n            0,\n            0\n        ];\n    } else {\n        vu = v < 0 ? -1 : 1;\n    }\n    tCur = 0;\n    segDur = $bm_div($bm_mul(2, vl), g);\n    tNext = segDur;\n    nb = 1;\n    while (tNext < t && nb <= nMax) {\n        vl *= e;\n        segDur *= e;\n        tCur = tNext;\n        tNext = $bm_sum(tNext, segDur);\n        nb++;\n    }\n    if (nb <= nMax) {\n        delta = $bm_sub(t, tCur);\n        $bm_rt = $bm_sum(value, $bm_mul($bm_mul(vu, delta), $bm_sub(vl, $bm_div($bm_mul(g, delta), 2))));\n    } else {\n        $bm_rt = value;\n    }\n} else\n    $bm_rt = value;",
                  },
                  a: {
                    a: 0,
                    k: [40, 40, 0],
                    ix: 1,
                    l: 2,
                  },
                  s: {
                    a: 1,
                    k: [
                      {
                        i: {
                          x: [0.833, 0.833, 0.833],
                          y: [0.833, 0.833, 0.833],
                        },
                        o: {
                          x: [0.167, 0.167, 0.167],
                          y: [0.167, 0.167, 0.167],
                        },
                        t: 107,
                        s: [0, 0, 100],
                      },
                      {
                        t: 109,
                        s: [44, 44, 100],
                      },
                    ],
                    ix: 6,
                    l: 2,
                  },
                },
                ao: 0,
                ip: 36,
                op: 786,
                st: 36,
                bm: 0,
              },
              {
                ddd: 0,
                ind: 9,
                ty: 2,
                nm: "dot2/for-animated.ai",
                cl: "ai",
                refId: "image_8",
                sr: 1,
                ks: {
                  o: {
                    a: 1,
                    k: [
                      {
                        i: {
                          x: [0.833],
                          y: [0.833],
                        },
                        o: {
                          x: [0.167],
                          y: [0.167],
                        },
                        t: 112,
                        s: [0],
                      },
                      {
                        t: 113,
                        s: [100],
                      },
                    ],
                    ix: 11,
                  },
                  r: {
                    a: 0,
                    k: 0,
                    ix: 10,
                  },
                  p: {
                    a: 1,
                    k: [
                      {
                        i: {
                          x: 0.667,
                          y: 1,
                        },
                        o: {
                          x: 0.333,
                          y: 0,
                        },
                        t: 110,
                        s: [1023.25, 356.25, 0],
                        to: [0, -26.944, 0],
                        ti: [0, 0.554, 0],
                      },
                      {
                        i: {
                          x: 0.667,
                          y: 1,
                        },
                        o: {
                          x: 0.333,
                          y: 0,
                        },
                        t: 115,
                        s: [1023.25, 194.586, 0],
                        to: [0, -2.464, 0],
                        ti: [0, -5.987, 0],
                      },
                      {
                        i: {
                          x: 0.667,
                          y: 1,
                        },
                        o: {
                          x: 0.333,
                          y: 0,
                        },
                        t: 122,
                        s: [1023.25, 261.728, 0],
                        to: [0, 3.764, 0],
                        ti: [0, 1.347, 0],
                      },
                      {
                        i: {
                          x: 0.667,
                          y: 1,
                        },
                        o: {
                          x: 0.333,
                          y: 0,
                        },
                        t: 125,
                        s: [1023.25, 246.561, 0],
                        to: [0, -1.125, 0],
                        ti: [0, -0.464, 0],
                      },
                      {
                        i: {
                          x: 0.667,
                          y: 1,
                        },
                        o: {
                          x: 0.333,
                          y: 0,
                        },
                        t: 129,
                        s: [1023.25, 271.934, 0],
                        to: [0, 0.382, 0],
                        ti: [0, 1.791, 0],
                      },
                      {
                        i: {
                          x: 0.667,
                          y: 1,
                        },
                        o: {
                          x: 0.333,
                          y: 0,
                        },
                        t: 132,
                        s: [1023.25, 262.12, 0],
                        to: [0, -2.33, 0],
                        ti: [0, 0.556, 0],
                      },
                      {
                        t: 134,
                        s: [1023.25, 266.25, 0],
                      },
                    ],
                    ix: 2,
                    l: 2,
                    x: "var $bm_rt;\nvar e, g, nMax, n, n, t, v, vl, vu, vu, tCur, segDur, tNext, nb, delta;\ne = 0.7;\ng = 4000;\nnMax = 9;\n$bm_rt = n = 0;\nif (numKeys > 0) {\n    $bm_rt = n = nearestKey(time).index;\n    if (key(n).time > time)\n        n--;\n}\nif (n > 0) {\n    t = $bm_sub(time, key(n).time);\n    v = $bm_mul($bm_neg(velocityAtTime($bm_sub(key(n).time, 0.001))), e);\n    vl = length(v);\n    if ($bm_isInstanceOfArray(value)) {\n        vu = vl > 0 ? normalize(v) : [\n            0,\n            0,\n            0\n        ];\n    } else {\n        vu = v < 0 ? -1 : 1;\n    }\n    tCur = 0;\n    segDur = $bm_div($bm_mul(2, vl), g);\n    tNext = segDur;\n    nb = 1;\n    while (tNext < t && nb <= nMax) {\n        vl *= e;\n        segDur *= e;\n        tCur = tNext;\n        tNext = $bm_sum(tNext, segDur);\n        nb++;\n    }\n    if (nb <= nMax) {\n        delta = $bm_sub(t, tCur);\n        $bm_rt = $bm_sum(value, $bm_mul($bm_mul(vu, delta), $bm_sub(vl, $bm_div($bm_mul(g, delta), 2))));\n    } else {\n        $bm_rt = value;\n    }\n} else\n    $bm_rt = value;",
                  },
                  a: {
                    a: 0,
                    k: [40, 40, 0],
                    ix: 1,
                    l: 2,
                  },
                  s: {
                    a: 1,
                    k: [
                      {
                        i: {
                          x: [0.833, 0.833, 0.833],
                          y: [0.833, 0.833, 0.833],
                        },
                        o: {
                          x: [0.167, 0.167, 0.167],
                          y: [0.167, 0.167, 0.167],
                        },
                        t: 107,
                        s: [0, 0, 100],
                      },
                      {
                        t: 109,
                        s: [44, 44, 100],
                      },
                    ],
                    ix: 6,
                    l: 2,
                  },
                },
                ao: 0,
                ip: 36,
                op: 786,
                st: 36,
                bm: 0,
              },
              {
                ddd: 0,
                ind: 10,
                ty: 2,
                nm: "row-yellow/for-animated.ai",
                cl: "ai",
                refId: "image_9",
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
                        t: 100,
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
                        t: 101,
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
                        t: 103,
                        s: [100],
                      },
                      {
                        t: 105,
                        s: [100],
                      },
                    ],
                    ix: 11,
                  },
                  r: {
                    a: 0,
                    k: 0,
                    ix: 10,
                  },
                  p: {
                    a: 1,
                    k: [
                      {
                        i: {
                          x: 0.667,
                          y: 1,
                        },
                        o: {
                          x: 0.333,
                          y: 0,
                        },
                        t: 92,
                        s: [70, 552, 0],
                        to: [36.667, -36.667, 0],
                        ti: [-40, 40, 0],
                      },
                      {
                        i: {
                          x: 0.667,
                          y: 1,
                        },
                        o: {
                          x: 0.333,
                          y: 0,
                        },
                        t: 105,
                        s: [290, 332, 0],
                        to: [40, -40, 0],
                        ti: [3.333, -3.333, 0],
                      },
                      {
                        i: {
                          x: 0.667,
                          y: 0.621,
                        },
                        o: {
                          x: 0.333,
                          y: 0,
                        },
                        t: 110,
                        s: [310, 312, 0],
                        to: [-2.068, 2.068, 0],
                        ti: [10.55, -10.568, 0],
                      },
                      {
                        i: {
                          x: 0.667,
                          y: 1,
                        },
                        o: {
                          x: 0.19,
                          y: 1,
                        },
                        t: 116,
                        s: [265.817, 356.329, 0],
                        to: [-6.454, 6.465, 0],
                        ti: [-2.03, 1.721, 0],
                      },
                      {
                        i: {
                          x: 0.667,
                          y: 0.667,
                        },
                        o: {
                          x: 0.333,
                          y: 0.333,
                        },
                        t: 125,
                        s: [278, 346, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0],
                      },
                      {
                        t: 141,
                        s: [278, 346, 0],
                      },
                    ],
                    ix: 2,
                    l: 2,
                    x: "var $bm_rt;\nvar n, n, t, t, v, amp, freq, decay;\n$bm_rt = n = 0;\nif (numKeys > 0) {\n    $bm_rt = n = nearestKey(time).index;\n    if (key(n).time > time) {\n        n--;\n    }\n}\nif (n == 0) {\n    $bm_rt = t = 0;\n} else {\n    $bm_rt = t = $bm_sub(time, key(n).time);\n}\nif (n > 0 && t < 1) {\n    v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\n    amp = 0.05;\n    freq = 4;\n    decay = 8;\n    $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\n} else {\n    $bm_rt = value;\n}",
                  },
                  a: {
                    a: 0,
                    k: [197.5, 197.5, 0],
                    ix: 1,
                    l: 2,
                  },
                  s: {
                    a: 0,
                    k: [44, 44, 100],
                    ix: 6,
                    l: 2,
                  },
                },
                ao: 0,
                ip: 36,
                op: 786,
                st: 36,
                bm: 0,
              },
              {
                ddd: 0,
                ind: 11,
                ty: 2,
                nm: "row-white/for-animated.ai",
                cl: "ai",
                refId: "image_10",
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
                        t: 100,
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
                        t: 101,
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
                        t: 103,
                        s: [100],
                      },
                      {
                        t: 105,
                        s: [100],
                      },
                    ],
                    ix: 11,
                  },
                  r: {
                    a: 0,
                    k: 0,
                    ix: 10,
                  },
                  p: {
                    a: 1,
                    k: [
                      {
                        i: {
                          x: 0.833,
                          y: 1,
                        },
                        o: {
                          x: 0.333,
                          y: 0,
                        },
                        t: 92,
                        s: [0, 624, 0],
                        to: [36.667, -36.667, 0],
                        ti: [-40, 40, 0],
                      },
                      {
                        i: {
                          x: 0.833,
                          y: 1,
                        },
                        o: {
                          x: 0.333,
                          y: 0,
                        },
                        t: 105,
                        s: [220, 404, 0],
                        to: [40, -40, 0],
                        ti: [3.333, -3.333, 0],
                      },
                      {
                        i: {
                          x: 0.668,
                          y: 0.624,
                        },
                        o: {
                          x: 0.296,
                          y: 0,
                        },
                        t: 110,
                        s: [240, 384, 0],
                        to: [-1.824, 1.824, 0],
                        ti: [9.384, -9.42, 0],
                      },
                      {
                        i: {
                          x: 0.667,
                          y: 1,
                        },
                        o: {
                          x: 0.178,
                          y: 1,
                        },
                        t: 116,
                        s: [199.587, 424.549, 0],
                        to: [-7.769, 7.799, 0],
                        ti: [-1.402, 1.092, 0],
                      },
                      {
                        i: {
                          x: 0.667,
                          y: 0.667,
                        },
                        o: {
                          x: 0.333,
                          y: 0.333,
                        },
                        t: 125,
                        s: [208, 418, 0],
                        to: [0, 0, 0],
                        ti: [0, 0, 0],
                      },
                      {
                        t: 141,
                        s: [208, 418, 0],
                      },
                    ],
                    ix: 2,
                    l: 2,
                    x: "var $bm_rt;\nvar n, n, t, t, v, amp, freq, decay;\n$bm_rt = n = 0;\nif (numKeys > 0) {\n    $bm_rt = n = nearestKey(time).index;\n    if (key(n).time > time) {\n        n--;\n    }\n}\nif (n == 0) {\n    $bm_rt = t = 0;\n} else {\n    $bm_rt = t = $bm_sub(time, key(n).time);\n}\nif (n > 0 && t < 1) {\n    v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\n    amp = 0.05;\n    freq = 4;\n    decay = 8;\n    $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\n} else {\n    $bm_rt = value;\n}",
                  },
                  a: {
                    a: 0,
                    k: [197.5, 197.5, 0],
                    ix: 1,
                    l: 2,
                  },
                  s: {
                    a: 0,
                    k: [44, 44, 100],
                    ix: 6,
                    l: 2,
                  },
                },
                ao: 0,
                ip: 36,
                op: 786,
                st: 36,
                bm: 0,
              },
              {
                ddd: 1,
                ind: 12,
                ty: 2,
                nm: "squad/for-animated.ai",
                cl: "ai",
                refId: "image_11",
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
                        t: 74,
                        s: [0],
                      },
                      {
                        t: 77,
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
                    k: [0, 6.814, 0],
                    ix: 7,
                  },
                  p: {
                    a: 1,
                    k: [
                      {
                        i: {
                          x: 0.667,
                          y: 1,
                        },
                        o: {
                          x: 0.333,
                          y: 0,
                        },
                        t: 91,
                        s: [641, 451, 0],
                        to: [-77.833, 0, 0],
                        ti: [77.833, 0, 0],
                      },
                      {
                        t: 100,
                        s: [174, 451, 0],
                      },
                    ],
                    ix: 2,
                  },
                  a: {
                    a: 0,
                    k: [118.5, 118.5, 0],
                    ix: 1,
                  },
                  s: {
                    a: 1,
                    k: [
                      {
                        i: {
                          x: [0.833, 0.833, 0.833],
                          y: [1, 1, 1],
                        },
                        o: {
                          x: [0.167, 0.167, 0.167],
                          y: [0, 0, 0],
                        },
                        t: 73,
                        s: [25, 22, 44],
                      },
                      {
                        i: {
                          x: [0.562, 0.562, 0.562],
                          y: [0.817, 0.819, 1],
                        },
                        o: {
                          x: [0.195, 0.195, 0.195],
                          y: [0, 0, 0],
                        },
                        t: 79,
                        s: [61, 66, 44],
                      },
                      {
                        i: {
                          x: [0.655, 0.655, 0.655],
                          y: [0.843, 0.927, 1],
                        },
                        o: {
                          x: [0.31, 0.31, 0.31],
                          y: [-0.419, -0.182, 0],
                        },
                        t: 83,
                        s: [38.479, 36.444, 44],
                      },
                      {
                        i: {
                          x: [0.833, 0.833, 0.833],
                          y: [1, 1, 1],
                        },
                        o: {
                          x: [0.417, 0.417, 0.417],
                          y: [-0.687, -0.104, 0],
                        },
                        t: 87,
                        s: [45.435, 57.178, 44],
                      },
                      {
                        i: {
                          x: [0.833, 0.833, 0.833],
                          y: [1, 1, 1],
                        },
                        o: {
                          x: [0.333, 0.333, 0.333],
                          y: [0, 0, 0],
                        },
                        t: 90,
                        s: [44, 44, 44],
                      },
                      {
                        i: {
                          x: [0.667, 0.667, 0.667],
                          y: [1, 1, 1],
                        },
                        o: {
                          x: [0.333, 0.333, 0.333],
                          y: [0, 0, 0],
                        },
                        t: 101,
                        s: [44, 44, 44],
                      },
                      {
                        i: {
                          x: [0.667, 0.667, 0.667],
                          y: [1.207, 1.428, 1],
                        },
                        o: {
                          x: [0.333, 0.333, 0.333],
                          y: [0, 0, 0],
                        },
                        t: 106,
                        s: [56, 55, 44],
                      },
                      {
                        i: {
                          x: [0.667, 0.667, 0.667],
                          y: [1, 1, 1],
                        },
                        o: {
                          x: [0.333, 0.333, 0.333],
                          y: [0.158, 0.208, 0],
                        },
                        t: 109,
                        s: [66.203, 59.52, 44],
                      },
                      {
                        i: {
                          x: [0.667, 0.667, 0.667],
                          y: [1, 1, 1],
                        },
                        o: {
                          x: [0.333, 0.333, 0.333],
                          y: [0, 0, 0],
                        },
                        t: 114,
                        s: [44, 44, 44],
                      },
                      {
                        i: {
                          x: [0.667, 0.667, 0.667],
                          y: [1, 1, 1],
                        },
                        o: {
                          x: [0.333, 0.333, 0.333],
                          y: [0, 0, 0],
                        },
                        t: 118,
                        s: [55, 53, 44],
                      },
                      {
                        t: 123,
                        s: [44, 44, 44],
                      },
                    ],
                    ix: 6,
                  },
                },
                ao: 0,
                ip: 0,
                op: 750,
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
            nm: "Comp 1",
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
                k: 8,
                ix: 8,
              },
              ry: {
                a: 0,
                k: 1,
                ix: 9,
              },
              rz: {
                a: 0,
                k: 19,
                ix: 10,
              },
              or: {
                a: 0,
                k: [340, 9, 12],
                ix: 7,
              },
              p: {
                a: 0,
                k: [626, 944, 0],
                ix: 2,
              },
              a: {
                a: 0,
                k: [640, 360, 0],
                ix: 1,
              },
              s: {
                a: 0,
                k: [39.245, 39.245, 39.245],
                ix: 6,
              },
            },
            ao: 0,
            w: 1280,
            h: 720,
            ip: 0,
            op: 684,
            st: -66,
            bm: 0,
          },
          {
            ddd: 0,
            ind: 2,
            ty: 2,
            nm: "animated4",
            refId: "image_12",
            sr: 1,
            ks: {
              o: {
                a: 0,
                k: 100,
                ix: 11,
              },
              r: {
                a: 0,
                k: 0,
                ix: 10,
              },
              p: {
                a: 0,
                k: [464.029, 1038.01, 0],
                ix: 2,
                l: 2,
              },
              a: {
                a: 0,
                k: [463.861, 437.095, 0],
                ix: 1,
                l: 2,
              },
              s: {
                a: 0,
                k: [100, 100, 100],
                ix: 6,
                l: 2,
              },
            },
            ao: 0,
            ip: 0,
            op: 750,
            st: 0,
            bm: 0,
          },
        ],
        markers: [],
      },
      container: document.getElementById("aniMain3"),
      path: "data3.json",
      renderer: "svg", // Required
      loop: true, // Optional
      autoplay: true, // Optional
      name: "aniMain3", // Name for future reference. Optional.
    });

    let animation4 = bodymovin.loadAnimation({
      animationData: {
        v: "5.9.0",
        fr: 25,
        ip: 0,
        op: 99,
        w: 1702,
        h: 1499,
        nm: "animated5",
        ddd: 0,
        assets: [
          {
            id: "image_0",
            w: 96,
            h: 111,
            u: "",
            p: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABvCAMAAAAkEDXfAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAWlBMVEVHcEwxdJgAPVyV1f0ELECT0/8FV4AHTnEAUnyR0fkAOWEAQF5dnsMAKDuX1/8APl2X1/8AU3uX1/+X1/+X1/9GjLMAJzqV1f+W1v+X1/+X1/8AU3sAJzt5uN7DDBWEAAAAGnRSTlMA7EKG7xXy4sD5ECL2c6eb4HJowEDxwDBQ0M/qLcIAAAJRSURBVGje7ZrtcoIwEEVBgmuAChWsdgnv/5pVWzt8BNhNNv9yH2DPzLmbyIBJwsrtnOVJuORnRGwuweZnGl9pb0HGdw3+J4CnvMVxtLCnPMN5vjvB+ReNlpylPHXfaI/OxFZzLU3nL1/jZjw93RvcjcfK3lqkpLkHkD+N09G+aGSE7alrkBfe0c5b5Id+tC33Ai3EleXJZ3vqWvTJ3tFmrKaTp0yjf/Tqyt4blIn9aN9alEubi60m8WhfNEpnvLJdgyHyvgIFVnNzZTMMmKenU6rDASr1APTHa6DxAxjzBPT9sQqh5zH+Dej7dJCef1VmDOj7q2gVw+/4MUDS0wDGLAEPhIwnnRpjBzyq0GLy7QD/KobJeAvAr4qR/FWAx8rqVBkKwNVTtRy/BnDxtLSzBWCvrLaP3wDwVjZVhg+gV1Gtjt8B0KoYwBhXAGFlJ/eCA2CviqsyvoAtT8PeeBJgdWW35XMAVk978nmA5cpWysgCplWQ7DABo5Wlj+cB/qrQqTKhAM9ntIozng3oezAmAiIgAiIgAiIgAiIgAiIgDODzGBKgkiQp63CAuni9XD6cwgC+yv/X43RPdIA6jN/vF5/CAPUx/0RRniQBH4XlI8sBpAAj+dMQqiAAvg7r37mK2huwlM+rAlzkc6oAN/n0KsBRPrkKcJY/83TiAgjyZ56AA6hL/r8G7LcH+MnfX1nwlb9XBSzHF15/PpmvLAjI31xZEJG/UQUIyV+9PUBM/koVICffXgVIyrdVAcvfc7k8qwDJbi23xxHeD1OBUtZcOz+xdDC9LnzIogAAAABJRU5ErkJggg==",
            e: 1,
          },
          {
            id: "image_1",
            w: 96,
            h: 111,
            u: "",
            p: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABvBAMAAADh4NjeAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAMFBMVEVHcEz/lxf+kBT/mBf7hg/8hhL9jBPzUAH/lxf5cAv/lhbyTADzUAHyTAD/mBfyTACbd0J1AAAADnRSTlMAwuDwFjtg8obxp7DfgPCcJLsAAAIMSURBVFjD7dixTgJBEAbgK4TYG9rrtKTQxPIC3cUKKK0IvACVHcFEa9orbayt8BG0xYIXYK/AM2ZiRwFmFYFj93Zmd9b6/nq+4v5dEnaCAM/1feCVKxBdn/njCGDe4s9X6vCb9wZ3/iiEv1xy58ewS40H+pDnkTPfPsxDesspVI1wVhVHGoAPR1XVOhRiL7cSgpEzW6FPgKTGKlQNeQ87+DykxD1sAhX8HsZAByu3GlkAcg+xQtWcsgpVU7iHd655SLVye+CO+iNvAyfzBqdQ7B7aCzXLrdSBnRqr0EK5Y5/5zT088QLZIAgvfMD0KwjBQ0zlBgC71kRuAVcs5B7wxGZ+D1JOQVIBDJGNNOCuajt/AC6xm1eA/cMTaQKbyOc1kJLiU6KArCqTBCBENiIBKrT5IsDK1eYNYFb1IO2gKBLpArpYSDdIbfMYUEQmWSAXeqEWsC93Krlg++HYPAU2IpE+II3weRKAkCUoQQlKUIJ/g74fGFD/jAnw3aAeMzhYNch/9yhYt+j3AwaWb/gbmgQz26MSARPrs9UEL8SmgQI3jpeiQA7A+rgX2AGY+xgKrFvOBYUGll33CkQQB6Cnh4MJY42jgmfWnuIAXgPWJiQHQ9euJdLByrnGijWwYizKmgpYs1ZxnRwsZ/ydl7AfgFmucByAUa5wHUDxrgs59NpVxufuAyjcdeoAfgA7tHid0p3EaQAAAABJRU5ErkJggg==",
            e: 1,
          },
          {
            id: "image_2",
            w: 96,
            h: 111,
            u: "",
            p: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABvCAMAAAAkEDXfAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAWlBMVEVHcEwEVn9UlLmX1/+S0voELECV1f4FTXEAUnxTi7eW1v+X1/84ep4AQF4AO1iX1/8ARmiX1/8iZYhqqs8AJzoAUXkAKDwATHIAJjuX1/+X1/8AU3sAJzt9v+Z2HJr6AAAAGnRSTlMA8vW7+O904cEQJ0XtIj6ZcODp+8Cgflid0ObOK84AAAJLSURBVGje7ZrZkoIwEEXZQguCoow6kzT//5sjOgtLAp2k85b7ATlVpy+tRUgSq9R5WSXhUp2llJcy2PllIV/J6yDHHy/yL2d+T3UupynKAPLn+ToGkD8Pm6fjl9SHx9NC/jwXb0+V3s5/PCs7raYpHo/2ph1/T5pqsnrak+9ZWYp8j8oS5bs+2lUp3UL0ZCff2tMxlz7Zq2x9lr7ZrKyHnamniquadp7qXPJl7ak6S94sKssi31xZNvl6T6zyNZ5KGTCjp0MzhANk4glQaRbo+AEQR4BSaR9CzxXxF6DUdeC3g1OAUg3ro9C/j58COEcxyl8D2DwVDaIe8PQ0sMnXA56eCib5BoBnZSfyjQCPURSNQArAtbLZ+ngTwKWyPSDSAdae3nvBBmBX2UagPUApamUz4/E7AFplB0B0BRBGYZRPBOxVdssOEbBV2X7veBLgiRgc5NsAtJWdLWVvwLqymUBewLyyPSByAyaVHa6IIQA/lS0agaEAY2Uzm+OtAUoBYgREQAREQAREQAREQAREQBhAl4YEiCRJ2ls4wOf7FfnpEAbw0f69Hn+k/ABxmt0fdMwAcV9eURBHQQTcdfc4J+ACTOTPQ6gsAfBx2rhlvHkDRLd9Vdce/AD3/fvMB7gDjPLpowBH+eRRgLP8RWUPtoC77aW7YRQGwGfr8FVCRwbQ5e9vD/CVvzcKWG81v490loscGORvVhZY5G9sD2CSb1zkwCbfsD2AT75+FMApXzeKF0A8wnwpOG4P0P2e83nqUvj9MxUo7c1W/jeI/zBnnOR/+gAAAABJRU5ErkJggg==",
            e: 1,
          },
          {
            id: "image_3",
            w: 1,
            h: 1,
            u: "",
            p: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAEAQMAAACTPww9AAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAA1BMVEVHcEyC+tLSAAAAAXRSTlMAQObYZgAAAAtJREFUCNdjYIAAAAAIAAEvIN0xAAAAAElFTkSuQmCC",
            e: 1,
          },
          {
            id: "image_4",
            w: 36,
            h: 30,
            u: "",
            p: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAeBAMAAAC2z6FgAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAIVBMVEVHcEz///3///7///7///7///7///////7///////3///51ikLlAAAACnRSTlMAfr9a6pwgQBAw3CiAKwAAAIFJREFUKM9jYEADzAXoIuxeCmgibFqrFqCKcEStQhcSWYUuxLkKQ4gdJOSA6gCQEKqNjMQLBWAIOTOgCy1sQBdamgBlGsB8uAgWDEWLYcpgalJXLUILj0avVUvRQtELaA2qkNQqDCEtKgstxhBaIoEhFMGALqSJHuNR7ugiDMkYIgC1Cj7oKrVj6QAAAABJRU5ErkJggg==",
            e: 1,
          },
          {
            id: "image_5",
            w: 173,
            h: 112,
            u: "",
            p: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK0AAABwBAMAAACeIe2BAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAG1BMVEVHcEzM7f/M7f/O7//N7f/L7f/N7P/M7f/M7f8Tyh+ZAAAACHRSTlMAfesXwTdbmatSlpAAAAGWSURBVGje7doxS8NQEMDxV2PSjME6dNRBzVhUcBVEeWNoKziGoHuoFBw1Vnsf27y8l29wf7Dwbuj4G+5y9y55NQaK1F4tCHcpckm4VkQeIFcKyO0qdffDubJXr93t4OrXLpl7WL12ifWweu2yUpja3QlUuzVUO3Pi4UeqdrNDq92Oqt05VTv9vgsTSP9E8rXTH8WTknGHmdkRh10j8kW4yaYrzEFGw2wricgF4WbEqHCPMrOsDO4ZsWX27i+R4BLqkDnkHkNuPzSH/G6e1Gdb65/jVhm+IdPRu7KA3BZwp2Df/UCvYYj7ArlZyO+rdn80Uvs8az8WqzCP90Q63JyvIPcecr+Zc585lyw02K4hNwt9d7pV74/W169Whp/dzxE0LnJooe9d9USM5xLVd59E35WM6/Y2xJ0y57P7jlcjbrIyMWLEiBEjRox/HemWcXN5h9xuxrjS1Ywru4pxiS+8OXRDmEO3TMFV32VHt4hudEF3Arnj3ynUXXc1iLj+WlffNamF7qzcXT/hurt+xDVryDVv2ILyBwAd0X2A+yavAAAAAElFTkSuQmCC",
            e: 1,
          },
          {
            id: "image_6",
            w: 1456,
            h: 1159,
            u: "",
            p: "data:image/png;base64,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",
            e: 1,
          },
          {
            id: "comp_0",
            nm: "animated6",
            fr: 25,
            layers: [
              {
                ddd: 0,
                ind: 1,
                ty: 2,
                nm: "cube3",
                refId: "image_0",
                sr: 1,
                ks: {
                  o: {
                    a: 0,
                    k: 100,
                    ix: 11,
                  },
                  r: {
                    a: 0,
                    k: 0,
                    ix: 10,
                  },
                  p: {
                    a: 0,
                    k: [174.348, 519.549, 0],
                    ix: 2,
                    l: 2,
                  },
                  a: {
                    a: 0,
                    k: [47.598, 55.375, 0],
                    ix: 1,
                    l: 2,
                  },
                  s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6,
                    l: 2,
                  },
                },
                ao: 0,
                ip: 0,
                op: 750,
                st: 0,
                bm: 0,
              },
              {
                ddd: 0,
                ind: 2,
                ty: 2,
                nm: "cube2",
                refId: "image_1",
                sr: 1,
                ks: {
                  o: {
                    a: 0,
                    k: 100,
                    ix: 11,
                  },
                  r: {
                    a: 0,
                    k: 0,
                    ix: 10,
                  },
                  p: {
                    a: 0,
                    k: [149.348, 1370.549, 0],
                    ix: 2,
                    l: 2,
                  },
                  a: {
                    a: 0,
                    k: [47.598, 55.375, 0],
                    ix: 1,
                    l: 2,
                  },
                  s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6,
                    l: 2,
                  },
                },
                ao: 0,
                ip: 0,
                op: 750,
                st: 0,
                bm: 0,
              },
              {
                ddd: 0,
                ind: 3,
                ty: 2,
                nm: "cube1",
                refId: "image_2",
                sr: 1,
                ks: {
                  o: {
                    a: 0,
                    k: 100,
                    ix: 11,
                  },
                  r: {
                    a: 0,
                    k: 0,
                    ix: 10,
                  },
                  p: {
                    a: 0,
                    k: [1034.348, 1409.549, 0],
                    ix: 2,
                    l: 2,
                  },
                  a: {
                    a: 0,
                    k: [47.598, 55.375, 0],
                    ix: 1,
                    l: 2,
                  },
                  s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6,
                    l: 2,
                  },
                },
                ao: 0,
                ip: 0,
                op: 750,
                st: 0,
                bm: 0,
              },
              {
                ddd: 0,
                ind: 4,
                ty: 2,
                nm: "Capa 4 Imagen",
                refId: "image_3",
                sr: 1,
                ks: {
                  o: {
                    a: 0,
                    k: 100,
                    ix: 11,
                  },
                  r: {
                    a: 0,
                    k: 0,
                    ix: 10,
                  },
                  p: {
                    a: 0,
                    k: [0, 1499, 0],
                    ix: 2,
                    l: 2,
                  },
                  a: {
                    a: 0,
                    k: [0, 0, 0],
                    ix: 1,
                    l: 2,
                  },
                  s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6,
                    l: 2,
                  },
                },
                ao: 0,
                ip: 0,
                op: 750,
                st: 0,
                bm: 0,
              },
            ],
          },
          {
            id: "comp_1",
            nm: "black-ligths",
            fr: 25,
            layers: [
              {
                ddd: 0,
                ind: 1,
                ty: 4,
                nm: "Capa de formas 8",
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
                        t: 10,
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
                        t: 11,
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
                        t: 31,
                        s: [100],
                      },
                      {
                        i: {
                          x: [0.833],
                          y: [1],
                        },
                        o: {
                          x: [0.167],
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
                        t: 62,
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
                        t: 63,
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
                        t: 86,
                        s: [100],
                      },
                      {
                        t: 87,
                        s: [0],
                      },
                    ],
                    ix: 11,
                  },
                  r: {
                    a: 0,
                    k: 0,
                    ix: 10,
                  },
                  p: {
                    a: 0,
                    k: [876.5, 400.75, 0],
                    ix: 2,
                    l: 2,
                  },
                  a: {
                    a: 0,
                    k: [0, 0, 0],
                    ix: 1,
                    l: 2,
                  },
                  s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6,
                    l: 2,
                  },
                },
                ao: 0,
                shapes: [
                  {
                    ty: "gr",
                    it: [
                      {
                        ind: 0,
                        ty: "sh",
                        ix: 1,
                        ks: {
                          a: 0,
                          k: {
                            i: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            o: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            v: [
                              [377.438, 322],
                              [367.688, 327.75],
                              [367.812, 338.312],
                              [377.75, 333],
                            ],
                            c: true,
                          },
                          ix: 2,
                        },
                        nm: "Trazado 1",
                        mn: "ADBE Vector Shape - Group",
                        hd: false,
                      },
                      {
                        ty: "fl",
                        c: {
                          a: 0,
                          k: [
                            0.219607843137, 0.419607843137, 0.666666666667, 1,
                          ],
                          ix: 4,
                        },
                        o: {
                          a: 0,
                          k: 100,
                          ix: 5,
                        },
                        r: 1,
                        bm: 0,
                        nm: "Relleno 1",
                        mn: "ADBE Vector Graphic - Fill",
                        hd: false,
                      },
                      {
                        ty: "tr",
                        p: {
                          a: 0,
                          k: [0, 0],
                          ix: 2,
                        },
                        a: {
                          a: 0,
                          k: [0, 0],
                          ix: 1,
                        },
                        s: {
                          a: 0,
                          k: [100, 100],
                          ix: 3,
                        },
                        r: {
                          a: 0,
                          k: 0,
                          ix: 6,
                        },
                        o: {
                          a: 0,
                          k: 100,
                          ix: 7,
                        },
                        sk: {
                          a: 0,
                          k: 0,
                          ix: 4,
                        },
                        sa: {
                          a: 0,
                          k: 0,
                          ix: 5,
                        },
                        nm: "Transformar",
                      },
                    ],
                    nm: "Forma 1",
                    np: 3,
                    cix: 2,
                    bm: 0,
                    ix: 1,
                    mn: "ADBE Vector Group",
                    hd: false,
                  },
                ],
                ip: 0,
                op: 750,
                st: 0,
                bm: 0,
              },
              {
                ddd: 0,
                ind: 2,
                ty: 4,
                nm: "Capa de formas 7",
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
                        t: 35,
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
                        t: 36,
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
                        t: 57,
                        s: [100],
                      },
                      {
                        t: 58,
                        s: [0],
                      },
                    ],
                    ix: 11,
                  },
                  r: {
                    a: 0,
                    k: 0,
                    ix: 10,
                  },
                  p: {
                    a: 0,
                    k: [851, 415, 0],
                    ix: 2,
                    l: 2,
                  },
                  a: {
                    a: 0,
                    k: [0, 0, 0],
                    ix: 1,
                    l: 2,
                  },
                  s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6,
                    l: 2,
                  },
                },
                ao: 0,
                shapes: [
                  {
                    ty: "gr",
                    it: [
                      {
                        ind: 0,
                        ty: "sh",
                        ix: 1,
                        ks: {
                          a: 0,
                          k: {
                            i: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            o: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            v: [
                              [377.438, 322],
                              [367.688, 327.75],
                              [367.812, 338.312],
                              [377.75, 333],
                            ],
                            c: true,
                          },
                          ix: 2,
                        },
                        nm: "Trazado 1",
                        mn: "ADBE Vector Shape - Group",
                        hd: false,
                      },
                      {
                        ty: "fl",
                        c: {
                          a: 0,
                          k: [
                            0.219607843137, 0.419607843137, 0.666666666667, 1,
                          ],
                          ix: 4,
                        },
                        o: {
                          a: 0,
                          k: 100,
                          ix: 5,
                        },
                        r: 1,
                        bm: 0,
                        nm: "Relleno 1",
                        mn: "ADBE Vector Graphic - Fill",
                        hd: false,
                      },
                      {
                        ty: "tr",
                        p: {
                          a: 0,
                          k: [0, 0],
                          ix: 2,
                        },
                        a: {
                          a: 0,
                          k: [0, 0],
                          ix: 1,
                        },
                        s: {
                          a: 0,
                          k: [100, 100],
                          ix: 3,
                        },
                        r: {
                          a: 0,
                          k: 0,
                          ix: 6,
                        },
                        o: {
                          a: 0,
                          k: 100,
                          ix: 7,
                        },
                        sk: {
                          a: 0,
                          k: 0,
                          ix: 4,
                        },
                        sa: {
                          a: 0,
                          k: 0,
                          ix: 5,
                        },
                        nm: "Transformar",
                      },
                    ],
                    nm: "Forma 1",
                    np: 3,
                    cix: 2,
                    bm: 0,
                    ix: 1,
                    mn: "ADBE Vector Group",
                    hd: false,
                  },
                ],
                ip: 0,
                op: 750,
                st: 0,
                bm: 0,
              },
              {
                ddd: 0,
                ind: 3,
                ty: 2,
                nm: "black-ligths 4",
                refId: "image_4",
                sr: 1,
                ks: {
                  o: {
                    a: 0,
                    k: 100,
                    ix: 11,
                  },
                  r: {
                    a: 0,
                    k: 0,
                    ix: 10,
                  },
                  p: {
                    a: 0,
                    k: [1236.424, 738.09, 0],
                    ix: 2,
                    l: 2,
                  },
                  a: {
                    a: 0,
                    k: [17.569, 14.956, 0],
                    ix: 1,
                    l: 2,
                  },
                  s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6,
                    l: 2,
                  },
                },
                ao: 0,
                ip: 0,
                op: 750,
                st: 0,
                bm: 0,
              },
              {
                ddd: 0,
                ind: 4,
                ty: 4,
                nm: "Capa de formas 6",
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
                        t: 38,
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
                        t: 39,
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
                        t: 60,
                        s: [100],
                      },
                      {
                        t: 61,
                        s: [0],
                      },
                    ],
                    ix: 11,
                  },
                  r: {
                    a: 0,
                    k: 0,
                    ix: 10,
                  },
                  p: {
                    a: 0,
                    k: [876.5, 512.25, 0],
                    ix: 2,
                    l: 2,
                  },
                  a: {
                    a: 0,
                    k: [0, 0, 0],
                    ix: 1,
                    l: 2,
                  },
                  s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6,
                    l: 2,
                  },
                },
                ao: 0,
                shapes: [
                  {
                    ty: "gr",
                    it: [
                      {
                        ind: 0,
                        ty: "sh",
                        ix: 1,
                        ks: {
                          a: 0,
                          k: {
                            i: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            o: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            v: [
                              [377.438, 322],
                              [367.688, 327.75],
                              [367.812, 338.312],
                              [377.75, 333],
                            ],
                            c: true,
                          },
                          ix: 2,
                        },
                        nm: "Trazado 1",
                        mn: "ADBE Vector Shape - Group",
                        hd: false,
                      },
                      {
                        ty: "fl",
                        c: {
                          a: 0,
                          k: [
                            0.219607843137, 0.419607843137, 0.666666666667, 1,
                          ],
                          ix: 4,
                        },
                        o: {
                          a: 0,
                          k: 100,
                          ix: 5,
                        },
                        r: 1,
                        bm: 0,
                        nm: "Relleno 1",
                        mn: "ADBE Vector Graphic - Fill",
                        hd: false,
                      },
                      {
                        ty: "tr",
                        p: {
                          a: 0,
                          k: [0, 0],
                          ix: 2,
                        },
                        a: {
                          a: 0,
                          k: [0, 0],
                          ix: 1,
                        },
                        s: {
                          a: 0,
                          k: [100, 100],
                          ix: 3,
                        },
                        r: {
                          a: 0,
                          k: 0,
                          ix: 6,
                        },
                        o: {
                          a: 0,
                          k: 100,
                          ix: 7,
                        },
                        sk: {
                          a: 0,
                          k: 0,
                          ix: 4,
                        },
                        sa: {
                          a: 0,
                          k: 0,
                          ix: 5,
                        },
                        nm: "Transformar",
                      },
                    ],
                    nm: "Forma 1",
                    np: 3,
                    cix: 2,
                    bm: 0,
                    ix: 1,
                    mn: "ADBE Vector Group",
                    hd: false,
                  },
                ],
                ip: 0,
                op: 750,
                st: 0,
                bm: 0,
              },
              {
                ddd: 0,
                ind: 5,
                ty: 4,
                nm: "Capa de formas 5",
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
                        t: 10,
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
                        t: 11,
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
                        t: 31,
                        s: [100],
                      },
                      {
                        i: {
                          x: [0.833],
                          y: [1],
                        },
                        o: {
                          x: [0.167],
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
                        t: 62,
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
                        t: 63,
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
                        t: 86,
                        s: [100],
                      },
                      {
                        t: 87,
                        s: [0],
                      },
                    ],
                    ix: 11,
                  },
                  r: {
                    a: 0,
                    k: 0,
                    ix: 10,
                  },
                  p: {
                    a: 0,
                    k: [851, 526.5, 0],
                    ix: 2,
                    l: 2,
                  },
                  a: {
                    a: 0,
                    k: [0, 0, 0],
                    ix: 1,
                    l: 2,
                  },
                  s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6,
                    l: 2,
                  },
                },
                ao: 0,
                shapes: [
                  {
                    ty: "gr",
                    it: [
                      {
                        ind: 0,
                        ty: "sh",
                        ix: 1,
                        ks: {
                          a: 0,
                          k: {
                            i: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            o: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            v: [
                              [377.438, 322],
                              [367.688, 327.75],
                              [367.812, 338.312],
                              [377.75, 333],
                            ],
                            c: true,
                          },
                          ix: 2,
                        },
                        nm: "Trazado 1",
                        mn: "ADBE Vector Shape - Group",
                        hd: false,
                      },
                      {
                        ty: "fl",
                        c: {
                          a: 0,
                          k: [
                            0.219607843137, 0.419607843137, 0.666666666667, 1,
                          ],
                          ix: 4,
                        },
                        o: {
                          a: 0,
                          k: 100,
                          ix: 5,
                        },
                        r: 1,
                        bm: 0,
                        nm: "Relleno 1",
                        mn: "ADBE Vector Graphic - Fill",
                        hd: false,
                      },
                      {
                        ty: "tr",
                        p: {
                          a: 0,
                          k: [0, 0],
                          ix: 2,
                        },
                        a: {
                          a: 0,
                          k: [0, 0],
                          ix: 1,
                        },
                        s: {
                          a: 0,
                          k: [100, 100],
                          ix: 3,
                        },
                        r: {
                          a: 0,
                          k: 0,
                          ix: 6,
                        },
                        o: {
                          a: 0,
                          k: 100,
                          ix: 7,
                        },
                        sk: {
                          a: 0,
                          k: 0,
                          ix: 4,
                        },
                        sa: {
                          a: 0,
                          k: 0,
                          ix: 5,
                        },
                        nm: "Transformar",
                      },
                    ],
                    nm: "Forma 1",
                    np: 3,
                    cix: 2,
                    bm: 0,
                    ix: 1,
                    mn: "ADBE Vector Group",
                    hd: false,
                  },
                ],
                ip: 0,
                op: 750,
                st: 0,
                bm: 0,
              },
              {
                ddd: 0,
                ind: 6,
                ty: 2,
                nm: "black-ligths 3",
                refId: "image_4",
                sr: 1,
                ks: {
                  o: {
                    a: 0,
                    k: 100,
                    ix: 11,
                  },
                  r: {
                    a: 0,
                    k: 0,
                    ix: 10,
                  },
                  p: {
                    a: 0,
                    k: [1236.424, 849.59, 0],
                    ix: 2,
                    l: 2,
                  },
                  a: {
                    a: 0,
                    k: [17.569, 14.956, 0],
                    ix: 1,
                    l: 2,
                  },
                  s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6,
                    l: 2,
                  },
                },
                ao: 0,
                ip: 0,
                op: 750,
                st: 0,
                bm: 0,
              },
              {
                ddd: 0,
                ind: 7,
                ty: 4,
                nm: "Capa de formas 4",
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
                        t: 10,
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
                        t: 11,
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
                        t: 31,
                        s: [100],
                      },
                      {
                        i: {
                          x: [0.833],
                          y: [1],
                        },
                        o: {
                          x: [0.167],
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
                        t: 62,
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
                        t: 63,
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
                        t: 86,
                        s: [100],
                      },
                      {
                        t: 87,
                        s: [0],
                      },
                    ],
                    ix: 11,
                  },
                  r: {
                    a: 0,
                    k: 0,
                    ix: 10,
                  },
                  p: {
                    a: 0,
                    k: [876.5, 623.75, 0],
                    ix: 2,
                    l: 2,
                  },
                  a: {
                    a: 0,
                    k: [0, 0, 0],
                    ix: 1,
                    l: 2,
                  },
                  s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6,
                    l: 2,
                  },
                },
                ao: 0,
                shapes: [
                  {
                    ty: "gr",
                    it: [
                      {
                        ind: 0,
                        ty: "sh",
                        ix: 1,
                        ks: {
                          a: 0,
                          k: {
                            i: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            o: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            v: [
                              [377.438, 322],
                              [367.688, 327.75],
                              [367.812, 338.312],
                              [377.75, 333],
                            ],
                            c: true,
                          },
                          ix: 2,
                        },
                        nm: "Trazado 1",
                        mn: "ADBE Vector Shape - Group",
                        hd: false,
                      },
                      {
                        ty: "fl",
                        c: {
                          a: 0,
                          k: [
                            0.219607843137, 0.419607843137, 0.666666666667, 1,
                          ],
                          ix: 4,
                        },
                        o: {
                          a: 0,
                          k: 100,
                          ix: 5,
                        },
                        r: 1,
                        bm: 0,
                        nm: "Relleno 1",
                        mn: "ADBE Vector Graphic - Fill",
                        hd: false,
                      },
                      {
                        ty: "tr",
                        p: {
                          a: 0,
                          k: [0, 0],
                          ix: 2,
                        },
                        a: {
                          a: 0,
                          k: [0, 0],
                          ix: 1,
                        },
                        s: {
                          a: 0,
                          k: [100, 100],
                          ix: 3,
                        },
                        r: {
                          a: 0,
                          k: 0,
                          ix: 6,
                        },
                        o: {
                          a: 0,
                          k: 100,
                          ix: 7,
                        },
                        sk: {
                          a: 0,
                          k: 0,
                          ix: 4,
                        },
                        sa: {
                          a: 0,
                          k: 0,
                          ix: 5,
                        },
                        nm: "Transformar",
                      },
                    ],
                    nm: "Forma 1",
                    np: 3,
                    cix: 2,
                    bm: 0,
                    ix: 1,
                    mn: "ADBE Vector Group",
                    hd: false,
                  },
                ],
                ip: 0,
                op: 750,
                st: 0,
                bm: 0,
              },
              {
                ddd: 0,
                ind: 8,
                ty: 4,
                nm: "Capa de formas 3",
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
                        t: 35,
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
                        t: 36,
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
                        t: 57,
                        s: [100],
                      },
                      {
                        t: 58,
                        s: [0],
                      },
                    ],
                    ix: 11,
                  },
                  r: {
                    a: 0,
                    k: 0,
                    ix: 10,
                  },
                  p: {
                    a: 0,
                    k: [851, 638, 0],
                    ix: 2,
                    l: 2,
                  },
                  a: {
                    a: 0,
                    k: [0, 0, 0],
                    ix: 1,
                    l: 2,
                  },
                  s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6,
                    l: 2,
                  },
                },
                ao: 0,
                shapes: [
                  {
                    ty: "gr",
                    it: [
                      {
                        ind: 0,
                        ty: "sh",
                        ix: 1,
                        ks: {
                          a: 0,
                          k: {
                            i: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            o: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            v: [
                              [377.438, 322],
                              [367.688, 327.75],
                              [367.812, 338.312],
                              [377.75, 333],
                            ],
                            c: true,
                          },
                          ix: 2,
                        },
                        nm: "Trazado 1",
                        mn: "ADBE Vector Shape - Group",
                        hd: false,
                      },
                      {
                        ty: "fl",
                        c: {
                          a: 0,
                          k: [
                            0.219607843137, 0.419607843137, 0.666666666667, 1,
                          ],
                          ix: 4,
                        },
                        o: {
                          a: 0,
                          k: 100,
                          ix: 5,
                        },
                        r: 1,
                        bm: 0,
                        nm: "Relleno 1",
                        mn: "ADBE Vector Graphic - Fill",
                        hd: false,
                      },
                      {
                        ty: "tr",
                        p: {
                          a: 0,
                          k: [0, 0],
                          ix: 2,
                        },
                        a: {
                          a: 0,
                          k: [0, 0],
                          ix: 1,
                        },
                        s: {
                          a: 0,
                          k: [100, 100],
                          ix: 3,
                        },
                        r: {
                          a: 0,
                          k: 0,
                          ix: 6,
                        },
                        o: {
                          a: 0,
                          k: 100,
                          ix: 7,
                        },
                        sk: {
                          a: 0,
                          k: 0,
                          ix: 4,
                        },
                        sa: {
                          a: 0,
                          k: 0,
                          ix: 5,
                        },
                        nm: "Transformar",
                      },
                    ],
                    nm: "Forma 1",
                    np: 3,
                    cix: 2,
                    bm: 0,
                    ix: 1,
                    mn: "ADBE Vector Group",
                    hd: false,
                  },
                ],
                ip: 0,
                op: 750,
                st: 0,
                bm: 0,
              },
              {
                ddd: 0,
                ind: 9,
                ty: 2,
                nm: "black-ligths 2",
                refId: "image_4",
                sr: 1,
                ks: {
                  o: {
                    a: 0,
                    k: 100,
                    ix: 11,
                  },
                  r: {
                    a: 0,
                    k: 0,
                    ix: 10,
                  },
                  p: {
                    a: 0,
                    k: [1236.424, 961.09, 0],
                    ix: 2,
                    l: 2,
                  },
                  a: {
                    a: 0,
                    k: [17.569, 14.956, 0],
                    ix: 1,
                    l: 2,
                  },
                  s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6,
                    l: 2,
                  },
                },
                ao: 0,
                ip: 0,
                op: 750,
                st: 0,
                bm: 0,
              },
              {
                ddd: 0,
                ind: 10,
                ty: 4,
                nm: "Capa de formas 2",
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
                        t: 38,
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
                        t: 39,
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
                        t: 60,
                        s: [100],
                      },
                      {
                        t: 61,
                        s: [0],
                      },
                    ],
                    ix: 11,
                  },
                  r: {
                    a: 0,
                    k: 0,
                    ix: 10,
                  },
                  p: {
                    a: 0,
                    k: [876.5, 735.25, 0],
                    ix: 2,
                    l: 2,
                  },
                  a: {
                    a: 0,
                    k: [0, 0, 0],
                    ix: 1,
                    l: 2,
                  },
                  s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6,
                    l: 2,
                  },
                },
                ao: 0,
                shapes: [
                  {
                    ty: "gr",
                    it: [
                      {
                        ind: 0,
                        ty: "sh",
                        ix: 1,
                        ks: {
                          a: 0,
                          k: {
                            i: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            o: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            v: [
                              [377.438, 322],
                              [367.688, 327.75],
                              [367.812, 338.312],
                              [377.75, 333],
                            ],
                            c: true,
                          },
                          ix: 2,
                        },
                        nm: "Trazado 1",
                        mn: "ADBE Vector Shape - Group",
                        hd: false,
                      },
                      {
                        ty: "fl",
                        c: {
                          a: 0,
                          k: [
                            0.219607843137, 0.419607843137, 0.666666666667, 1,
                          ],
                          ix: 4,
                        },
                        o: {
                          a: 0,
                          k: 100,
                          ix: 5,
                        },
                        r: 1,
                        bm: 0,
                        nm: "Relleno 1",
                        mn: "ADBE Vector Graphic - Fill",
                        hd: false,
                      },
                      {
                        ty: "tr",
                        p: {
                          a: 0,
                          k: [0, 0],
                          ix: 2,
                        },
                        a: {
                          a: 0,
                          k: [0, 0],
                          ix: 1,
                        },
                        s: {
                          a: 0,
                          k: [100, 100],
                          ix: 3,
                        },
                        r: {
                          a: 0,
                          k: 0,
                          ix: 6,
                        },
                        o: {
                          a: 0,
                          k: 100,
                          ix: 7,
                        },
                        sk: {
                          a: 0,
                          k: 0,
                          ix: 4,
                        },
                        sa: {
                          a: 0,
                          k: 0,
                          ix: 5,
                        },
                        nm: "Transformar",
                      },
                    ],
                    nm: "Forma 1",
                    np: 3,
                    cix: 2,
                    bm: 0,
                    ix: 1,
                    mn: "ADBE Vector Group",
                    hd: false,
                  },
                ],
                ip: 0,
                op: 750,
                st: 0,
                bm: 0,
              },
              {
                ddd: 0,
                ind: 11,
                ty: 4,
                nm: "Capa de formas 1",
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
                        t: 10,
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
                        t: 11,
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
                        t: 31,
                        s: [100],
                      },
                      {
                        i: {
                          x: [0.833],
                          y: [1],
                        },
                        o: {
                          x: [0.167],
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
                        t: 62,
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
                        t: 63,
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
                        t: 86,
                        s: [100],
                      },
                      {
                        t: 87,
                        s: [0],
                      },
                    ],
                    ix: 11,
                  },
                  r: {
                    a: 0,
                    k: 0,
                    ix: 10,
                  },
                  p: {
                    a: 0,
                    k: [851, 749.5, 0],
                    ix: 2,
                    l: 2,
                  },
                  a: {
                    a: 0,
                    k: [0, 0, 0],
                    ix: 1,
                    l: 2,
                  },
                  s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6,
                    l: 2,
                  },
                },
                ao: 0,
                shapes: [
                  {
                    ty: "gr",
                    it: [
                      {
                        ind: 0,
                        ty: "sh",
                        ix: 1,
                        ks: {
                          a: 0,
                          k: {
                            i: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            o: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            v: [
                              [377.438, 322],
                              [367.688, 327.75],
                              [367.812, 338.312],
                              [377.75, 333],
                            ],
                            c: true,
                          },
                          ix: 2,
                        },
                        nm: "Trazado 1",
                        mn: "ADBE Vector Shape - Group",
                        hd: false,
                      },
                      {
                        ty: "fl",
                        c: {
                          a: 0,
                          k: [
                            0.219607843137, 0.419607843137, 0.666666666667, 1,
                          ],
                          ix: 4,
                        },
                        o: {
                          a: 0,
                          k: 100,
                          ix: 5,
                        },
                        r: 1,
                        bm: 0,
                        nm: "Relleno 1",
                        mn: "ADBE Vector Graphic - Fill",
                        hd: false,
                      },
                      {
                        ty: "tr",
                        p: {
                          a: 0,
                          k: [0, 0],
                          ix: 2,
                        },
                        a: {
                          a: 0,
                          k: [0, 0],
                          ix: 1,
                        },
                        s: {
                          a: 0,
                          k: [100, 100],
                          ix: 3,
                        },
                        r: {
                          a: 0,
                          k: 0,
                          ix: 6,
                        },
                        o: {
                          a: 0,
                          k: 100,
                          ix: 7,
                        },
                        sk: {
                          a: 0,
                          k: 0,
                          ix: 4,
                        },
                        sa: {
                          a: 0,
                          k: 0,
                          ix: 5,
                        },
                        nm: "Transformar",
                      },
                    ],
                    nm: "Forma 1",
                    np: 3,
                    cix: 2,
                    bm: 0,
                    ix: 1,
                    mn: "ADBE Vector Group",
                    hd: false,
                  },
                ],
                ip: 0,
                op: 750,
                st: 0,
                bm: 0,
              },
              {
                ddd: 0,
                ind: 12,
                ty: 2,
                nm: "black-ligths",
                refId: "image_4",
                sr: 1,
                ks: {
                  o: {
                    a: 0,
                    k: 100,
                    ix: 11,
                  },
                  r: {
                    a: 0,
                    k: 0,
                    ix: 10,
                  },
                  p: {
                    a: 0,
                    k: [1236.424, 1072.59, 0],
                    ix: 2,
                    l: 2,
                  },
                  a: {
                    a: 0,
                    k: [17.569, 14.956, 0],
                    ix: 1,
                    l: 2,
                  },
                  s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6,
                    l: 2,
                  },
                },
                ao: 0,
                ip: 0,
                op: 750,
                st: 0,
                bm: 0,
              },
            ],
          },
          {
            id: "comp_2",
            nm: "col1",
            fr: 25,
            layers: [
              {
                ddd: 0,
                ind: 1,
                ty: 0,
                nm: "var2",
                refId: "comp_3",
                sr: 1,
                ks: {
                  o: {
                    a: 0,
                    k: 100,
                    ix: 11,
                  },
                  r: {
                    a: 0,
                    k: 0,
                    ix: 10,
                  },
                  p: {
                    a: 0,
                    k: [851, 417.5, 0],
                    ix: 2,
                    l: 2,
                  },
                  a: {
                    a: 0,
                    k: [851, 749.5, 0],
                    ix: 1,
                    l: 2,
                  },
                  s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6,
                    l: 2,
                  },
                },
                ao: 0,
                w: 1702,
                h: 1499,
                ip: 0,
                op: 750,
                st: 0,
                bm: 0,
              },
              {
                ddd: 0,
                ind: 2,
                ty: 0,
                nm: "var2",
                refId: "comp_3",
                sr: 1,
                ks: {
                  o: {
                    a: 0,
                    k: 100,
                    ix: 11,
                  },
                  r: {
                    a: 0,
                    k: 0,
                    ix: 10,
                  },
                  p: {
                    a: 0,
                    k: [851, 483.5, 0],
                    ix: 2,
                    l: 2,
                  },
                  a: {
                    a: 0,
                    k: [851, 749.5, 0],
                    ix: 1,
                    l: 2,
                  },
                  s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6,
                    l: 2,
                  },
                },
                ao: 0,
                w: 1702,
                h: 1499,
                ip: 0,
                op: 750,
                st: 0,
                bm: 0,
              },
              {
                ddd: 0,
                ind: 3,
                ty: 0,
                nm: "var2",
                refId: "comp_3",
                sr: 1,
                ks: {
                  o: {
                    a: 0,
                    k: 100,
                    ix: 11,
                  },
                  r: {
                    a: 0,
                    k: 0,
                    ix: 10,
                  },
                  p: {
                    a: 0,
                    k: [851, 615.5, 0],
                    ix: 2,
                    l: 2,
                  },
                  a: {
                    a: 0,
                    k: [851, 749.5, 0],
                    ix: 1,
                    l: 2,
                  },
                  s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6,
                    l: 2,
                  },
                },
                ao: 0,
                w: 1702,
                h: 1499,
                ip: 0,
                op: 750,
                st: 0,
                bm: 0,
              },
              {
                ddd: 0,
                ind: 4,
                ty: 0,
                nm: "var2",
                refId: "comp_3",
                sr: 1,
                ks: {
                  o: {
                    a: 0,
                    k: 100,
                    ix: 11,
                  },
                  r: {
                    a: 0,
                    k: 0,
                    ix: 10,
                  },
                  p: {
                    a: 0,
                    k: [851, 749.5, 0],
                    ix: 2,
                    l: 2,
                  },
                  a: {
                    a: 0,
                    k: [851, 749.5, 0],
                    ix: 1,
                    l: 2,
                  },
                  s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6,
                    l: 2,
                  },
                },
                ao: 0,
                w: 1702,
                h: 1499,
                ip: 0,
                op: 750,
                st: 0,
                bm: 0,
              },
              {
                ddd: 0,
                ind: 5,
                ty: 0,
                nm: "var1",
                refId: "comp_4",
                sr: 1,
                ks: {
                  o: {
                    a: 0,
                    k: 100,
                    ix: 11,
                  },
                  r: {
                    a: 0,
                    k: 0,
                    ix: 10,
                  },
                  p: {
                    a: 0,
                    k: [851, 483.5, 0],
                    ix: 2,
                    l: 2,
                  },
                  a: {
                    a: 0,
                    k: [851, 749.5, 0],
                    ix: 1,
                    l: 2,
                  },
                  s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6,
                    l: 2,
                  },
                },
                ao: 0,
                w: 1702,
                h: 1499,
                ip: 0,
                op: 750,
                st: 0,
                bm: 0,
              },
              {
                ddd: 0,
                ind: 6,
                ty: 0,
                nm: "var1",
                refId: "comp_4",
                sr: 1,
                ks: {
                  o: {
                    a: 0,
                    k: 100,
                    ix: 11,
                  },
                  r: {
                    a: 0,
                    k: 0,
                    ix: 10,
                  },
                  p: {
                    a: 0,
                    k: [851, 615.5, 0],
                    ix: 2,
                    l: 2,
                  },
                  a: {
                    a: 0,
                    k: [851, 749.5, 0],
                    ix: 1,
                    l: 2,
                  },
                  s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6,
                    l: 2,
                  },
                },
                ao: 0,
                w: 1702,
                h: 1499,
                ip: 0,
                op: 750,
                st: 0,
                bm: 0,
              },
              {
                ddd: 0,
                ind: 7,
                ty: 0,
                nm: "var1",
                refId: "comp_4",
                sr: 1,
                ks: {
                  o: {
                    a: 0,
                    k: 100,
                    ix: 11,
                  },
                  r: {
                    a: 0,
                    k: 0,
                    ix: 10,
                  },
                  p: {
                    a: 0,
                    k: [851, 749.5, 0],
                    ix: 2,
                    l: 2,
                  },
                  a: {
                    a: 0,
                    k: [851, 749.5, 0],
                    ix: 1,
                    l: 2,
                  },
                  s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6,
                    l: 2,
                  },
                },
                ao: 0,
                w: 1702,
                h: 1499,
                ip: 0,
                op: 750,
                st: 0,
                bm: 0,
              },
            ],
          },
          {
            id: "comp_3",
            nm: "var2",
            fr: 25,
            layers: [
              {
                ddd: 0,
                ind: 1,
                ty: 4,
                nm: "circle8",
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
                        t: 56,
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
                        t: 59,
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
                        t: 65,
                        s: [100],
                      },
                      {
                        t: 67,
                        s: [0],
                      },
                    ],
                    ix: 11,
                  },
                  r: {
                    a: 0,
                    k: -22,
                    ix: 10,
                  },
                  p: {
                    a: 0,
                    k: [1032.625, 1016, 0],
                    ix: 2,
                    l: 2,
                  },
                  a: {
                    a: 0,
                    k: [134.25, 303.25, 0],
                    ix: 1,
                    l: 2,
                  },
                  s: {
                    a: 0,
                    k: [82, 82, 100],
                    ix: 6,
                    l: 2,
                  },
                },
                ao: 0,
                shapes: [
                  {
                    ty: "gr",
                    it: [
                      {
                        d: 1,
                        ty: "el",
                        s: {
                          a: 0,
                          k: [10, 14.25],
                          ix: 2,
                        },
                        p: {
                          a: 0,
                          k: [0, 0],
                          ix: 3,
                        },
                        nm: "Trazado elíptico 1",
                        mn: "ADBE Vector Shape - Ellipse",
                        hd: false,
                      },
                      {
                        ty: "fl",
                        c: {
                          a: 0,
                          k: [0.086274509804, 0.16862745098, 0.243137254902, 1],
                          ix: 4,
                        },
                        o: {
                          a: 0,
                          k: 100,
                          ix: 5,
                        },
                        r: 1,
                        bm: 0,
                        nm: "Relleno 1",
                        mn: "ADBE Vector Graphic - Fill",
                        hd: false,
                      },
                      {
                        ty: "tr",
                        p: {
                          a: 0,
                          k: [134.25, 303.125],
                          ix: 2,
                        },
                        a: {
                          a: 0,
                          k: [0, 0],
                          ix: 1,
                        },
                        s: {
                          a: 0,
                          k: [100, 100],
                          ix: 3,
                        },
                        r: {
                          a: 0,
                          k: 0,
                          ix: 6,
                        },
                        o: {
                          a: 0,
                          k: 100,
                          ix: 7,
                        },
                        sk: {
                          a: 0,
                          k: 0,
                          ix: 4,
                        },
                        sa: {
                          a: 0,
                          k: 0,
                          ix: 5,
                        },
                        nm: "Transformar",
                      },
                    ],
                    nm: "Elipse 1",
                    np: 3,
                    cix: 2,
                    bm: 0,
                    ix: 1,
                    mn: "ADBE Vector Group",
                    hd: false,
                  },
                ],
                ip: 0,
                op: 750,
                st: 0,
                bm: 0,
              },
              {
                ddd: 0,
                ind: 2,
                ty: 4,
                nm: "circle7",
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
                        t: 12,
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
                        t: 18,
                        s: [100],
                      },
                      {
                        t: 20,
                        s: [0],
                      },
                    ],
                    ix: 11,
                  },
                  r: {
                    a: 0,
                    k: -22,
                    ix: 10,
                  },
                  p: {
                    a: 0,
                    k: [1017.125, 1006.75, 0],
                    ix: 2,
                    l: 2,
                  },
                  a: {
                    a: 0,
                    k: [134.25, 303.25, 0],
                    ix: 1,
                    l: 2,
                  },
                  s: {
                    a: 0,
                    k: [82, 82, 100],
                    ix: 6,
                    l: 2,
                  },
                },
                ao: 0,
                shapes: [
                  {
                    ty: "gr",
                    it: [
                      {
                        d: 1,
                        ty: "el",
                        s: {
                          a: 0,
                          k: [10, 14.25],
                          ix: 2,
                        },
                        p: {
                          a: 0,
                          k: [0, 0],
                          ix: 3,
                        },
                        nm: "Trazado elíptico 1",
                        mn: "ADBE Vector Shape - Ellipse",
                        hd: false,
                      },
                      {
                        ty: "fl",
                        c: {
                          a: 0,
                          k: [0.086274509804, 0.16862745098, 0.243137254902, 1],
                          ix: 4,
                        },
                        o: {
                          a: 0,
                          k: 100,
                          ix: 5,
                        },
                        r: 1,
                        bm: 0,
                        nm: "Relleno 1",
                        mn: "ADBE Vector Graphic - Fill",
                        hd: false,
                      },
                      {
                        ty: "tr",
                        p: {
                          a: 0,
                          k: [134.25, 303.125],
                          ix: 2,
                        },
                        a: {
                          a: 0,
                          k: [0, 0],
                          ix: 1,
                        },
                        s: {
                          a: 0,
                          k: [100, 100],
                          ix: 3,
                        },
                        r: {
                          a: 0,
                          k: 0,
                          ix: 6,
                        },
                        o: {
                          a: 0,
                          k: 100,
                          ix: 7,
                        },
                        sk: {
                          a: 0,
                          k: 0,
                          ix: 4,
                        },
                        sa: {
                          a: 0,
                          k: 0,
                          ix: 5,
                        },
                        nm: "Transformar",
                      },
                    ],
                    nm: "Elipse 1",
                    np: 3,
                    cix: 2,
                    bm: 0,
                    ix: 1,
                    mn: "ADBE Vector Group",
                    hd: false,
                  },
                ],
                ip: 0,
                op: 750,
                st: 0,
                bm: 0,
              },
              {
                ddd: 0,
                ind: 3,
                ty: 4,
                nm: "circle6",
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
                        t: 80,
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
                        t: 83,
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
                        t: 89,
                        s: [100],
                      },
                      {
                        t: 91,
                        s: [0],
                      },
                    ],
                    ix: 11,
                  },
                  r: {
                    a: 0,
                    k: -22,
                    ix: 10,
                  },
                  p: {
                    a: 0,
                    k: [1001.75, 997.375, 0],
                    ix: 2,
                    l: 2,
                  },
                  a: {
                    a: 0,
                    k: [134.25, 303.25, 0],
                    ix: 1,
                    l: 2,
                  },
                  s: {
                    a: 0,
                    k: [82, 82, 100],
                    ix: 6,
                    l: 2,
                  },
                },
                ao: 0,
                shapes: [
                  {
                    ty: "gr",
                    it: [
                      {
                        d: 1,
                        ty: "el",
                        s: {
                          a: 0,
                          k: [10, 14.25],
                          ix: 2,
                        },
                        p: {
                          a: 0,
                          k: [0, 0],
                          ix: 3,
                        },
                        nm: "Trazado elíptico 1",
                        mn: "ADBE Vector Shape - Ellipse",
                        hd: false,
                      },
                      {
                        ty: "fl",
                        c: {
                          a: 0,
                          k: [0.086274509804, 0.16862745098, 0.243137254902, 1],
                          ix: 4,
                        },
                        o: {
                          a: 0,
                          k: 100,
                          ix: 5,
                        },
                        r: 1,
                        bm: 0,
                        nm: "Relleno 1",
                        mn: "ADBE Vector Graphic - Fill",
                        hd: false,
                      },
                      {
                        ty: "tr",
                        p: {
                          a: 0,
                          k: [134.25, 303.125],
                          ix: 2,
                        },
                        a: {
                          a: 0,
                          k: [0, 0],
                          ix: 1,
                        },
                        s: {
                          a: 0,
                          k: [100, 100],
                          ix: 3,
                        },
                        r: {
                          a: 0,
                          k: 0,
                          ix: 6,
                        },
                        o: {
                          a: 0,
                          k: 100,
                          ix: 7,
                        },
                        sk: {
                          a: 0,
                          k: 0,
                          ix: 4,
                        },
                        sa: {
                          a: 0,
                          k: 0,
                          ix: 5,
                        },
                        nm: "Transformar",
                      },
                    ],
                    nm: "Elipse 1",
                    np: 3,
                    cix: 2,
                    bm: 0,
                    ix: 1,
                    mn: "ADBE Vector Group",
                    hd: false,
                  },
                ],
                ip: 0,
                op: 750,
                st: 0,
                bm: 0,
              },
              {
                ddd: 0,
                ind: 4,
                ty: 4,
                nm: "circle5",
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
                        t: 33,
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
                        t: 36,
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
                        t: 42,
                        s: [100],
                      },
                      {
                        t: 44,
                        s: [0],
                      },
                    ],
                    ix: 11,
                  },
                  r: {
                    a: 0,
                    k: -22,
                    ix: 10,
                  },
                  p: {
                    a: 0,
                    k: [985.5, 988.875, 0],
                    ix: 2,
                    l: 2,
                  },
                  a: {
                    a: 0,
                    k: [134.25, 303.25, 0],
                    ix: 1,
                    l: 2,
                  },
                  s: {
                    a: 0,
                    k: [82, 82, 100],
                    ix: 6,
                    l: 2,
                  },
                },
                ao: 0,
                shapes: [
                  {
                    ty: "gr",
                    it: [
                      {
                        d: 1,
                        ty: "el",
                        s: {
                          a: 0,
                          k: [10, 14.25],
                          ix: 2,
                        },
                        p: {
                          a: 0,
                          k: [0, 0],
                          ix: 3,
                        },
                        nm: "Trazado elíptico 1",
                        mn: "ADBE Vector Shape - Ellipse",
                        hd: false,
                      },
                      {
                        ty: "fl",
                        c: {
                          a: 0,
                          k: [0.086274509804, 0.16862745098, 0.243137254902, 1],
                          ix: 4,
                        },
                        o: {
                          a: 0,
                          k: 100,
                          ix: 5,
                        },
                        r: 1,
                        bm: 0,
                        nm: "Relleno 1",
                        mn: "ADBE Vector Graphic - Fill",
                        hd: false,
                      },
                      {
                        ty: "tr",
                        p: {
                          a: 0,
                          k: [134.25, 303.125],
                          ix: 2,
                        },
                        a: {
                          a: 0,
                          k: [0, 0],
                          ix: 1,
                        },
                        s: {
                          a: 0,
                          k: [100, 100],
                          ix: 3,
                        },
                        r: {
                          a: 0,
                          k: 0,
                          ix: 6,
                        },
                        o: {
                          a: 0,
                          k: 100,
                          ix: 7,
                        },
                        sk: {
                          a: 0,
                          k: 0,
                          ix: 4,
                        },
                        sa: {
                          a: 0,
                          k: 0,
                          ix: 5,
                        },
                        nm: "Transformar",
                      },
                    ],
                    nm: "Elipse 1",
                    np: 3,
                    cix: 2,
                    bm: 0,
                    ix: 1,
                    mn: "ADBE Vector Group",
                    hd: false,
                  },
                ],
                ip: 0,
                op: 750,
                st: 0,
                bm: 0,
              },
              {
                ddd: 0,
                ind: 5,
                ty: 4,
                nm: "square 2",
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
                        t: 14,
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
                        t: 18,
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
                        t: 23,
                        s: [100],
                      },
                      {
                        i: {
                          x: [0.833],
                          y: [1],
                        },
                        o: {
                          x: [0.167],
                          y: [0],
                        },
                        t: 27,
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
                        t: 72,
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
                        t: 76,
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
                        t: 81,
                        s: [100],
                      },
                      {
                        t: 85,
                        s: [0],
                      },
                    ],
                    ix: 11,
                  },
                  r: {
                    a: 0,
                    k: 0,
                    ix: 10,
                  },
                  p: {
                    a: 0,
                    k: [851, 685.5, 0],
                    ix: 2,
                    l: 2,
                  },
                  a: {
                    a: 0,
                    k: [0, 0, 0],
                    ix: 1,
                    l: 2,
                  },
                  s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6,
                    l: 2,
                  },
                },
                ao: 0,
                shapes: [
                  {
                    ty: "gr",
                    it: [
                      {
                        ind: 0,
                        ty: "sh",
                        ix: 1,
                        ks: {
                          a: 0,
                          k: {
                            i: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            o: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            v: [
                              [242.188, 357.25],
                              [242.062, 374.125],
                              [257.25, 382.5],
                              [257.75, 365.5],
                            ],
                            c: true,
                          },
                          ix: 2,
                        },
                        nm: "Trazado 1",
                        mn: "ADBE Vector Shape - Group",
                        hd: false,
                      },
                      {
                        ty: "fl",
                        c: {
                          a: 0,
                          k: [1, 0.596078431373, 0.176470588235, 1],
                          ix: 4,
                        },
                        o: {
                          a: 0,
                          k: 100,
                          ix: 5,
                        },
                        r: 1,
                        bm: 0,
                        nm: "Relleno 1",
                        mn: "ADBE Vector Graphic - Fill",
                        hd: false,
                      },
                      {
                        ty: "tr",
                        p: {
                          a: 0,
                          k: [0, 0],
                          ix: 2,
                        },
                        a: {
                          a: 0,
                          k: [0, 0],
                          ix: 1,
                        },
                        s: {
                          a: 0,
                          k: [100, 100],
                          ix: 3,
                        },
                        r: {
                          a: 0,
                          k: 0,
                          ix: 6,
                        },
                        o: {
                          a: 0,
                          k: 100,
                          ix: 7,
                        },
                        sk: {
                          a: 0,
                          k: 0,
                          ix: 4,
                        },
                        sa: {
                          a: 0,
                          k: 0,
                          ix: 5,
                        },
                        nm: "Transformar",
                      },
                    ],
                    nm: "Forma 1",
                    np: 3,
                    cix: 2,
                    bm: 0,
                    ix: 1,
                    mn: "ADBE Vector Group",
                    hd: false,
                  },
                ],
                ip: 0,
                op: 750,
                st: 0,
                bm: 0,
              },
              {
                ddd: 0,
                ind: 6,
                ty: 2,
                nm: "front-ligths 2",
                refId: "image_5",
                sr: 1,
                ks: {
                  o: {
                    a: 0,
                    k: 100,
                    ix: 11,
                  },
                  r: {
                    a: 0,
                    k: 0,
                    ix: 10,
                  },
                  p: {
                    a: 0,
                    k: [1022.484, 1012.479, 0],
                    ix: 2,
                    l: 2,
                  },
                  a: {
                    a: 0,
                    k: [86.288, 55.53, 0],
                    ix: 1,
                    l: 2,
                  },
                  s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6,
                    l: 2,
                  },
                },
                ao: 0,
                ip: 0,
                op: 750,
                st: 0,
                bm: 0,
              },
            ],
          },
          {
            id: "comp_4",
            nm: "var1",
            fr: 25,
            layers: [
              {
                ddd: 0,
                ind: 1,
                ty: 4,
                nm: "circle4",
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
                        t: 79,
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
                        t: 82,
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
                        t: 88,
                        s: [100],
                      },
                      {
                        t: 90,
                        s: [0],
                      },
                    ],
                    ix: 11,
                  },
                  r: {
                    a: 0,
                    k: -22,
                    ix: 10,
                  },
                  p: {
                    a: 0,
                    k: [1032.625, 1080, 0],
                    ix: 2,
                    l: 2,
                  },
                  a: {
                    a: 0,
                    k: [134.25, 303.25, 0],
                    ix: 1,
                    l: 2,
                  },
                  s: {
                    a: 0,
                    k: [82, 82, 100],
                    ix: 6,
                    l: 2,
                  },
                },
                ao: 0,
                shapes: [
                  {
                    ty: "gr",
                    it: [
                      {
                        d: 1,
                        ty: "el",
                        s: {
                          a: 0,
                          k: [10, 14.25],
                          ix: 2,
                        },
                        p: {
                          a: 0,
                          k: [0, 0],
                          ix: 3,
                        },
                        nm: "Trazado elíptico 1",
                        mn: "ADBE Vector Shape - Ellipse",
                        hd: false,
                      },
                      {
                        ty: "fl",
                        c: {
                          a: 0,
                          k: [0.086274509804, 0.16862745098, 0.243137254902, 1],
                          ix: 4,
                        },
                        o: {
                          a: 0,
                          k: 100,
                          ix: 5,
                        },
                        r: 1,
                        bm: 0,
                        nm: "Relleno 1",
                        mn: "ADBE Vector Graphic - Fill",
                        hd: false,
                      },
                      {
                        ty: "tr",
                        p: {
                          a: 0,
                          k: [134.25, 303.125],
                          ix: 2,
                        },
                        a: {
                          a: 0,
                          k: [0, 0],
                          ix: 1,
                        },
                        s: {
                          a: 0,
                          k: [100, 100],
                          ix: 3,
                        },
                        r: {
                          a: 0,
                          k: 0,
                          ix: 6,
                        },
                        o: {
                          a: 0,
                          k: 100,
                          ix: 7,
                        },
                        sk: {
                          a: 0,
                          k: 0,
                          ix: 4,
                        },
                        sa: {
                          a: 0,
                          k: 0,
                          ix: 5,
                        },
                        nm: "Transformar",
                      },
                    ],
                    nm: "Elipse 1",
                    np: 3,
                    cix: 2,
                    bm: 0,
                    ix: 1,
                    mn: "ADBE Vector Group",
                    hd: false,
                  },
                ],
                ip: 0,
                op: 750,
                st: 0,
                bm: 0,
              },
              {
                ddd: 0,
                ind: 2,
                ty: 4,
                nm: "circle3",
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
                        t: 55,
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
                        t: 58,
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
                        t: 64,
                        s: [100],
                      },
                      {
                        t: 66,
                        s: [0],
                      },
                    ],
                    ix: 11,
                  },
                  r: {
                    a: 0,
                    k: -22,
                    ix: 10,
                  },
                  p: {
                    a: 0,
                    k: [1017.125, 1070.75, 0],
                    ix: 2,
                    l: 2,
                  },
                  a: {
                    a: 0,
                    k: [134.25, 303.25, 0],
                    ix: 1,
                    l: 2,
                  },
                  s: {
                    a: 0,
                    k: [82, 82, 100],
                    ix: 6,
                    l: 2,
                  },
                },
                ao: 0,
                shapes: [
                  {
                    ty: "gr",
                    it: [
                      {
                        d: 1,
                        ty: "el",
                        s: {
                          a: 0,
                          k: [10, 14.25],
                          ix: 2,
                        },
                        p: {
                          a: 0,
                          k: [0, 0],
                          ix: 3,
                        },
                        nm: "Trazado elíptico 1",
                        mn: "ADBE Vector Shape - Ellipse",
                        hd: false,
                      },
                      {
                        ty: "fl",
                        c: {
                          a: 0,
                          k: [0.086274509804, 0.16862745098, 0.243137254902, 1],
                          ix: 4,
                        },
                        o: {
                          a: 0,
                          k: 100,
                          ix: 5,
                        },
                        r: 1,
                        bm: 0,
                        nm: "Relleno 1",
                        mn: "ADBE Vector Graphic - Fill",
                        hd: false,
                      },
                      {
                        ty: "tr",
                        p: {
                          a: 0,
                          k: [134.25, 303.125],
                          ix: 2,
                        },
                        a: {
                          a: 0,
                          k: [0, 0],
                          ix: 1,
                        },
                        s: {
                          a: 0,
                          k: [100, 100],
                          ix: 3,
                        },
                        r: {
                          a: 0,
                          k: 0,
                          ix: 6,
                        },
                        o: {
                          a: 0,
                          k: 100,
                          ix: 7,
                        },
                        sk: {
                          a: 0,
                          k: 0,
                          ix: 4,
                        },
                        sa: {
                          a: 0,
                          k: 0,
                          ix: 5,
                        },
                        nm: "Transformar",
                      },
                    ],
                    nm: "Elipse 1",
                    np: 3,
                    cix: 2,
                    bm: 0,
                    ix: 1,
                    mn: "ADBE Vector Group",
                    hd: false,
                  },
                ],
                ip: 0,
                op: 750,
                st: 0,
                bm: 0,
              },
              {
                ddd: 0,
                ind: 3,
                ty: 4,
                nm: "circle2",
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
                        t: 33,
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
                        t: 36,
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
                        t: 42,
                        s: [100],
                      },
                      {
                        t: 44,
                        s: [0],
                      },
                    ],
                    ix: 11,
                  },
                  r: {
                    a: 0,
                    k: -22,
                    ix: 10,
                  },
                  p: {
                    a: 0,
                    k: [1001.75, 1061.375, 0],
                    ix: 2,
                    l: 2,
                  },
                  a: {
                    a: 0,
                    k: [134.25, 303.25, 0],
                    ix: 1,
                    l: 2,
                  },
                  s: {
                    a: 0,
                    k: [82, 82, 100],
                    ix: 6,
                    l: 2,
                  },
                },
                ao: 0,
                shapes: [
                  {
                    ty: "gr",
                    it: [
                      {
                        d: 1,
                        ty: "el",
                        s: {
                          a: 0,
                          k: [10, 14.25],
                          ix: 2,
                        },
                        p: {
                          a: 0,
                          k: [0, 0],
                          ix: 3,
                        },
                        nm: "Trazado elíptico 1",
                        mn: "ADBE Vector Shape - Ellipse",
                        hd: false,
                      },
                      {
                        ty: "fl",
                        c: {
                          a: 0,
                          k: [0.086274509804, 0.16862745098, 0.243137254902, 1],
                          ix: 4,
                        },
                        o: {
                          a: 0,
                          k: 100,
                          ix: 5,
                        },
                        r: 1,
                        bm: 0,
                        nm: "Relleno 1",
                        mn: "ADBE Vector Graphic - Fill",
                        hd: false,
                      },
                      {
                        ty: "tr",
                        p: {
                          a: 0,
                          k: [134.25, 303.125],
                          ix: 2,
                        },
                        a: {
                          a: 0,
                          k: [0, 0],
                          ix: 1,
                        },
                        s: {
                          a: 0,
                          k: [100, 100],
                          ix: 3,
                        },
                        r: {
                          a: 0,
                          k: 0,
                          ix: 6,
                        },
                        o: {
                          a: 0,
                          k: 100,
                          ix: 7,
                        },
                        sk: {
                          a: 0,
                          k: 0,
                          ix: 4,
                        },
                        sa: {
                          a: 0,
                          k: 0,
                          ix: 5,
                        },
                        nm: "Transformar",
                      },
                    ],
                    nm: "Elipse 1",
                    np: 3,
                    cix: 2,
                    bm: 0,
                    ix: 1,
                    mn: "ADBE Vector Group",
                    hd: false,
                  },
                ],
                ip: 0,
                op: 750,
                st: 0,
                bm: 0,
              },
              {
                ddd: 0,
                ind: 4,
                ty: 4,
                nm: "circle1",
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
                        t: 7,
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
                        t: 10,
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
                        t: 16,
                        s: [100],
                      },
                      {
                        t: 18,
                        s: [0],
                      },
                    ],
                    ix: 11,
                  },
                  r: {
                    a: 0,
                    k: -22,
                    ix: 10,
                  },
                  p: {
                    a: 0,
                    k: [985.5, 1052.875, 0],
                    ix: 2,
                    l: 2,
                  },
                  a: {
                    a: 0,
                    k: [134.25, 303.25, 0],
                    ix: 1,
                    l: 2,
                  },
                  s: {
                    a: 0,
                    k: [82, 82, 100],
                    ix: 6,
                    l: 2,
                  },
                },
                ao: 0,
                shapes: [
                  {
                    ty: "gr",
                    it: [
                      {
                        d: 1,
                        ty: "el",
                        s: {
                          a: 0,
                          k: [10, 14.25],
                          ix: 2,
                        },
                        p: {
                          a: 0,
                          k: [0, 0],
                          ix: 3,
                        },
                        nm: "Trazado elíptico 1",
                        mn: "ADBE Vector Shape - Ellipse",
                        hd: false,
                      },
                      {
                        ty: "fl",
                        c: {
                          a: 0,
                          k: [0.086274509804, 0.16862745098, 0.243137254902, 1],
                          ix: 4,
                        },
                        o: {
                          a: 0,
                          k: 100,
                          ix: 5,
                        },
                        r: 1,
                        bm: 0,
                        nm: "Relleno 1",
                        mn: "ADBE Vector Graphic - Fill",
                        hd: false,
                      },
                      {
                        ty: "tr",
                        p: {
                          a: 0,
                          k: [134.25, 303.125],
                          ix: 2,
                        },
                        a: {
                          a: 0,
                          k: [0, 0],
                          ix: 1,
                        },
                        s: {
                          a: 0,
                          k: [100, 100],
                          ix: 3,
                        },
                        r: {
                          a: 0,
                          k: 0,
                          ix: 6,
                        },
                        o: {
                          a: 0,
                          k: 100,
                          ix: 7,
                        },
                        sk: {
                          a: 0,
                          k: 0,
                          ix: 4,
                        },
                        sa: {
                          a: 0,
                          k: 0,
                          ix: 5,
                        },
                        nm: "Transformar",
                      },
                    ],
                    nm: "Elipse 1",
                    np: 3,
                    cix: 2,
                    bm: 0,
                    ix: 1,
                    mn: "ADBE Vector Group",
                    hd: false,
                  },
                ],
                ip: 0,
                op: 750,
                st: 0,
                bm: 0,
              },
              {
                ddd: 0,
                ind: 5,
                ty: 4,
                nm: "square",
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
                        t: 44,
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
                        t: 48,
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
                        t: 57,
                        s: [0],
                      },
                    ],
                    ix: 11,
                  },
                  r: {
                    a: 0,
                    k: 0,
                    ix: 10,
                  },
                  p: {
                    a: 0,
                    k: [851, 749.5, 0],
                    ix: 2,
                    l: 2,
                  },
                  a: {
                    a: 0,
                    k: [0, 0, 0],
                    ix: 1,
                    l: 2,
                  },
                  s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6,
                    l: 2,
                  },
                },
                ao: 0,
                shapes: [
                  {
                    ty: "gr",
                    it: [
                      {
                        ind: 0,
                        ty: "sh",
                        ix: 1,
                        ks: {
                          a: 0,
                          k: {
                            i: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            o: [
                              [0, 0],
                              [0, 0],
                              [0, 0],
                              [0, 0],
                            ],
                            v: [
                              [242.188, 357.25],
                              [242.062, 374.125],
                              [257.25, 382.5],
                              [257.75, 365.5],
                            ],
                            c: true,
                          },
                          ix: 2,
                        },
                        nm: "Trazado 1",
                        mn: "ADBE Vector Shape - Group",
                        hd: false,
                      },
                      {
                        ty: "fl",
                        c: {
                          a: 0,
                          k: [1, 0.596078431373, 0.176470588235, 1],
                          ix: 4,
                        },
                        o: {
                          a: 0,
                          k: 100,
                          ix: 5,
                        },
                        r: 1,
                        bm: 0,
                        nm: "Relleno 1",
                        mn: "ADBE Vector Graphic - Fill",
                        hd: false,
                      },
                      {
                        ty: "tr",
                        p: {
                          a: 0,
                          k: [0, 0],
                          ix: 2,
                        },
                        a: {
                          a: 0,
                          k: [0, 0],
                          ix: 1,
                        },
                        s: {
                          a: 0,
                          k: [100, 100],
                          ix: 3,
                        },
                        r: {
                          a: 0,
                          k: 0,
                          ix: 6,
                        },
                        o: {
                          a: 0,
                          k: 100,
                          ix: 7,
                        },
                        sk: {
                          a: 0,
                          k: 0,
                          ix: 4,
                        },
                        sa: {
                          a: 0,
                          k: 0,
                          ix: 5,
                        },
                        nm: "Transformar",
                      },
                    ],
                    nm: "Forma 1",
                    np: 3,
                    cix: 2,
                    bm: 0,
                    ix: 1,
                    mn: "ADBE Vector Group",
                    hd: false,
                  },
                ],
                ip: 0,
                op: 750,
                st: 0,
                bm: 0,
              },
              {
                ddd: 0,
                ind: 6,
                ty: 2,
                nm: "front-ligths",
                refId: "image_5",
                sr: 1,
                ks: {
                  o: {
                    a: 0,
                    k: 100,
                    ix: 11,
                  },
                  r: {
                    a: 0,
                    k: 0,
                    ix: 10,
                  },
                  p: {
                    a: 0,
                    k: [1022.484, 1076.479, 0],
                    ix: 2,
                    l: 2,
                  },
                  a: {
                    a: 0,
                    k: [86.288, 55.53, 0],
                    ix: 1,
                    l: 2,
                  },
                  s: {
                    a: 0,
                    k: [100, 100, 100],
                    ix: 6,
                    l: 2,
                  },
                },
                ao: 0,
                ip: 0,
                op: 750,
                st: 0,
                bm: 0,
              },
            ],
          },
        ],
        layers: [
          {
            ddd: 0,
            ind: 1,
            ty: 0,
            nm: "animated6",
            refId: "comp_0",
            sr: 1,
            ks: {
              o: {
                a: 0,
                k: 100,
                ix: 11,
              },
              r: {
                a: 0,
                k: 0,
                ix: 10,
              },
              p: {
                a: 0,
                k: [851, 749.5, 0],
                ix: 2,
                l: 2,
              },
              a: {
                a: 0,
                k: [851, 749.5, 0],
                ix: 1,
                l: 2,
              },
              s: {
                a: 0,
                k: [100, 100, 100],
                ix: 6,
                l: 2,
              },
            },
            ao: 0,
            w: 1702,
            h: 1499,
            ip: 0,
            op: 750,
            st: 0,
            bm: 0,
          },
          {
            ddd: 0,
            ind: 2,
            ty: 0,
            nm: "black-ligths",
            refId: "comp_1",
            sr: 1,
            ks: {
              o: {
                a: 0,
                k: 100,
                ix: 11,
              },
              r: {
                a: 0,
                k: 0,
                ix: 10,
              },
              p: {
                a: 0,
                k: [851, 749.5, 0],
                ix: 2,
                l: 2,
              },
              a: {
                a: 0,
                k: [851, 749.5, 0],
                ix: 1,
                l: 2,
              },
              s: {
                a: 0,
                k: [100, 100, 100],
                ix: 6,
                l: 2,
              },
            },
            ao: 0,
            w: 1702,
            h: 1499,
            ip: 0,
            op: 750,
            st: 0,
            bm: 0,
          },
          {
            ddd: 0,
            ind: 3,
            ty: 0,
            nm: "col1",
            refId: "comp_2",
            sr: 1,
            ks: {
              o: {
                a: 0,
                k: 100,
                ix: 11,
              },
              r: {
                a: 0,
                k: 0,
                ix: 10,
              },
              p: {
                a: 0,
                k: [219, 507.5, 0],
                ix: 2,
                l: 2,
              },
              a: {
                a: 0,
                k: [851, 749.5, 0],
                ix: 1,
                l: 2,
              },
              s: {
                a: 0,
                k: [100, 100, 100],
                ix: 6,
                l: 2,
              },
            },
            ao: 0,
            w: 1702,
            h: 1499,
            ip: 0,
            op: 750,
            st: 0,
            bm: 0,
          },
          {
            ddd: 0,
            ind: 4,
            ty: 0,
            nm: "col1",
            refId: "comp_2",
            sr: 1,
            ks: {
              o: {
                a: 0,
                k: 100,
                ix: 11,
              },
              r: {
                a: 0,
                k: 0,
                ix: 10,
              },
              p: {
                a: 0,
                k: [529, 685.5, 0],
                ix: 2,
                l: 2,
              },
              a: {
                a: 0,
                k: [851, 749.5, 0],
                ix: 1,
                l: 2,
              },
              s: {
                a: 0,
                k: [100, 100, 100],
                ix: 6,
                l: 2,
              },
            },
            ao: 0,
            w: 1702,
            h: 1499,
            ip: 0,
            op: 750,
            st: 0,
            bm: 0,
          },
          {
            ddd: 0,
            ind: 5,
            ty: 0,
            nm: "col1",
            refId: "comp_2",
            sr: 1,
            ks: {
              o: {
                a: 0,
                k: 100,
                ix: 11,
              },
              r: {
                a: 0,
                k: 0,
                ix: 10,
              },
              p: {
                a: 0,
                k: [851, 749.5, 0],
                ix: 2,
                l: 2,
              },
              a: {
                a: 0,
                k: [851, 749.5, 0],
                ix: 1,
                l: 2,
              },
              s: {
                a: 0,
                k: [100, 100, 100],
                ix: 6,
                l: 2,
              },
            },
            ao: 0,
            w: 1702,
            h: 1499,
            ip: 0,
            op: 750,
            st: 0,
            bm: 0,
          },
          {
            ddd: 0,
            ind: 6,
            ty: 2,
            nm: "image",
            refId: "image_6",
            sr: 1,
            ks: {
              o: {
                a: 0,
                k: 100,
                ix: 11,
              },
              r: {
                a: 0,
                k: 0,
                ix: 10,
              },
              p: {
                a: 0,
                k: [743.263, 611.107, 0],
                ix: 2,
                l: 2,
              },
              a: {
                a: 0,
                k: [727.557, 579.288, 0],
                ix: 1,
                l: 2,
              },
              s: {
                a: 0,
                k: [100, 100, 100],
                ix: 6,
                l: 2,
              },
            },
            ao: 0,
            ip: 0,
            op: 750,
            st: 0,
            bm: 0,
          },
        ],
        markers: [],
      },
      container: document.getElementById("aniMain4"),
      path: "data4.json",
      renderer: "svg", // Required
      loop: true, // Optional
      autoplay: true, // Optional
      name: "aniMain4", // Name for future reference. Optional.
    });
    
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/home/section1/home-section1-fullhd.scss";
@import "../../assets/scss/home/section1/home-section1.scss";
@import "../../assets/scss/home/section1/home-section1-mobile.scss";
</style>