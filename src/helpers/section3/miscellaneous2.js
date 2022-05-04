const miscellaneous2 = function () {
    let kinesis = bodymovin.loadAnimation({
        animationData: {
            "v": "5.9.0",
            "fr": 25,
            "ip": 59,
            "op": 144,
            "w": 1280,
            "h": 720,
            "nm": "Comp 1",
            "ddd": 1,
            "assets": [
                {
                    "id": "image_0",
                    "w": 252,
                    "h": 293,
                    "u": "",
                    "p": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPwAAAElBAMAAAAyw5IHAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAIVBMVEVHcEz///////////////////////////////////////+PBM77AAAACnRSTlMAQMLqKICaEFhwhMSRZQAAB0xJREFUeNrtnc9PW0cQxx/EYIeTnQal5WQ5Adp3chEKzTuZoEYpJxNqmvpkQasiToGoEeIEhDbSOwGhPXAy72Ew+1c2kEAJ4Dc/dueNFDz35MPuznxndmZtex7XMoXaXOmTDddm7nsp2uTcQ3PVSr9vpMLO/Oubmy0e3pKGr86bJBt7+UoQ3pMMP7VoUeoPyGwajEU/i9B/8g3SHuedw7O7Bm/xb47pOd+Q7EnFJf1ZYIgWOTyATUO3+J2rY39vOBb/4oY+a4wen013wregf+BXbfE29A/8dTv6W2NnkVX8PzW21rLIQG+MvX3PV9rAAd78wXV63wXdxBUdt7s4fhZ9xbiyUU5hFTjDc7a/btxZW3HrT61BLSsDp/iIKD6hcWuPSPR+x3Sa9zkSnMs2nmqmsVm+Y7+jLn9KgI5ffs6I2LhS0NGWL7R47PJDKTxK+sQWj0u8oRz+SHXxxlR1Yh6d90UEDx97r42ojaae6ijO12+EbT21+pKufDlpuonUou6jbSfgfXn8uKLjJe9+mAK+s+/LKt65TXTC96ZB73zd3k8FbzrofoaYPkZqhUIlUyj8M087tKKDvR/buVw5fbNA+KcH1nsf7V39x899y9Aj+P23N9SMWXzTPW+1950mJc+sDh+rOZ3b1Fj+TSVXNrClo/k3HX4f8k9PnFHdYx/+tJMO7Sz38H07xTxvBvq8yO9x1J1H5ewjZtghmtNvWbIfciOGpV7XLluYf4TrD2DaUmVOiYtrDWJuKle38Y7DxugKXXgwR4/tymOWXyEfPb4rPEX1vZzDxaOcv0w9ekpLPCTq3pDblnA/Ufd8VpayuKzFxBr3hDQOgJ1vnZYniiT8XfD/uzzcWYP1ljiL8SmuX2dk6GQDi5dDkuhQB2H9BNfPOd97uHCNKKUGde8R51khVJlFMv41PvLq1ASFsD78igKaRLo5/DK+yJ1gzN+XsJHXT8zObiL/BJ1tyWGHCacInZ0ZRw+LSYw9pc8EEm8BMpoC14qLW9U2VnJ5zx5D3KJAx495r37u4AIfdPwTHh5a1jEjNTt0/QNkO6/Iw2dxnQofn5ucFlyfdAd0fO57vyUMHkw4Efe1HxR5uMR8wsWvYeSkV8jx4Yg+86kBaiPEWeBXUbfLBhffhwnoulTcgU5dRIU9+50rdHFtYtItO+5ARTnE3K1bfHwAiz6Y7dt8vA8LCqg6x3z8EryvvWJhDwZVhCk2iqJ4UPSqfHwIF3Gg6OX5+CFYUUKpbI/AV2DNjT05fB7W3EgXfySIr8KV3lGBb/sgnvhkwK01kOM7ISum8EoqEd+ni+/XxJdTeqrTsdpSxg/cYvwhYo4haAeYCVoXL4Xf18XXNfFtXXxLG7+ki/e7+C6+i+/ibxU+6G7+LcW3dfEHXXwXr3XFVMU3dSvdpm6df7vxRd0bblH3fq+Mb+jiq94AKIwFOavA+KYnaeAU8VgUD/Z0D75kPDhOaH3JeHCWE4niwUlWLIrPgtIkioffq+VF8WCxt66Lb4ji63BSlrRQN+dM66rugK7s9erKHjxDfiWJhyfoooHfY1QDHxb9sujhg43FQ1E8eMU+EsXv62b8aV3XB2VPNunArzcOdXWnpas7sajsGl3f83V1D27vtHUDX1R4EB9+rwriEY/WJgTxiBeDolkHMcvLq0aeqOyHRlV31xAdwIpmzhP1fcxjWcHLBupLnrYVq03ZmyamrR3LOR/m224EnQ/1Upr6NeR4w72SH9WUXcnlD+kuH+V7lr/AYal7gvcN7JfbSVXcyFmqVNWD/QrjRzJ47Gck4m1F4bH3/j/L/KT3seyyEZ/NTsEzjcWbH/hbvNAxbxM+n8Pln/3SV8su8tn81YXE0KW8onhCPv/MLlAzkr68/DHN/zN/B9BgjPbZsHiPB+/cHye+X/oOuQE9uwHqtjhNw5sY8xuIz+exBTv9s2nRYvIOTN70C5YNzz70Lmxkp8MWZL5+4dPuyqFhWam28fl5ThZq8w/pXTKbz8aNnf88aon9FoS1+4wXio53n2Zt65rDylqe6u5HNv1Ne4str5q2ZnvXs7S8fb1tYwlXlTR+PqBq12G0fyHpaYZ+0bbJZWfNJPyKOD7xlp4Vj73kwdBXeqKfSuwB3eEpXbz48j3d5Vd0lw+MpbLCy4dmksLLb0BXI1npA4dystLXdNZncy/62Jm+xEXj/1u5oPdhvizxqRwe1RiWqztQE8mc2PbjnmLIBT+uLfdeSfTPtVdKfJBN+btCx499B/NGBo9+iXFPBF9GN0RF3K+JxmfrAnjCU4CMgPpRXqC558ekYaRrfkQchWYWXNKJk4hT/5t1t/GLvPmbo41/ZzEEs186ewS5ap9/Rmxe3V2Mwrgut2U5Zv7RYgPG9jxrY2/AyJbnxFYZEhAPP3A36L8+GQMWPuP4tc/yC3QQll5KPLXJDJYQez4yI/fGLTM4nxAHcenX+560LQ/Ola79DWOl2s4DLz1bLhT+qp3ZxulHymn2H+hbnfxD7V12AAAAAElFTkSuQmCC",
                    "e": 1
                },
                {
                    "id": "image_1",
                    "w": 65,
                    "h": 279,
                    "u": "",
                    "p": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAEXAQMAAADImbtYAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAACXBIWXMAAAABAAAAAQBPJcTWAAAABlBMVEX///////9VfPVsAAAAAXRSTlPA24Ia1gAAACNJREFUSMftxrEJAAAIA7B+7uk6CP4gJFOSU73MzMzMzH7uDFpsFVGSnD9PAAAAAElFTkSuQmCC",
                    "e": 1
                },
                {
                    "id": "image_2",
                    "w": 65,
                    "h": 279,
                    "u": "",
                    "p": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAEXAQMAAADImbtYAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAACXBIWXMAAAABAAAAAQBPJcTWAAAABlBMVEX///////9VfPVsAAAAAXRSTlPA24Ia1gAAACNJREFUSMftxrEJAAAIA7B+7uk6CP4gJFOSU73MzMzMzH7uDFpsFVGSnD9PAAAAAElFTkSuQmCC",
                    "e": 1
                },
                {
                    "id": "image_3",
                    "w": 233,
                    "h": 285,
                    "u": "",
                    "p": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOkAAAEdBAMAAAAbbV1rAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAGFBMVEVHcEz///////////////////////////8dS1W+AAAAB3RSTlMAwH9MHOqoh2wO3wAAAt1JREFUeNrt2U1r20AQBuCNpTpXK2Dr6m5T9yqsgK9qTMi10BBf01DjayVbmr9fKIXYSZqdtWZ3WvedH6CH/Zh3QGsMv5Zlaa39lu3VxNryyoSppLSzLKc/VZvZshIF09JmK2LU5IMQnM5nY+JXe9F/r5c2I++6v+x1kHZMx9X9VXTyV11Ux5zlmnpW67vNy/ckUT7LTeY5CVVXsJe5IrmqWWy5JtliHO61tMlgQ5gudhnGdLA5Bau20FCprjRUaioNlb6qqHSporaVhkqNikrfVdRX9zi4+uo9Dq/SVEXtVFR6UFE7FfXlYqOonYr6YrFx1E5Ffd6zkdStivosjSOpdKeidirq4X2Kpu5U1IP7FE092OJ46lZF3d/ieOr+FkdUdypqraJSoaJ+UVEbFfWpd2KqT70TVb1TURsVte2h/n5V6dOxPmr2ePB6k5az8ZEdy1TbiS0FfvBuPdTMvvGGkPr8P++Yav3ofJe69jiliqeOOE8Ua9+ckFBN+tHzOomofHYrqZp043WdhFSTrHzSSUo1n33SSUw1vD1+EFYTj0ssp5oF/xILqqzFNtIqa7GtuDpkJ7GkyhpgU3H1hts6omrCbR1RlZMUO3n1htk6suqAOXVkVbPiNaywuuA1rLD6jjfrhNWEFxPCKuNgRwHUT6yYkFZvWTEhrbrnzjaAmrDCSVp1X6cuhOocAHUI1Z1OIdRzTiSKq0NOJIqrA04kiqupiupunVEIdaOiOvP/Rwh1wYh/efWcEf/y6pmKOmQMHXl1oKImjFEnrxrGqDsZNXcP2ADqRkV1RmIVQnVGYnE66q2K6oz/6emoZ/+ROlRRnaNuBLWfmkA9SdVAhfqvqzlUqFChQoUKFSpUqFChQoUKFSpUqFChQoUKFSpUqFChQoUKFSpUqFChQoUKFSpUqFChQoUKFSpUqFChQoUKFSpUqFChQoUKFSpUqFChQoX616lz+3YVR6jOb/4E8qHOAfGHv/IAAAAASUVORK5CYII=",
                    "e": 1
                },
                {
                    "id": "image_4",
                    "w": 301,
                    "h": 370,
                    "u": "",
                    "p": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS0AAAFyBAMAAABSFZH/AAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAHlBMVEVHcEz////////////////////////////////////JATChAAAACXRSTlMAxH8RMl2esOAO5kYzAAAHW0lEQVR42uXdsW/bZhQEcCYi5dWF28Gb1mzSVHvjWG1atano5M1AJ28B5AweLUu09d+2KLK1he69d3ckEM0B8sN99L0niraa33+68Pqlobwu/j/fX39+//e35wuvA4U1P4Ovjde1BVmnxurq0Lh2XtcaZA2N1dWicd14Xfcg63Vpdc1uQdexsbpWIOuj97qeoiXhcYU71eT6Ei4JiyveqR7XNl4SDleiUy2udaIkDK7ZS7xTHa5VpiQMrttEpxpccKcuvK6HTKfqXXCnPnpduU6Vu5KdKnehnXrurS64U58bqyvbqWpXtlPFrnSnil3pTtW68p2qdeU7VeoqdKrUldxT1a4ZGtexsbpW+REkdVU6VeiaF0aQ0lXqVJ0r995f74I7tbG6ip0qc61LI0jmqnaqyrWqjSCVK3P72eG6qnaqyPVQHEEi17zcqRrXtjqCNK6OEhffRehUhYswgiQuUlxsF6VTBS7GCFK4WHGRXXPGCBK4KCOI7/pcubMkdHFGEN1FGkF0F9qp743VxRpBbBdrBJFd8Ai6aayu6p0lkQuO67mxuubUuHgu3giiungTm+vacuNiuTrexKa6iBOb6WqJE5vpWrPj4rjguK69rnvmxOa5uBOb51rx42K4aO+xyS50BH30XteDIC6CSxIXwfWFPLFJLnhib7yurSSusksUV9nFn9gUF3/B4bhUcRVdsriKrrvy59gSl2LBYbgUCw7BJYyr5LrSxVVySRacukuz4NRdyrgKLmlcBddWGVfepVpwqi7RPlh1ieNKu8RxZV3wgrPwumT7YM2l2wdrLnlcOZc+rpwLXZ/fG6tLuQ9WXML1ueJyxJVxOeJKuCxxJVzou43cPph3SdfnvGtuiSvu8sQVdpniCrtMcUVd7I/XWS7Nzfqyq3PFFXRtXXHFXL64Yi5fXCEX/eENkov+8AbHxXzckulyxhVwWeMKuNbOuHBXa40Ld3njgl2CR4MoLjSu0puzuIv67DPR5Y4LdNnjAl32uDCXPy7M5Y8Lco0QF+QaIS7ENUZciGuMuADXKHEBrlHiuux6HyUu+BcWzXHxXNy4aC5yXDQXOS6Wix0Xy8WOi+Six0Vy0ePiuPhxcVz8uCguQVwUlyAuhksRF8OliIvgksRFcEniqrs0cdVdmrjKLlFcZddbM9G8+mm6zt8m6mJ8SPVD9Sr4hwhG2Cc2E3UNE3VNdV8tP/Qiez/0baIufomRXMNE7wNM9b4J/dKn3Zc7TdRFbn2ea5io6/zHRF3ezzsCr58n6jr3E3WdJuoidgXXdZioi/TQEN81TNTlew5mpHJlu877ibpI5cp3PU/UxQns8vMAD6MEBjw/8TLGNAKeN/l1jPENuOAHkJmBIa721h8Y4sJ/C4YXGOQKn6Tr9ztm0ZPceVzhkxxMrvBJ7kyu6M/kYHKF23VncsG/msYJDHe11sBwF/4HohmBBVyzJ2NgARf+Z/cJgUVc0RLbuVzBFXFwuaKX/sLlmsWW/ZPLFb30Ny5X8NI/2VytKbCoq/nNE1jYFVxdNy5XcOE52lxNrCt6myvWFc82V7ArepurMwSWceHfj56/45pyxcp1b3PF9opUYDlXrFyvba5YYIPPFQtsZ3PFbqQMPldsGm18rlBgJ59LHFje1UmHUd4VG9+9z9Uph1HBFQrsY+lzdcJhVHGFAhuMrk43jEquUGDO7+/oZN1ac4U2auf3w0Q2auv36axF3Vp1RQKzfl9TJLBHo6vTdGvZFeqwjdHVSbq17goF1htdkcDejK5IYHBVMFydoCoYrkhgg9P1mV8VFFfkveTR6ZrTq4LjigR243QFAnt1uiLPT+6crhV5SLJckRuIvdEVCezodLXcIUlzRRbqR6erpQ5JnisyvTdOV8e88omuQGCX79IxXYFh9NXpCkzvwer6xLvyqa7AMDo6XfAXAP39WjpdgW69droCw2iwujrWlU92Bbr1aHXNSZ3PdgW69dHqwvfWg9U1e6Hs+XRXoCrerC68W1+trkBV7KwuvCpOVlegKnqrC6+KG6trRhjeClegKjZWV1cf3hIXXhX/O7w1rnl5eGtc+BuQg9XV3FcrTOTCh+Te6sKv/MHrmhcrTOXCb5wfvS54SP733VaZC7/yd1YXfuWfvC78Q8ml1dU8VW6hCF13lVkkdLWVWSR04Vf+3uuCO//d68I7f+F1wdvOs9cFX/mvXhf+NwUWXtdVeqnQuuA9/1/vi7Qu/B3uo9fVZZcKsQu/t7P0ulbJpULtapNLhdqFD+/e65rnDlLugivs4HXhFdZ7XXCF7b0uuMIGs2uVOUiDq80cpMGV+uJuh+sqcZAOF/yR5JvXBVfYu9kF30LZeF3wG8m92XUfPkiPqwsfpMcFz6K92XUXrVaTq41Wq8kF3xHYm12fggfpckUP0uWCl4qvZhd6kAezaxY7SJsLPshrs+sqdJA+F3yQS68rdpBGF3qQJ7MLXfP/uddqdMFr/s7sQg/yaHahP5GvZhf8E7kwu9CDfDO7Igc5zddfHyMNWLAoQQsAAAAASUVORK5CYII=",
                    "e": 1
                },
                {
                    "id": "image_5",
                    "w": 205,
                    "h": 293,
                    "u": "",
                    "p": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAAElBAMAAAC18nsBAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAIVBMVEVHcEz///////////////////////////////////////+PBM77AAAACnRSTlMAwiZamkCAEOBwRicUeQAABsdJREFUeNrtnc1PU1kUwJ8tteKqlQ/HrjoBkhlWZYJgWIEkBLvqfFQnroqOdWTVCdFkXIEymukKExgTVjxo8Xn/yqHlm97Xd77jgrNyY37ce88593zd1yBASbY6U1/In8lS/UW1GAhL6vFKwXkkyi/dF4OlZr5z/SRcui9AGVtwyRKN/sSj/FhwQAkfVciUtbLDyCZtUalPDivh84bill06qUWc/mWnHFFQpFTZ0SVahO5euuBYEj6DYZqOK5slE0xn80wwR/KPDcbt99e0ghDG7fW1m7IUxuX6cR6IYVytD+YvOYzro9kZQYzr4xTKgpgwHvO95HJaNrvmDmI5u6KcWDMdEMXEmmm2IMvJGZhOHzOVXo6r2CwnxkzFlxMaLadls5wYMx2QxsSYaVmc4zXTtDjGzfs4k/KcmokW+M1UXguc823bnDzGZ6ZZheX4zPSGAsdnpk8VOD4zbSpwPGZ6UwHjM9O3GpwtC9/mNdOUBsbZOAOfmaocj8dMV52Nmaocz77FFXck6ybOzRf0oq7ScPhVtdr9b9Vqtf5HvgA3U4QaLP3Sa3y/+gu0FboTjS13vd4uJJsp1Bsc9q1+ji0nmekgcDGJpdRLZeFDoro9hBRtl/uZ6VspzKWK6hdSqHMHXFSdjjVTwOXzFVG+TZdjblNAJIorFE97zRQQut3FFvELnj8tuQQSoSvsqbIjxDof8Q2D7DTBfOhdEBTnUKZXdVth20iJXEmGkxTCR0I9vqSSW0uIs4qOW2hSRsctNElyb/NGnJoRpyLEcd8Ip2jECa4537QeWHFKRpyaESdnxFk34uwb+dGvRpzQiCPlSBPTEqELddVIERI5QgeUXOotGXHe2cTxhDyLxkHnjbT850gTJBYEKcJKpECQ8k4k4BNAIwcHBheDlCqAOnNRSd/xHOtcUd8hdOWDgaF25b2+oR7LCI8DL8fzQIie5oi+Yh/LEIeD6QW/Z7hUVJvpsKjqsS8YLDlRQbYBo88GisDSBnR3e7Oo6xHOD+mz2lV3de8aBgfUrf+VDA6oq3cPlS2IvnfURnoLq3e7RFA0q63ZyEYXc+PQ1zmjZY9yDpweN8aDs0Y3MNrAmxR6BuYwR3jgasecrQGHQtyxTiiIPdE3ZLQgqMXyZ8mBoB/YoBGbE4KCBCaJQXYk8bLkpeL9jU+Y5/ggUMKcavJB/xqpAmyYZFfgiLYgO1cQOKKGjc65NmTnfhcA1ZRjH9TOSRwRSOck3umBgro3RtYajPNBJSMQsKQ6brQgPghaIx43WhAbBC56v7GwIQGDhXfcMgV1L3fi61ghEKJVSX/9jm1//GahCR35m64NuKGCDPmQkDOH9EPCFoDGmxYbF5yN7apqHGPvKNONpL2j9Nso33hYJ1Xu/zQ4oK5MWRwQ6fKjNkTXmsoWRLyT6OMluDuJMbeLAnHmkLOrBoqABc0HHFBZ1yMQzog5zwTO+rhz/NAgkj03BQ2L2ZMYP8M4FTYIpt01NgdW3sqxObDy1jqfA+oWfBHgQKpO7cBmQRJDU5AFyTzsKeg7BODUhwwnY+B4gBsXGG1cMbDRuIoIJ2XEST6gLRnOU/2LoSu3jTg3jDg3jThp1YgU4XlyMpzgmnPNMeSkjOw0Y8QZNOIMGHFuaWb2F2TS6N7eBXLSzLgnMdk6aWfcClkbmIbGiZOUEU2EGpzG151hjXsNveMJL2bN4ayW1znLf07ivCHakpJT4YMr7pa2pOR0Yb9n4feKCstxe716GWIVD1K1yvncYGtWVtnOw7erYesoYvNAn3ktxYTh0RCUBGsRFmPdLeyD3MCO0EV30CvJn4MfAxYuWwmVk41HT/pRFhxQ2sluPRzd8d5RE9uIHsMeLPqK8kv1avX0u1UT1cf1PK5jMg+uZ4iMVQwqYyJEpY4jLeh1yJR9cHmGJzlolUFoumbVRg1Ib2UofdqmLmcdHK7IHE9aFxOCizM8aYOLTTLWk1w842l1A5wkseT84xZzNtum8ynVqxmWtjtow2smLJlHZC8SRqrsDj7i+mtkKSKSWIEbW9sdVDC9AYEbDponMW8eZXfQRmbLVE99KYPKqi3nHbYpSXQFDVxLhSo1ZItIRAnU3EHPoLJSEN/TYNS5te8QB1Y4DkfPTFuNwGI93vdm2U/imJiiOHUQGYk5ikSWTTCdJYlpQ8K7/pTQKX1IrBgjf27QL4ug0iB386CP0lNTLAyiJJ1ZIVM2cFXiNZqOhy/Q5XV4OfKcQvhlyM7ubaM0YniH3jkaWwGiNp5zW3yvZxYSWOEwG3Kq6dX//L9HEObrO08CcZno/ALCsbw6+iehO/k/XCyadFrlVo0AAAAASUVORK5CYII=",
                    "e": 1
                },
                {
                    "id": "image_6",
                    "w": 205,
                    "h": 293,
                    "u": "",
                    "p": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAAElBAMAAAC18nsBAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAIVBMVEVHcEz///////////////////////////////////////+PBM77AAAACnRSTlMAwiZamkCAEOBwRicUeQAABsdJREFUeNrtnUtPW1cQgG9sHIes7ARo45UrQGpZmYpAxQqChIhX7sNJlZVJGrdh5QolallBoInqFZGgkVhxwSY351cWmzc+13feyoJZZRN9nDkzc+ZlOwhQkq1O1+fz57JYf1ktBsKSerJccB6J8osPxWCp6a9dPwkXHwpQRuddskQj3/Mo3xUcUMLHFTJltewwskU7VOqDw0r4oqGosis3tYCzv+ykIwqKlCo7ukQLUO2lC44l4XMYpum4slUywXSUZ4I5ln9sMO6gv6UVhDBuv6/flKUwLteP84MYxtX6YP6Uw7g+lp0RxLg+QaEsiAnjMd9IHqdlozV3GMvZE+XEuumAKCbWTbMFWU7OwHX6uKn0cVzF5jgxbip+nNDoOC2b48S46YA0JsZNy+Icr5umxTFuzseZkOfUTKzA76byVuCcT22z8hifm2YVjuNz01sKHJ+bPlPg+Ny0qcDxuOltBYzPTdc0ONsWsc3rpikNjLMJBj43Vbkej5uuOBs3VbmeA4sn7ljWTYKbL+lFPaXh0KtqtfvfqtVq/bd8Ae6mCDNY/KnX+X72N2gr9CAa2+56vVNIdlNoNDjq2/0cXUpy00HgYRJbqVfawkdEc3sEadou9XPTNSnMlY7qJ1Kqcw/cVJ2KdVPA4/MZ0b5Nl2NeU0AmimsUT3ndFJC6fYVt4hc8f1pyCyRCd9hTZUfIdd7jBwbZKYL70KcgKM6RzKzqroLaSIVcSYaTlMJHQjO+pJZbS4izgs5baFJG5y00SQpvc0acmhGnIsRxXwinaMQJbjhftB1YcUpGnJoRJ2fEWTfiHBjF0c9GnNCIIxVIE8sSoQd1xcgQEjlCF5Tc6i0Zcd7a5PGEOovGQdeNtPrn2BIkDgRpwkqUQJD2TiQQE0ArB4cGD4OUKYAmc1FJP/Cc2FxRPyB05Z2Bo3ZlU99RT2SYx4G343kgxExzWN+wT+Q+h4OZBW8yQipqzHRUVI3YlxyWXKggx4DRRwNDYFkDerq9VdSNCBeX9FHtqbuuu4bBBXX7fyWDC+ra3SNlD6LrjjpIb2Htbo8Iima0LRs56GIqDv2cM0b2qODAmXFjIjhrdQNjDbxNoedgDnOFB252zN0acCrEXeuEgtgbfdBX9i/upsamgWljQN+yQcM2NwQFCWwSg/xI4pMlvyu+3/iCeZYPAhXMqSYf9K+RKcCWSfYErmgbormCwBU1bGzOtSGa+1UAVFPOfVCak7gikM1JfE4PlNS9MfLWYIwPKhmBgC3VMaMD8UHQHvGY0YHYIHDT+42FDwk4LHzilimoR7nTWMdKgRCjSvqn37Hjj18sLKEjf9OtAbdUkCFfEnLnkH5J2AbQWNNCccH52q6qxTF0R9luJOmOMm+jfMfDOqlz/4fBBXVl0uKCSI8fdSC62lT2IOKbRF8vwb1JjL1dFIizh5xdMTAELGgu4IDKuhGBcEfMfSZw1cfd44cmkey9KWhazN7E+BHGqbBBMOuusTmw9laOzYG1t9b5HNC04JMAB9J1agc2BxLZQB3QDwjQmbXMIuWaESdjEHiAiguMFFcMbCyuIsJJGXGSL2hbhvNM/2Hoyl0jzi0jzm0jTlo1I0VEnpwMJ7jh3HAMOSkjP80YcQaNOANGnDualf0lmTB6t/eAnDQz70kstk7HGXdClgLT0DxxgrKiiTCDs/y6s6zxoKF3PeHlqjmc0Yo65/XPaZ53n3ak5FL48Fq4pR0puVw46Dn4g6LCcdx+r12GWMODdK1yvjDYmpE1tov07XraOoJQHuhrXksxaXh0H0qCjQiLseEW9oXcwInQ5XDQK8lfBz8KbFy2EjonG4+f9qPMO6C0k8N6OLLrfaPGdxAzhn1Y9hXlF+vV6tn3Vo1Xn9TzuInJHLifIbJWMaiMiRCdOo60oM8hUw7A7Rme5KBdBqHtmhUbMyB9VoYyp23qctbB6YrM9aR1MSG4OcOTNrjZJOM9yc0znlU3wEUSSy5GC7M2atP5KtXrFZZ2OGjDeyYsmUNULxJOqhwO3uPma2QpIopYgRdbOxxUMLMBgRcOWicxXx7lcNBGVsvUSH2lgsqqHectdihJDAUN3EiFKjXkiEjECNTCQc+islIS3zNg1Hm17xEXVjgBR89NW43A4jzez5tlP4hjYpri1EVkJOY4E1kywXSOJGYNCZ/rTwnd0rvEjjHy5wb9sgBqDXKVB/1QemqShUG0pDPLZMoGrku8SrPx8CW6vQ5vR15QCL8M2dHeDsoihnbpk6PRZSBq4wV3xPd6ej6BFQ6xIWeWXv3P/3sEYb6++zQQl/HOLyCcyKvjfxKmk/8DT2qafnne5scAAAAASUVORK5CYII=",
                    "e": 1
                },
                {
                    "id": "image_7",
                    "w": 80,
                    "h": 80,
                    "u": "",
                    "p": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAIVBMVEVHcEz+mQD9mQD/mAD+mQD9mQD/mgD/mAD/nwD+mgD+mQBQOMTvAAAACnRSTlMAxZpF6oBnIxCwMuOyIAAAAZhJREFUSMfFlz9LA0EQxc+cmsPqRES9KqJVqggGxEpMo1dFQkCsLIRoKhG1sFLxA1iIQiovbhIyn9L7G/b2bneeIOSVx48ZZndm9p1l5VVtnq2GWu/cWiZVb3xKJT4N6INHkoKejtsjRTvl3BUVtAbFi/RV5F7LOBKXKmf7pSAFau0XpFELSRyrLXOOpweHMvhCBtWwgLmQxoByyIEZHGXcEjFqpOAhB56kpfgcOAUzZ7mfePAoBus8OI7nhOdIRGAFAClqyzcEdEOwj4AT/v5m1TgIR0E4LBBIz1jRUdkLGFizVjDQ5Xss0TcKTvSTn9cP0jvJiXsYOJofOETB4N/B6TyPB75CuCn6aJvBjQuPAjxc8LjCCwBeKfCSwtfeIgK+Y69H8n4g1Yg/PR/ItndjcJkHU6vi8UOd6J4DN1OQyy1mJqnOjUGmCv8QIiFlh1QBAxpDjnMmTl+4aOTt3r4O3FD8ozMAvJ7BkqqJdV5TtMts812RO9cYeyW7uNZZe3tX5o5N/xWPHxl22rPMspvd7a1u50D9/gvLVoziNk9aXQAAAABJRU5ErkJggg==",
                    "e": 1
                },
                {
                    "id": "image_8",
                    "w": 80,
                    "h": 80,
                    "u": "",
                    "p": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAIVBMVEVHcEz+mQD+mQD+mgD+mQD/mAD/mAD/nwD/mgD9mAD+mQBxjAGmAAAACnRSTlMAxXyn6UUjEGCQYgjxYAAAAZhJREFUSMfFl71Lw1AUxa8fbdQpKipk0korOFVRh0xCESFTLYLgJNXJSdHFLYNTJ+dOpomlvX+lSfpa8l7y3jtbz1h+3Jub3I9TIln13tF2qp3mE5lUPw5YKDk3oH2PC4paOu6OFV1Wc99c0h4UL9NVmfuq4jg5VLlaUAlypNZ+yhrdyNwHayUldzw9GBfBdzaojQWUQhoDFkP6ZnA051bZoq4AH23grSglsIExmHme+9UOXiM1Z5rkc2LnOMnANQDkMAU/EdBNwQECjrFa8q/oIBxH6bBAIL/RJgaGtIKBP7SFga69x2b6RcGxfvJl/dEQAyfkYeBoeWBMAYNdAYNw6iW+Hh/9hHBTDNA2gxsXHgV4uOBxhRcAvFLgJYWvvXUEbGPXY3Y/kGryZY+sgPx8INveRU+csCrWJp+KM/xiAw8EuGGreWGShkjNwDkMCXMf04JBMoaUPJePPKH5pSdd2e7d68B9xT86vr0SkyVVE+tMbtniZnoucycaYx9gXPqcF0WuY/pf0V+gnRaZVes1znYbzQf1939Chorn9VI0lgAAAABJRU5ErkJggg==",
                    "e": 1
                },
                {
                    "id": "image_9",
                    "w": 395,
                    "h": 395,
                    "u": "",
                    "p": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYsAAAGLAgMAAABLjlYYAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAACXBIWXMAAAABAAAAAQBPJcTWAAAADFBMVEVHcEz+mQD+mQD+mQCJGjlnAAAAA3RSTlMAwGhy5fr6AAABu0lEQVR42u3RsU3DABSE4We7cOHCPY1H8AhmCSRKSpQl7FEo2cJboChVhkgQTTAS0IASKUXuZD39/wKfdBfxXfGg6/GHiGbRdfg1eoPRGYzZYCx6ozAYjcGoDUZvMDqDMRuMRW+UBqMwGI3BqA1GazB6gzEYjNlgjAZj0RulwaiSGHUSozUYXRJjMBhjEmPRG6XBKAxGZTCaJEZtMFqD0RuMLokxGIw5iTEajEVvlEmMwmBUSYwmiVEbjDaJ0ScxOoMxJDHmJMaYxFhyGCXG1UZhMKokRoOxKqM2GC3G1UaPsSqjS2IMGFcbM8aqjBFjVcbNGjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMLIZHwZjrzc+Q29sDcakN274+EXjXm8cQm9MeuOmb5w3TpPe2IfceA+5ceulzhlPITe2ITcExH/jPeTGW8gNDfHH2IXceA61cXoJtbGbQmwcXyO0xmkToTWOm0lLxN3Flb4A0crFkgfcFHYAAAAASUVORK5CYII=",
                    "e": 1
                },
                {
                    "id": "image_10",
                    "w": 395,
                    "h": 395,
                    "u": "",
                    "p": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYsAAAGLBAMAAADEzqO4AAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAD1BMVEVHcEz///////////////8T4DEaAAAABHRSTlMAwII3kzSvHAAAAoJJREFUeNrt101qG0EYBNCenwNEzhxAWHMAQeYC48z9zxSyMJHAJhJo8XXxat+LR3U1dGu3GU595nynaOvRZ37cKaYjgjFnMNYIRrd36p4xZDC2DMYSwRiPCMaQwVgzGEsEo+Np3DKGDMaWwVgiGNMRwRgzGHMGY81gLBGMrhf+jzFmMIYMxpbBWDMYRwRjymCMGYw5g7FlMNYMxhLB6Pyh+mSMGYwhgzFnMLYMxprBWDIYRwRjxCjEmDMYG0YhxprBWDIYRwRjymCMGYwhgzFnMDaMQow1g7FkMI4IxpTBGDEKMYYMxoxRiLFlMFaMQowlg3FEMCaMQowRoxBjyGDMGIUYG0YhxopRiLFkMA6MOowJoxBjxMB4NWPAKMSYMQoxNgyMVzNWDIxXMxYMjJd/YstlxsDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAKMs4RzB+twTGR0tg7NcIxrklMIoqnmRcWgKjrOIpRl3FM4xrC2DslRUPMz5KKx5l/Gytf0bxKh5kVK/iIUb9Kh5g7JfW+mf0gfgP4/3aumfs/SC+Z+yX1lO+Zrz1hfiSsV+urXXO6GoR3zBOfRpuGfvbpVfDJ+PUNeFvhvfLr2fP/AHmVAN0PnugEwAAAABJRU5ErkJggg==",
                    "e": 1
                },
                {
                    "id": "image_11",
                    "w": 237,
                    "h": 237,
                    "u": "",
                    "p": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO0AAADtAgMAAAAuIxocAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAACXBIWXMAAAABAAAAAQBPJcTWAAAACVBMVEVHcEz+mQD+mQD6PFsSAAAAAnRSTlMAwO33D4gAAABMSURBVGje7csxEQAwCASwN4kJpFVlPcCxJXtSc0m/MVmWZVmWZVmWZVmWZVmWZVmWZVmWZVmWZVmWZVmWZVmWZVmWZVmWZVmWb/LGBzUy0h+IutV5AAAAAElFTkSuQmCC",
                    "e": 1
                }
            ],
            "layers": [
                {
                    "ddd": 0,
                    "ind": 1,
                    "ty": 2,
                    "nm": "e/for-animated.ai",
                    "cl": "ai",
                    "refId": "image_0",
                    "sr": 1,
                    "ks": {
                        "o": {
                            "a": 0,
                            "k": 100,
                            "ix": 11
                        },
                        "r": {
                            "a": 0,
                            "k": 0,
                            "ix": 10
                        },
                        "p": {
                            "a": 1,
                            "k": [
                                {
                                    "i": {
                                        "x": 0.667,
                                        "y": 1
                                    },
                                    "o": {
                                        "x": 0.333,
                                        "y": 0
                                    },
                                    "t": 103,
                                    "s": [
                                        819,
                                        461,
                                        0
                                    ],
                                    "to": [
                                        0,
                                        -16.667,
                                        0
                                    ],
                                    "ti": [
                                        0,
                                        19,
                                        0
                                    ]
                                },
                                {
                                    "i": {
                                        "x": 0.667,
                                        "y": 1
                                    },
                                    "o": {
                                        "x": 0.333,
                                        "y": 0
                                    },
                                    "t": 107,
                                    "s": [
                                        819,
                                        361,
                                        0
                                    ],
                                    "to": [
                                        0,
                                        -19,
                                        0
                                    ],
                                    "ti": [
                                        0,
                                        -0.333,
                                        0
                                    ]
                                },
                                {
                                    "i": {
                                        "x": 0.667,
                                        "y": 0.791
                                    },
                                    "o": {
                                        "x": 0.333,
                                        "y": 0
                                    },
                                    "t": 118,
                                    "s": [
                                        819,
                                        347,
                                        0
                                    ],
                                    "to": [
                                        0,
                                        0.27,
                                        0
                                    ],
                                    "ti": [
                                        0,
                                        -4.673,
                                        0
                                    ]
                                },
                                {
                                    "i": {
                                        "x": 0.667,
                                        "y": 1
                                    },
                                    "o": {
                                        "x": 0.333,
                                        "y": 0.259
                                    },
                                    "t": 124,
                                    "s": [
                                        819,
                                        368.499,
                                        0
                                    ],
                                    "to": [
                                        0,
                                        1.104,
                                        0
                                    ],
                                    "ti": [
                                        0,
                                        -0.51,
                                        0
                                    ]
                                },
                                {
                                    "t": 126,
                                    "s": [
                                        819,
                                        363,
                                        0
                                    ]
                                }
                            ],
                            "ix": 2,
                            "l": 2
                        },
                        "a": {
                            "a": 0,
                            "k": [
                                126,
                                146.5,
                                0
                            ],
                            "ix": 1,
                            "l": 2
                        },
                        "s": {
                            "a": 1,
                            "k": [
                                {
                                    "i": {
                                        "x": [
                                            0.667,
                                            0.667,
                                            0.667
                                        ],
                                        "y": [
                                            1,
                                            1,
                                            1
                                        ]
                                    },
                                    "o": {
                                        "x": [
                                            0.667,
                                            0.333,
                                            0.333
                                        ],
                                        "y": [
                                            0.128,
                                            0,
                                            0
                                        ]
                                    },
                                    "t": 103,
                                    "s": [
                                        44,
                                        0,
                                        100
                                    ]
                                },
                                {
                                    "i": {
                                        "x": [
                                            0.667,
                                            0.667,
                                            0.667
                                        ],
                                        "y": [
                                            1,
                                            1,
                                            1
                                        ]
                                    },
                                    "o": {
                                        "x": [
                                            0.763,
                                            0.333,
                                            0.333
                                        ],
                                        "y": [
                                            0.402,
                                            0,
                                            0
                                        ]
                                    },
                                    "t": 107,
                                    "s": [
                                        44,
                                        44,
                                        100
                                    ]
                                },
                                {
                                    "i": {
                                        "x": [
                                            0.667,
                                            0.667,
                                            0.667
                                        ],
                                        "y": [
                                            1,
                                            0.88,
                                            1.417
                                        ]
                                    },
                                    "o": {
                                        "x": [
                                            0.333,
                                            0.333,
                                            0.333
                                        ],
                                        "y": [
                                            0,
                                            0,
                                            0
                                        ]
                                    },
                                    "t": 118,
                                    "s": [
                                        44,
                                        51,
                                        100
                                    ]
                                },
                                {
                                    "i": {
                                        "x": [
                                            0.667,
                                            0.667,
                                            0.667
                                        ],
                                        "y": [
                                            1,
                                            1,
                                            1
                                        ]
                                    },
                                    "o": {
                                        "x": [
                                            0.333,
                                            0.333,
                                            0.333
                                        ],
                                        "y": [
                                            0,
                                            -0.252,
                                            -0.313
                                        ]
                                    },
                                    "t": 122,
                                    "s": [
                                        44,
                                        40.094,
                                        100
                                    ]
                                },
                                {
                                    "t": 125,
                                    "s": [
                                        44,
                                        44,
                                        100
                                    ]
                                }
                            ],
                            "ix": 6,
                            "l": 2,
                            "x": "var $bm_rt;\nvar e, g, nMax, n, n, t, v, vl, vu, vu, tCur, segDur, tNext, nb, delta;\ne = 0.7;\ng = 4000;\nnMax = 9;\n$bm_rt = n = 0;\nif (numKeys > 0) {\n    $bm_rt = n = nearestKey(time).index;\n    if (key(n).time > time)\n        n--;\n}\nif (n > 0) {\n    t = $bm_sub(time, key(n).time);\n    v = $bm_mul($bm_neg(velocityAtTime($bm_sub(key(n).time, 0.001))), e);\n    vl = length(v);\n    if ($bm_isInstanceOfArray(value)) {\n        vu = vl > 0 ? normalize(v) : [\n            0,\n            0,\n            0\n        ];\n    } else {\n        vu = v < 0 ? -1 : 1;\n    }\n    tCur = 0;\n    segDur = $bm_div($bm_mul(2, vl), g);\n    tNext = segDur;\n    nb = 1;\n    while (tNext < t && nb <= nMax) {\n        vl *= e;\n        segDur *= e;\n        tCur = tNext;\n        tNext = $bm_sum(tNext, segDur);\n        nb++;\n    }\n    if (nb <= nMax) {\n        delta = $bm_sub(t, tCur);\n        $bm_rt = $bm_sum(value, $bm_mul($bm_mul(vu, delta), $bm_sub(vl, $bm_div($bm_mul(g, delta), 2))));\n    } else {\n        $bm_rt = value;\n    }\n} else\n    $bm_rt = value;"
                        }
                    },
                    "ao": 0,
                    "ip": 36,
                    "op": 786,
                    "st": 36,
                    "bm": 0
                },
                {
                    "ddd": 0,
                    "ind": 2,
                    "ty": 2,
                    "nm": "i/for-animated.ai",
                    "cl": "ai",
                    "refId": "image_1",
                    "sr": 1,
                    "ks": {
                        "o": {
                            "a": 0,
                            "k": 100,
                            "ix": 11
                        },
                        "r": {
                            "a": 0,
                            "k": 0,
                            "ix": 10
                        },
                        "p": {
                            "a": 1,
                            "k": [
                                {
                                    "i": {
                                        "x": 0.667,
                                        "y": 1
                                    },
                                    "o": {
                                        "x": 0.333,
                                        "y": 0
                                    },
                                    "t": 103,
                                    "s": [
                                        586.5,
                                        459.5,
                                        0
                                    ],
                                    "to": [
                                        0,
                                        -16.667,
                                        0
                                    ],
                                    "ti": [
                                        0,
                                        19,
                                        0
                                    ]
                                },
                                {
                                    "i": {
                                        "x": 0.667,
                                        "y": 1
                                    },
                                    "o": {
                                        "x": 0.333,
                                        "y": 0
                                    },
                                    "t": 107,
                                    "s": [
                                        586.5,
                                        359.5,
                                        0
                                    ],
                                    "to": [
                                        0,
                                        -19,
                                        0
                                    ],
                                    "ti": [
                                        0,
                                        -0.333,
                                        0
                                    ]
                                },
                                {
                                    "i": {
                                        "x": 0.667,
                                        "y": 0.791
                                    },
                                    "o": {
                                        "x": 0.333,
                                        "y": 0
                                    },
                                    "t": 118,
                                    "s": [
                                        586.5,
                                        345.5,
                                        0
                                    ],
                                    "to": [
                                        0,
                                        0.27,
                                        0
                                    ],
                                    "ti": [
                                        0,
                                        -4.673,
                                        0
                                    ]
                                },
                                {
                                    "i": {
                                        "x": 0.667,
                                        "y": 1
                                    },
                                    "o": {
                                        "x": 0.333,
                                        "y": 0.259
                                    },
                                    "t": 124,
                                    "s": [
                                        586.5,
                                        366.999,
                                        0
                                    ],
                                    "to": [
                                        0,
                                        1.104,
                                        0
                                    ],
                                    "ti": [
                                        0,
                                        -0.51,
                                        0
                                    ]
                                },
                                {
                                    "t": 126,
                                    "s": [
                                        586.5,
                                        361.5,
                                        0
                                    ]
                                }
                            ],
                            "ix": 2,
                            "l": 2
                        },
                        "a": {
                            "a": 0,
                            "k": [
                                32.5,
                                139.5,
                                0
                            ],
                            "ix": 1,
                            "l": 2
                        },
                        "s": {
                            "a": 1,
                            "k": [
                                {
                                    "i": {
                                        "x": [
                                            0.667,
                                            0.667,
                                            0.667
                                        ],
                                        "y": [
                                            1,
                                            1,
                                            1
                                        ]
                                    },
                                    "o": {
                                        "x": [
                                            0.333,
                                            0.333,
                                            0.333
                                        ],
                                        "y": [
                                            0,
                                            0,
                                            0
                                        ]
                                    },
                                    "t": 103,
                                    "s": [
                                        44,
                                        0,
                                        100
                                    ]
                                },
                                {
                                    "i": {
                                        "x": [
                                            0.667,
                                            0.667,
                                            0.667
                                        ],
                                        "y": [
                                            1,
                                            1,
                                            1
                                        ]
                                    },
                                    "o": {
                                        "x": [
                                            0.333,
                                            0.333,
                                            0.333
                                        ],
                                        "y": [
                                            0,
                                            0,
                                            0
                                        ]
                                    },
                                    "t": 107,
                                    "s": [
                                        44,
                                        44,
                                        100
                                    ]
                                },
                                {
                                    "i": {
                                        "x": [
                                            0.667,
                                            0.667,
                                            0.667
                                        ],
                                        "y": [
                                            1,
                                            0.88,
                                            11.5
                                        ]
                                    },
                                    "o": {
                                        "x": [
                                            0.333,
                                            0.333,
                                            0.333
                                        ],
                                        "y": [
                                            0,
                                            0,
                                            0
                                        ]
                                    },
                                    "t": 118,
                                    "s": [
                                        44,
                                        51,
                                        100
                                    ]
                                },
                                {
                                    "i": {
                                        "x": [
                                            0.667,
                                            0.667,
                                            0.667
                                        ],
                                        "y": [
                                            1,
                                            1,
                                            1
                                        ]
                                    },
                                    "o": {
                                        "x": [
                                            0.333,
                                            0.333,
                                            0.333
                                        ],
                                        "y": [
                                            0,
                                            -0.252,
                                            -7.875
                                        ]
                                    },
                                    "t": 122,
                                    "s": [
                                        44,
                                        40.094,
                                        100
                                    ]
                                },
                                {
                                    "t": 125,
                                    "s": [
                                        44,
                                        44,
                                        100
                                    ]
                                }
                            ],
                            "ix": 6,
                            "l": 2,
                            "x": "var $bm_rt;\nvar e, g, nMax, n, n, t, v, vl, vu, vu, tCur, segDur, tNext, nb, delta;\ne = 0.7;\ng = 4000;\nnMax = 9;\n$bm_rt = n = 0;\nif (numKeys > 0) {\n    $bm_rt = n = nearestKey(time).index;\n    if (key(n).time > time)\n        n--;\n}\nif (n > 0) {\n    t = $bm_sub(time, key(n).time);\n    v = $bm_mul($bm_neg(velocityAtTime($bm_sub(key(n).time, 0.001))), e);\n    vl = length(v);\n    if ($bm_isInstanceOfArray(value)) {\n        vu = vl > 0 ? normalize(v) : [\n            0,\n            0,\n            0\n        ];\n    } else {\n        vu = v < 0 ? -1 : 1;\n    }\n    tCur = 0;\n    segDur = $bm_div($bm_mul(2, vl), g);\n    tNext = segDur;\n    nb = 1;\n    while (tNext < t && nb <= nMax) {\n        vl *= e;\n        segDur *= e;\n        tCur = tNext;\n        tNext = $bm_sum(tNext, segDur);\n        nb++;\n    }\n    if (nb <= nMax) {\n        delta = $bm_sub(t, tCur);\n        $bm_rt = $bm_sum(value, $bm_mul($bm_mul(vu, delta), $bm_sub(vl, $bm_div($bm_mul(g, delta), 2))));\n    } else {\n        $bm_rt = value;\n    }\n} else\n    $bm_rt = value;"
                        }
                    },
                    "ao": 0,
                    "ip": 36,
                    "op": 786,
                    "st": 36,
                    "bm": 0
                },
                {
                    "ddd": 0,
                    "ind": 3,
                    "ty": 2,
                    "nm": "i2/for-animated.ai",
                    "cl": "ai",
                    "refId": "image_2",
                    "sr": 1,
                    "ks": {
                        "o": {
                            "a": 0,
                            "k": 100,
                            "ix": 11
                        },
                        "r": {
                            "a": 0,
                            "k": 0,
                            "ix": 10
                        },
                        "p": {
                            "a": 1,
                            "k": [
                                {
                                    "i": {
                                        "x": 0.667,
                                        "y": 1
                                    },
                                    "o": {
                                        "x": 0.333,
                                        "y": 0
                                    },
                                    "t": 103,
                                    "s": [
                                        1023.125,
                                        458.875,
                                        0
                                    ],
                                    "to": [
                                        0,
                                        -16.667,
                                        0
                                    ],
                                    "ti": [
                                        0,
                                        19,
                                        0
                                    ]
                                },
                                {
                                    "i": {
                                        "x": 0.667,
                                        "y": 1
                                    },
                                    "o": {
                                        "x": 0.333,
                                        "y": 0
                                    },
                                    "t": 107,
                                    "s": [
                                        1023.125,
                                        358.875,
                                        0
                                    ],
                                    "to": [
                                        0,
                                        -19,
                                        0
                                    ],
                                    "ti": [
                                        0,
                                        -0.333,
                                        0
                                    ]
                                },
                                {
                                    "i": {
                                        "x": 0.667,
                                        "y": 0.791
                                    },
                                    "o": {
                                        "x": 0.333,
                                        "y": 0
                                    },
                                    "t": 118,
                                    "s": [
                                        1023.125,
                                        344.875,
                                        0
                                    ],
                                    "to": [
                                        0,
                                        0.27,
                                        0
                                    ],
                                    "ti": [
                                        0,
                                        -4.673,
                                        0
                                    ]
                                },
                                {
                                    "i": {
                                        "x": 0.667,
                                        "y": 1
                                    },
                                    "o": {
                                        "x": 0.333,
                                        "y": 0.259
                                    },
                                    "t": 124,
                                    "s": [
                                        1023.125,
                                        366.374,
                                        0
                                    ],
                                    "to": [
                                        0,
                                        1.104,
                                        0
                                    ],
                                    "ti": [
                                        0,
                                        -0.51,
                                        0
                                    ]
                                },
                                {
                                    "t": 126,
                                    "s": [
                                        1023.125,
                                        360.875,
                                        0
                                    ]
                                }
                            ],
                            "ix": 2,
                            "l": 2
                        },
                        "a": {
                            "a": 0,
                            "k": [
                                32.5,
                                139.5,
                                0
                            ],
                            "ix": 1,
                            "l": 2
                        },
                        "s": {
                            "a": 1,
                            "k": [
                                {
                                    "i": {
                                        "x": [
                                            0.667,
                                            0.667,
                                            0.667
                                        ],
                                        "y": [
                                            1,
                                            1,
                                            1
                                        ]
                                    },
                                    "o": {
                                        "x": [
                                            0.333,
                                            0.333,
                                            0.333
                                        ],
                                        "y": [
                                            0,
                                            0,
                                            0
                                        ]
                                    },
                                    "t": 103,
                                    "s": [
                                        44,
                                        0,
                                        100
                                    ]
                                },
                                {
                                    "i": {
                                        "x": [
                                            0.667,
                                            0.667,
                                            0.667
                                        ],
                                        "y": [
                                            1,
                                            1,
                                            1
                                        ]
                                    },
                                    "o": {
                                        "x": [
                                            0.333,
                                            0.333,
                                            0.333
                                        ],
                                        "y": [
                                            0,
                                            0,
                                            0
                                        ]
                                    },
                                    "t": 107,
                                    "s": [
                                        44,
                                        44,
                                        100
                                    ]
                                },
                                {
                                    "i": {
                                        "x": [
                                            0.667,
                                            0.667,
                                            0.667
                                        ],
                                        "y": [
                                            1,
                                            0.88,
                                            11.5
                                        ]
                                    },
                                    "o": {
                                        "x": [
                                            0.333,
                                            0.333,
                                            0.333
                                        ],
                                        "y": [
                                            0,
                                            0,
                                            0
                                        ]
                                    },
                                    "t": 118,
                                    "s": [
                                        44,
                                        51,
                                        100
                                    ]
                                },
                                {
                                    "i": {
                                        "x": [
                                            0.667,
                                            0.667,
                                            0.667
                                        ],
                                        "y": [
                                            1,
                                            1,
                                            1
                                        ]
                                    },
                                    "o": {
                                        "x": [
                                            0.333,
                                            0.333,
                                            0.333
                                        ],
                                        "y": [
                                            0,
                                            -0.252,
                                            -7.875
                                        ]
                                    },
                                    "t": 122,
                                    "s": [
                                        44,
                                        40.094,
                                        100
                                    ]
                                },
                                {
                                    "t": 125,
                                    "s": [
                                        44,
                                        44,
                                        100
                                    ]
                                }
                            ],
                            "ix": 6,
                            "l": 2,
                            "x": "var $bm_rt;\nvar e, g, nMax, n, n, t, v, vl, vu, vu, tCur, segDur, tNext, nb, delta;\ne = 0.7;\ng = 4000;\nnMax = 9;\n$bm_rt = n = 0;\nif (numKeys > 0) {\n    $bm_rt = n = nearestKey(time).index;\n    if (key(n).time > time)\n        n--;\n}\nif (n > 0) {\n    t = $bm_sub(time, key(n).time);\n    v = $bm_mul($bm_neg(velocityAtTime($bm_sub(key(n).time, 0.001))), e);\n    vl = length(v);\n    if ($bm_isInstanceOfArray(value)) {\n        vu = vl > 0 ? normalize(v) : [\n            0,\n            0,\n            0\n        ];\n    } else {\n        vu = v < 0 ? -1 : 1;\n    }\n    tCur = 0;\n    segDur = $bm_div($bm_mul(2, vl), g);\n    tNext = segDur;\n    nb = 1;\n    while (tNext < t && nb <= nMax) {\n        vl *= e;\n        segDur *= e;\n        tCur = tNext;\n        tNext = $bm_sum(tNext, segDur);\n        nb++;\n    }\n    if (nb <= nMax) {\n        delta = $bm_sub(t, tCur);\n        $bm_rt = $bm_sum(value, $bm_mul($bm_mul(vu, delta), $bm_sub(vl, $bm_div($bm_mul(g, delta), 2))));\n    } else {\n        $bm_rt = value;\n    }\n} else\n    $bm_rt = value;"
                        }
                    },
                    "ao": 0,
                    "ip": 36,
                    "op": 786,
                    "st": 36,
                    "bm": 0
                },
                {
                    "ddd": 0,
                    "ind": 4,
                    "ty": 2,
                    "nm": "n/for-animated.ai",
                    "cl": "ai",
                    "refId": "image_3",
                    "sr": 1,
                    "ks": {
                        "o": {
                            "a": 0,
                            "k": 100,
                            "ix": 11
                        },
                        "r": {
                            "a": 0,
                            "k": 0,
                            "ix": 10
                        },
                        "p": {
                            "a": 1,
                            "k": [
                                {
                                    "i": {
                                        "x": 0.667,
                                        "y": 1
                                    },
                                    "o": {
                                        "x": 0.333,
                                        "y": 0
                                    },
                                    "t": 103,
                                    "s": [
                                        686,
                                        460,
                                        0
                                    ],
                                    "to": [
                                        0,
                                        -16.667,
                                        0
                                    ],
                                    "ti": [
                                        0,
                                        19,
                                        0
                                    ]
                                },
                                {
                                    "i": {
                                        "x": 0.667,
                                        "y": 1
                                    },
                                    "o": {
                                        "x": 0.333,
                                        "y": 0
                                    },
                                    "t": 107,
                                    "s": [
                                        686,
                                        360,
                                        0
                                    ],
                                    "to": [
                                        0,
                                        -19,
                                        0
                                    ],
                                    "ti": [
                                        0,
                                        -0.333,
                                        0
                                    ]
                                },
                                {
                                    "i": {
                                        "x": 0.667,
                                        "y": 0.791
                                    },
                                    "o": {
                                        "x": 0.333,
                                        "y": 0
                                    },
                                    "t": 118,
                                    "s": [
                                        686,
                                        346,
                                        0
                                    ],
                                    "to": [
                                        0,
                                        0.27,
                                        0
                                    ],
                                    "ti": [
                                        0,
                                        -4.673,
                                        0
                                    ]
                                },
                                {
                                    "i": {
                                        "x": 0.667,
                                        "y": 1
                                    },
                                    "o": {
                                        "x": 0.333,
                                        "y": 0.259
                                    },
                                    "t": 124,
                                    "s": [
                                        686,
                                        367.499,
                                        0
                                    ],
                                    "to": [
                                        0,
                                        1.104,
                                        0
                                    ],
                                    "ti": [
                                        0,
                                        -0.51,
                                        0
                                    ]
                                },
                                {
                                    "t": 126,
                                    "s": [
                                        686,
                                        362,
                                        0
                                    ]
                                }
                            ],
                            "ix": 2,
                            "l": 2
                        },
                        "a": {
                            "a": 0,
                            "k": [
                                116.5,
                                142.5,
                                0
                            ],
                            "ix": 1,
                            "l": 2
                        },
                        "s": {
                            "a": 1,
                            "k": [
                                {
                                    "i": {
                                        "x": [
                                            0.667,
                                            0.667,
                                            0.667
                                        ],
                                        "y": [
                                            1,
                                            1,
                                            1
                                        ]
                                    },
                                    "o": {
                                        "x": [
                                            0.333,
                                            0.333,
                                            0.333
                                        ],
                                        "y": [
                                            0,
                                            0,
                                            0
                                        ]
                                    },
                                    "t": 103,
                                    "s": [
                                        44,
                                        0,
                                        100
                                    ]
                                },
                                {
                                    "i": {
                                        "x": [
                                            0.667,
                                            0.667,
                                            0.667
                                        ],
                                        "y": [
                                            1,
                                            1,
                                            1
                                        ]
                                    },
                                    "o": {
                                        "x": [
                                            0.333,
                                            0.333,
                                            0.333
                                        ],
                                        "y": [
                                            0,
                                            0,
                                            0
                                        ]
                                    },
                                    "t": 107,
                                    "s": [
                                        44,
                                        44,
                                        100
                                    ]
                                },
                                {
                                    "i": {
                                        "x": [
                                            0.667,
                                            0.667,
                                            0.667
                                        ],
                                        "y": [
                                            1,
                                            0.88,
                                            11.5
                                        ]
                                    },
                                    "o": {
                                        "x": [
                                            0.333,
                                            0.333,
                                            0.333
                                        ],
                                        "y": [
                                            0,
                                            0,
                                            0
                                        ]
                                    },
                                    "t": 118,
                                    "s": [
                                        44,
                                        51,
                                        100
                                    ]
                                },
                                {
                                    "i": {
                                        "x": [
                                            0.667,
                                            0.667,
                                            0.667
                                        ],
                                        "y": [
                                            1,
                                            1,
                                            1
                                        ]
                                    },
                                    "o": {
                                        "x": [
                                            0.333,
                                            0.333,
                                            0.333
                                        ],
                                        "y": [
                                            0,
                                            -0.252,
                                            -7.875
                                        ]
                                    },
                                    "t": 122,
                                    "s": [
                                        44,
                                        40.094,
                                        100
                                    ]
                                },
                                {
                                    "t": 125,
                                    "s": [
                                        44,
                                        44,
                                        100
                                    ]
                                }
                            ],
                            "ix": 6,
                            "l": 2,
                            "x": "var $bm_rt;\nvar e, g, nMax, n, n, t, v, vl, vu, vu, tCur, segDur, tNext, nb, delta;\ne = 0.7;\ng = 4000;\nnMax = 9;\n$bm_rt = n = 0;\nif (numKeys > 0) {\n    $bm_rt = n = nearestKey(time).index;\n    if (key(n).time > time)\n        n--;\n}\nif (n > 0) {\n    t = $bm_sub(time, key(n).time);\n    v = $bm_mul($bm_neg(velocityAtTime($bm_sub(key(n).time, 0.001))), e);\n    vl = length(v);\n    if ($bm_isInstanceOfArray(value)) {\n        vu = vl > 0 ? normalize(v) : [\n            0,\n            0,\n            0\n        ];\n    } else {\n        vu = v < 0 ? -1 : 1;\n    }\n    tCur = 0;\n    segDur = $bm_div($bm_mul(2, vl), g);\n    tNext = segDur;\n    nb = 1;\n    while (tNext < t && nb <= nMax) {\n        vl *= e;\n        segDur *= e;\n        tCur = tNext;\n        tNext = $bm_sum(tNext, segDur);\n        nb++;\n    }\n    if (nb <= nMax) {\n        delta = $bm_sub(t, tCur);\n        $bm_rt = $bm_sum(value, $bm_mul($bm_mul(vu, delta), $bm_sub(vl, $bm_div($bm_mul(g, delta), 2))));\n    } else {\n        $bm_rt = value;\n    }\n} else\n    $bm_rt = value;"
                        }
                    },
                    "ao": 0,
                    "ip": 36,
                    "op": 786,
                    "st": 36,
                    "bm": 0
                },
                {
                    "ddd": 0,
                    "ind": 5,
                    "ty": 2,
                    "nm": "k/for-animated.ai",
                    "cl": "ai",
                    "refId": "image_4",
                    "sr": 1,
                    "ks": {
                        "o": {
                            "a": 0,
                            "k": 100,
                            "ix": 11
                        },
                        "r": {
                            "a": 0,
                            "k": 0,
                            "ix": 10
                        },
                        "p": {
                            "a": 1,
                            "k": [
                                {
                                    "i": {
                                        "x": 0.667,
                                        "y": 1
                                    },
                                    "o": {
                                        "x": 0.333,
                                        "y": 0
                                    },
                                    "t": 103,
                                    "s": [
                                        488.5,
                                        441,
                                        0
                                    ],
                                    "to": [
                                        0,
                                        -16.667,
                                        0
                                    ],
                                    "ti": [
                                        0,
                                        19,
                                        0
                                    ]
                                },
                                {
                                    "i": {
                                        "x": 0.667,
                                        "y": 1
                                    },
                                    "o": {
                                        "x": 0.333,
                                        "y": 0
                                    },
                                    "t": 107,
                                    "s": [
                                        488.5,
                                        341,
                                        0
                                    ],
                                    "to": [
                                        0,
                                        -19,
                                        0
                                    ],
                                    "ti": [
                                        0,
                                        -0.333,
                                        0
                                    ]
                                },
                                {
                                    "i": {
                                        "x": 0.667,
                                        "y": 0.791
                                    },
                                    "o": {
                                        "x": 0.333,
                                        "y": 0
                                    },
                                    "t": 118,
                                    "s": [
                                        488.5,
                                        327,
                                        0
                                    ],
                                    "to": [
                                        0,
                                        0.27,
                                        0
                                    ],
                                    "ti": [
                                        0,
                                        -4.673,
                                        0
                                    ]
                                },
                                {
                                    "i": {
                                        "x": 0.667,
                                        "y": 1
                                    },
                                    "o": {
                                        "x": 0.333,
                                        "y": 0.259
                                    },
                                    "t": 124,
                                    "s": [
                                        488.5,
                                        348.499,
                                        0
                                    ],
                                    "to": [
                                        0,
                                        1.104,
                                        0
                                    ],
                                    "ti": [
                                        0,
                                        -0.51,
                                        0
                                    ]
                                },
                                {
                                    "t": 126,
                                    "s": [
                                        488.5,
                                        343,
                                        0
                                    ]
                                }
                            ],
                            "ix": 2,
                            "l": 2
                        },
                        "a": {
                            "a": 0,
                            "k": [
                                150.5,
                                185,
                                0
                            ],
                            "ix": 1,
                            "l": 2
                        },
                        "s": {
                            "a": 1,
                            "k": [
                                {
                                    "i": {
                                        "x": [
                                            0.667,
                                            0.667,
                                            0.667
                                        ],
                                        "y": [
                                            1,
                                            1,
                                            1
                                        ]
                                    },
                                    "o": {
                                        "x": [
                                            0.333,
                                            0.333,
                                            0.333
                                        ],
                                        "y": [
                                            0,
                                            0,
                                            0
                                        ]
                                    },
                                    "t": 103,
                                    "s": [
                                        44,
                                        0,
                                        100
                                    ]
                                },
                                {
                                    "i": {
                                        "x": [
                                            0.667,
                                            0.667,
                                            0.667
                                        ],
                                        "y": [
                                            1,
                                            1,
                                            1
                                        ]
                                    },
                                    "o": {
                                        "x": [
                                            0.333,
                                            0.333,
                                            0.333
                                        ],
                                        "y": [
                                            0,
                                            0,
                                            0
                                        ]
                                    },
                                    "t": 107,
                                    "s": [
                                        44,
                                        44,
                                        100
                                    ]
                                },
                                {
                                    "i": {
                                        "x": [
                                            0.667,
                                            0.667,
                                            0.667
                                        ],
                                        "y": [
                                            1,
                                            0.88,
                                            11.5
                                        ]
                                    },
                                    "o": {
                                        "x": [
                                            0.333,
                                            0.333,
                                            0.333
                                        ],
                                        "y": [
                                            0,
                                            0,
                                            0
                                        ]
                                    },
                                    "t": 118,
                                    "s": [
                                        44,
                                        51,
                                        100
                                    ]
                                },
                                {
                                    "i": {
                                        "x": [
                                            0.667,
                                            0.667,
                                            0.667
                                        ],
                                        "y": [
                                            1,
                                            1,
                                            1
                                        ]
                                    },
                                    "o": {
                                        "x": [
                                            0.333,
                                            0.333,
                                            0.333
                                        ],
                                        "y": [
                                            0,
                                            -0.252,
                                            -7.875
                                        ]
                                    },
                                    "t": 122,
                                    "s": [
                                        44,
                                        40.094,
                                        100
                                    ]
                                },
                                {
                                    "t": 125,
                                    "s": [
                                        44,
                                        44,
                                        100
                                    ]
                                }
                            ],
                            "ix": 6,
                            "l": 2,
                            "x": "var $bm_rt;\nvar e, g, nMax, n, n, t, v, vl, vu, vu, tCur, segDur, tNext, nb, delta;\ne = 0.7;\ng = 4000;\nnMax = 9;\n$bm_rt = n = 0;\nif (numKeys > 0) {\n    $bm_rt = n = nearestKey(time).index;\n    if (key(n).time > time)\n        n--;\n}\nif (n > 0) {\n    t = $bm_sub(time, key(n).time);\n    v = $bm_mul($bm_neg(velocityAtTime($bm_sub(key(n).time, 0.001))), e);\n    vl = length(v);\n    if ($bm_isInstanceOfArray(value)) {\n        vu = vl > 0 ? normalize(v) : [\n            0,\n            0,\n            0\n        ];\n    } else {\n        vu = v < 0 ? -1 : 1;\n    }\n    tCur = 0;\n    segDur = $bm_div($bm_mul(2, vl), g);\n    tNext = segDur;\n    nb = 1;\n    while (tNext < t && nb <= nMax) {\n        vl *= e;\n        segDur *= e;\n        tCur = tNext;\n        tNext = $bm_sum(tNext, segDur);\n        nb++;\n    }\n    if (nb <= nMax) {\n        delta = $bm_sub(t, tCur);\n        $bm_rt = $bm_sum(value, $bm_mul($bm_mul(vu, delta), $bm_sub(vl, $bm_div($bm_mul(g, delta), 2))));\n    } else {\n        $bm_rt = value;\n    }\n} else\n    $bm_rt = value;"
                        }
                    },
                    "ao": 0,
                    "ip": 36,
                    "op": 786,
                    "st": 36,
                    "bm": 0
                },
                {
                    "ddd": 0,
                    "ind": 6,
                    "ty": 2,
                    "nm": "s/for-animated.ai",
                    "cl": "ai",
                    "refId": "image_5",
                    "sr": 1,
                    "ks": {
                        "o": {
                            "a": 0,
                            "k": 100,
                            "ix": 11
                        },
                        "r": {
                            "a": 0,
                            "k": 0,
                            "ix": 10
                        },
                        "p": {
                            "a": 1,
                            "k": [
                                {
                                    "i": {
                                        "x": 0.667,
                                        "y": 1
                                    },
                                    "o": {
                                        "x": 0.333,
                                        "y": 0
                                    },
                                    "t": 103,
                                    "s": [
                                        938,
                                        460,
                                        0
                                    ],
                                    "to": [
                                        0,
                                        -16.667,
                                        0
                                    ],
                                    "ti": [
                                        0,
                                        19,
                                        0
                                    ]
                                },
                                {
                                    "i": {
                                        "x": 0.667,
                                        "y": 1
                                    },
                                    "o": {
                                        "x": 0.333,
                                        "y": 0
                                    },
                                    "t": 107,
                                    "s": [
                                        938,
                                        360,
                                        0
                                    ],
                                    "to": [
                                        0,
                                        -19,
                                        0
                                    ],
                                    "ti": [
                                        0,
                                        -0.333,
                                        0
                                    ]
                                },
                                {
                                    "i": {
                                        "x": 0.667,
                                        "y": 0.791
                                    },
                                    "o": {
                                        "x": 0.333,
                                        "y": 0
                                    },
                                    "t": 118,
                                    "s": [
                                        938,
                                        346,
                                        0
                                    ],
                                    "to": [
                                        0,
                                        0.27,
                                        0
                                    ],
                                    "ti": [
                                        0,
                                        -4.673,
                                        0
                                    ]
                                },
                                {
                                    "i": {
                                        "x": 0.667,
                                        "y": 1
                                    },
                                    "o": {
                                        "x": 0.333,
                                        "y": 0.259
                                    },
                                    "t": 124,
                                    "s": [
                                        938,
                                        367.499,
                                        0
                                    ],
                                    "to": [
                                        0,
                                        1.104,
                                        0
                                    ],
                                    "ti": [
                                        0,
                                        -0.51,
                                        0
                                    ]
                                },
                                {
                                    "t": 126,
                                    "s": [
                                        938,
                                        362,
                                        0
                                    ]
                                }
                            ],
                            "ix": 2,
                            "l": 2
                        },
                        "a": {
                            "a": 0,
                            "k": [
                                102.5,
                                146.5,
                                0
                            ],
                            "ix": 1,
                            "l": 2
                        },
                        "s": {
                            "a": 1,
                            "k": [
                                {
                                    "i": {
                                        "x": [
                                            0.667,
                                            0.667,
                                            0.667
                                        ],
                                        "y": [
                                            1,
                                            1,
                                            1
                                        ]
                                    },
                                    "o": {
                                        "x": [
                                            0.333,
                                            0.333,
                                            0.333
                                        ],
                                        "y": [
                                            0,
                                            0,
                                            0
                                        ]
                                    },
                                    "t": 103,
                                    "s": [
                                        44,
                                        0,
                                        100
                                    ]
                                },
                                {
                                    "i": {
                                        "x": [
                                            0.667,
                                            0.667,
                                            0.667
                                        ],
                                        "y": [
                                            1,
                                            1,
                                            1
                                        ]
                                    },
                                    "o": {
                                        "x": [
                                            0.333,
                                            0.333,
                                            0.333
                                        ],
                                        "y": [
                                            0,
                                            0,
                                            0
                                        ]
                                    },
                                    "t": 107,
                                    "s": [
                                        44,
                                        44,
                                        100
                                    ]
                                },
                                {
                                    "i": {
                                        "x": [
                                            0.667,
                                            0.667,
                                            0.667
                                        ],
                                        "y": [
                                            1,
                                            0.88,
                                            11.5
                                        ]
                                    },
                                    "o": {
                                        "x": [
                                            0.333,
                                            0.333,
                                            0.333
                                        ],
                                        "y": [
                                            0,
                                            0,
                                            0
                                        ]
                                    },
                                    "t": 118,
                                    "s": [
                                        44,
                                        51,
                                        100
                                    ]
                                },
                                {
                                    "i": {
                                        "x": [
                                            0.667,
                                            0.667,
                                            0.667
                                        ],
                                        "y": [
                                            1,
                                            1,
                                            1
                                        ]
                                    },
                                    "o": {
                                        "x": [
                                            0.333,
                                            0.333,
                                            0.333
                                        ],
                                        "y": [
                                            0,
                                            -0.252,
                                            -7.875
                                        ]
                                    },
                                    "t": 122,
                                    "s": [
                                        44,
                                        40.094,
                                        100
                                    ]
                                },
                                {
                                    "t": 125,
                                    "s": [
                                        44,
                                        44,
                                        100
                                    ]
                                }
                            ],
                            "ix": 6,
                            "l": 2,
                            "x": "var $bm_rt;\nvar e, g, nMax, n, n, t, v, vl, vu, vu, tCur, segDur, tNext, nb, delta;\ne = 0.7;\ng = 4000;\nnMax = 9;\n$bm_rt = n = 0;\nif (numKeys > 0) {\n    $bm_rt = n = nearestKey(time).index;\n    if (key(n).time > time)\n        n--;\n}\nif (n > 0) {\n    t = $bm_sub(time, key(n).time);\n    v = $bm_mul($bm_neg(velocityAtTime($bm_sub(key(n).time, 0.001))), e);\n    vl = length(v);\n    if ($bm_isInstanceOfArray(value)) {\n        vu = vl > 0 ? normalize(v) : [\n            0,\n            0,\n            0\n        ];\n    } else {\n        vu = v < 0 ? -1 : 1;\n    }\n    tCur = 0;\n    segDur = $bm_div($bm_mul(2, vl), g);\n    tNext = segDur;\n    nb = 1;\n    while (tNext < t && nb <= nMax) {\n        vl *= e;\n        segDur *= e;\n        tCur = tNext;\n        tNext = $bm_sum(tNext, segDur);\n        nb++;\n    }\n    if (nb <= nMax) {\n        delta = $bm_sub(t, tCur);\n        $bm_rt = $bm_sum(value, $bm_mul($bm_mul(vu, delta), $bm_sub(vl, $bm_div($bm_mul(g, delta), 2))));\n    } else {\n        $bm_rt = value;\n    }\n} else\n    $bm_rt = value;"
                        }
                    },
                    "ao": 0,
                    "ip": 36,
                    "op": 786,
                    "st": 36,
                    "bm": 0
                },
                {
                    "ddd": 0,
                    "ind": 7,
                    "ty": 2,
                    "nm": "s2/for-animated.ai",
                    "cl": "ai",
                    "refId": "image_6",
                    "sr": 1,
                    "ks": {
                        "o": {
                            "a": 0,
                            "k": 100,
                            "ix": 11
                        },
                        "r": {
                            "a": 0,
                            "k": 0,
                            "ix": 10
                        },
                        "p": {
                            "a": 1,
                            "k": [
                                {
                                    "i": {
                                        "x": 0.667,
                                        "y": 1
                                    },
                                    "o": {
                                        "x": 0.333,
                                        "y": 0
                                    },
                                    "t": 103,
                                    "s": [
                                        1108,
                                        460,
                                        0
                                    ],
                                    "to": [
                                        0,
                                        -16.667,
                                        0
                                    ],
                                    "ti": [
                                        0,
                                        19,
                                        0
                                    ]
                                },
                                {
                                    "i": {
                                        "x": 0.667,
                                        "y": 1
                                    },
                                    "o": {
                                        "x": 0.333,
                                        "y": 0
                                    },
                                    "t": 107,
                                    "s": [
                                        1108,
                                        360,
                                        0
                                    ],
                                    "to": [
                                        0,
                                        -19,
                                        0
                                    ],
                                    "ti": [
                                        0,
                                        -0.333,
                                        0
                                    ]
                                },
                                {
                                    "i": {
                                        "x": 0.667,
                                        "y": 0.791
                                    },
                                    "o": {
                                        "x": 0.333,
                                        "y": 0
                                    },
                                    "t": 118,
                                    "s": [
                                        1108,
                                        346,
                                        0
                                    ],
                                    "to": [
                                        0,
                                        0.27,
                                        0
                                    ],
                                    "ti": [
                                        0,
                                        -4.673,
                                        0
                                    ]
                                },
                                {
                                    "i": {
                                        "x": 0.667,
                                        "y": 1
                                    },
                                    "o": {
                                        "x": 0.333,
                                        "y": 0.259
                                    },
                                    "t": 124,
                                    "s": [
                                        1108,
                                        367.499,
                                        0
                                    ],
                                    "to": [
                                        0,
                                        1.104,
                                        0
                                    ],
                                    "ti": [
                                        0,
                                        -0.51,
                                        0
                                    ]
                                },
                                {
                                    "t": 126,
                                    "s": [
                                        1108,
                                        362,
                                        0
                                    ]
                                }
                            ],
                            "ix": 2,
                            "l": 2
                        },
                        "a": {
                            "a": 0,
                            "k": [
                                102.5,
                                146.5,
                                0
                            ],
                            "ix": 1,
                            "l": 2
                        },
                        "s": {
                            "a": 1,
                            "k": [
                                {
                                    "i": {
                                        "x": [
                                            0.667,
                                            0.667,
                                            0.667
                                        ],
                                        "y": [
                                            1,
                                            1,
                                            1
                                        ]
                                    },
                                    "o": {
                                        "x": [
                                            0.333,
                                            0.333,
                                            0.333
                                        ],
                                        "y": [
                                            0,
                                            0,
                                            0
                                        ]
                                    },
                                    "t": 103,
                                    "s": [
                                        44,
                                        0,
                                        100
                                    ]
                                },
                                {
                                    "i": {
                                        "x": [
                                            0.667,
                                            0.667,
                                            0.667
                                        ],
                                        "y": [
                                            1,
                                            1,
                                            1
                                        ]
                                    },
                                    "o": {
                                        "x": [
                                            0.333,
                                            0.333,
                                            0.333
                                        ],
                                        "y": [
                                            0,
                                            0,
                                            0
                                        ]
                                    },
                                    "t": 107,
                                    "s": [
                                        44,
                                        44,
                                        100
                                    ]
                                },
                                {
                                    "i": {
                                        "x": [
                                            0.667,
                                            0.667,
                                            0.667
                                        ],
                                        "y": [
                                            1,
                                            0.88,
                                            11.5
                                        ]
                                    },
                                    "o": {
                                        "x": [
                                            0.333,
                                            0.333,
                                            0.333
                                        ],
                                        "y": [
                                            0,
                                            0,
                                            0
                                        ]
                                    },
                                    "t": 118,
                                    "s": [
                                        44,
                                        51,
                                        100
                                    ]
                                },
                                {
                                    "i": {
                                        "x": [
                                            0.667,
                                            0.667,
                                            0.667
                                        ],
                                        "y": [
                                            1,
                                            1,
                                            1
                                        ]
                                    },
                                    "o": {
                                        "x": [
                                            0.333,
                                            0.333,
                                            0.333
                                        ],
                                        "y": [
                                            0,
                                            -0.252,
                                            -7.875
                                        ]
                                    },
                                    "t": 122,
                                    "s": [
                                        44,
                                        40.094,
                                        100
                                    ]
                                },
                                {
                                    "t": 125,
                                    "s": [
                                        44,
                                        44,
                                        100
                                    ]
                                }
                            ],
                            "ix": 6,
                            "l": 2,
                            "x": "var $bm_rt;\nvar e, g, nMax, n, n, t, v, vl, vu, vu, tCur, segDur, tNext, nb, delta;\ne = 0.7;\ng = 4000;\nnMax = 9;\n$bm_rt = n = 0;\nif (numKeys > 0) {\n    $bm_rt = n = nearestKey(time).index;\n    if (key(n).time > time)\n        n--;\n}\nif (n > 0) {\n    t = $bm_sub(time, key(n).time);\n    v = $bm_mul($bm_neg(velocityAtTime($bm_sub(key(n).time, 0.001))), e);\n    vl = length(v);\n    if ($bm_isInstanceOfArray(value)) {\n        vu = vl > 0 ? normalize(v) : [\n            0,\n            0,\n            0\n        ];\n    } else {\n        vu = v < 0 ? -1 : 1;\n    }\n    tCur = 0;\n    segDur = $bm_div($bm_mul(2, vl), g);\n    tNext = segDur;\n    nb = 1;\n    while (tNext < t && nb <= nMax) {\n        vl *= e;\n        segDur *= e;\n        tCur = tNext;\n        tNext = $bm_sum(tNext, segDur);\n        nb++;\n    }\n    if (nb <= nMax) {\n        delta = $bm_sub(t, tCur);\n        $bm_rt = $bm_sum(value, $bm_mul($bm_mul(vu, delta), $bm_sub(vl, $bm_div($bm_mul(g, delta), 2))));\n    } else {\n        $bm_rt = value;\n    }\n} else\n    $bm_rt = value;"
                        }
                    },
                    "ao": 0,
                    "ip": 36,
                    "op": 786,
                    "st": 36,
                    "bm": 0
                },
                {
                    "ddd": 0,
                    "ind": 8,
                    "ty": 2,
                    "nm": "dot/for-animated.ai",
                    "cl": "ai",
                    "refId": "image_7",
                    "sr": 1,
                    "ks": {
                        "o": {
                            "a": 1,
                            "k": [
                                {
                                    "i": {
                                        "x": [
                                            0.833
                                        ],
                                        "y": [
                                            0.833
                                        ]
                                    },
                                    "o": {
                                        "x": [
                                            0.167
                                        ],
                                        "y": [
                                            0.167
                                        ]
                                    },
                                    "t": 112,
                                    "s": [
                                        0
                                    ]
                                },
                                {
                                    "t": 113,
                                    "s": [
                                        100
                                    ]
                                }
                            ],
                            "ix": 11
                        },
                        "r": {
                            "a": 0,
                            "k": 0,
                            "ix": 10
                        },
                        "p": {
                            "a": 1,
                            "k": [
                                {
                                    "i": {
                                        "x": 0.667,
                                        "y": 1
                                    },
                                    "o": {
                                        "x": 0.333,
                                        "y": 0
                                    },
                                    "t": 110,
                                    "s": [
                                        586.25,
                                        357.5,
                                        0
                                    ],
                                    "to": [
                                        0,
                                        -26.944,
                                        0
                                    ],
                                    "ti": [
                                        0,
                                        0.554,
                                        0
                                    ]
                                },
                                {
                                    "i": {
                                        "x": 0.667,
                                        "y": 1
                                    },
                                    "o": {
                                        "x": 0.333,
                                        "y": 0
                                    },
                                    "t": 115,
                                    "s": [
                                        586.25,
                                        195.836,
                                        0
                                    ],
                                    "to": [
                                        0,
                                        -2.464,
                                        0
                                    ],
                                    "ti": [
                                        0,
                                        -5.987,
                                        0
                                    ]
                                },
                                {
                                    "i": {
                                        "x": 0.667,
                                        "y": 1
                                    },
                                    "o": {
                                        "x": 0.333,
                                        "y": 0
                                    },
                                    "t": 122,
                                    "s": [
                                        586.25,
                                        262.978,
                                        0
                                    ],
                                    "to": [
                                        0,
                                        3.764,
                                        0
                                    ],
                                    "ti": [
                                        0,
                                        1.347,
                                        0
                                    ]
                                },
                                {
                                    "i": {
                                        "x": 0.667,
                                        "y": 1
                                    },
                                    "o": {
                                        "x": 0.333,
                                        "y": 0
                                    },
                                    "t": 125,
                                    "s": [
                                        586.25,
                                        247.811,
                                        0
                                    ],
                                    "to": [
                                        0,
                                        -1.125,
                                        0
                                    ],
                                    "ti": [
                                        0,
                                        -0.464,
                                        0
                                    ]
                                },
                                {
                                    "i": {
                                        "x": 0.667,
                                        "y": 1
                                    },
                                    "o": {
                                        "x": 0.333,
                                        "y": 0
                                    },
                                    "t": 129,
                                    "s": [
                                        586.25,
                                        273.184,
                                        0
                                    ],
                                    "to": [
                                        0,
                                        0.382,
                                        0
                                    ],
                                    "ti": [
                                        0,
                                        1.791,
                                        0
                                    ]
                                },
                                {
                                    "i": {
                                        "x": 0.667,
                                        "y": 1
                                    },
                                    "o": {
                                        "x": 0.333,
                                        "y": 0
                                    },
                                    "t": 132,
                                    "s": [
                                        586.25,
                                        263.37,
                                        0
                                    ],
                                    "to": [
                                        0,
                                        -2.33,
                                        0
                                    ],
                                    "ti": [
                                        0,
                                        0.556,
                                        0
                                    ]
                                },
                                {
                                    "t": 134,
                                    "s": [
                                        586.25,
                                        267.5,
                                        0
                                    ]
                                }
                            ],
                            "ix": 2,
                            "l": 2,
                            "x": "var $bm_rt;\nvar e, g, nMax, n, n, t, v, vl, vu, vu, tCur, segDur, tNext, nb, delta;\ne = 0.7;\ng = 4000;\nnMax = 9;\n$bm_rt = n = 0;\nif (numKeys > 0) {\n    $bm_rt = n = nearestKey(time).index;\n    if (key(n).time > time)\n        n--;\n}\nif (n > 0) {\n    t = $bm_sub(time, key(n).time);\n    v = $bm_mul($bm_neg(velocityAtTime($bm_sub(key(n).time, 0.001))), e);\n    vl = length(v);\n    if ($bm_isInstanceOfArray(value)) {\n        vu = vl > 0 ? normalize(v) : [\n            0,\n            0,\n            0\n        ];\n    } else {\n        vu = v < 0 ? -1 : 1;\n    }\n    tCur = 0;\n    segDur = $bm_div($bm_mul(2, vl), g);\n    tNext = segDur;\n    nb = 1;\n    while (tNext < t && nb <= nMax) {\n        vl *= e;\n        segDur *= e;\n        tCur = tNext;\n        tNext = $bm_sum(tNext, segDur);\n        nb++;\n    }\n    if (nb <= nMax) {\n        delta = $bm_sub(t, tCur);\n        $bm_rt = $bm_sum(value, $bm_mul($bm_mul(vu, delta), $bm_sub(vl, $bm_div($bm_mul(g, delta), 2))));\n    } else {\n        $bm_rt = value;\n    }\n} else\n    $bm_rt = value;"
                        },
                        "a": {
                            "a": 0,
                            "k": [
                                40,
                                40,
                                0
                            ],
                            "ix": 1,
                            "l": 2
                        },
                        "s": {
                            "a": 1,
                            "k": [
                                {
                                    "i": {
                                        "x": [
                                            0.833,
                                            0.833,
                                            0.833
                                        ],
                                        "y": [
                                            0.833,
                                            0.833,
                                            0.833
                                        ]
                                    },
                                    "o": {
                                        "x": [
                                            0.167,
                                            0.167,
                                            0.167
                                        ],
                                        "y": [
                                            0.167,
                                            0.167,
                                            0.167
                                        ]
                                    },
                                    "t": 107,
                                    "s": [
                                        0,
                                        0,
                                        100
                                    ]
                                },
                                {
                                    "t": 109,
                                    "s": [
                                        44,
                                        44,
                                        100
                                    ]
                                }
                            ],
                            "ix": 6,
                            "l": 2
                        }
                    },
                    "ao": 0,
                    "ip": 36,
                    "op": 786,
                    "st": 36,
                    "bm": 0
                },
                {
                    "ddd": 0,
                    "ind": 9,
                    "ty": 2,
                    "nm": "dot2/for-animated.ai",
                    "cl": "ai",
                    "refId": "image_8",
                    "sr": 1,
                    "ks": {
                        "o": {
                            "a": 1,
                            "k": [
                                {
                                    "i": {
                                        "x": [
                                            0.833
                                        ],
                                        "y": [
                                            0.833
                                        ]
                                    },
                                    "o": {
                                        "x": [
                                            0.167
                                        ],
                                        "y": [
                                            0.167
                                        ]
                                    },
                                    "t": 112,
                                    "s": [
                                        0
                                    ]
                                },
                                {
                                    "t": 113,
                                    "s": [
                                        100
                                    ]
                                }
                            ],
                            "ix": 11
                        },
                        "r": {
                            "a": 0,
                            "k": 0,
                            "ix": 10
                        },
                        "p": {
                            "a": 1,
                            "k": [
                                {
                                    "i": {
                                        "x": 0.667,
                                        "y": 1
                                    },
                                    "o": {
                                        "x": 0.333,
                                        "y": 0
                                    },
                                    "t": 110,
                                    "s": [
                                        1023.25,
                                        356.25,
                                        0
                                    ],
                                    "to": [
                                        0,
                                        -26.944,
                                        0
                                    ],
                                    "ti": [
                                        0,
                                        0.554,
                                        0
                                    ]
                                },
                                {
                                    "i": {
                                        "x": 0.667,
                                        "y": 1
                                    },
                                    "o": {
                                        "x": 0.333,
                                        "y": 0
                                    },
                                    "t": 115,
                                    "s": [
                                        1023.25,
                                        194.586,
                                        0
                                    ],
                                    "to": [
                                        0,
                                        -2.464,
                                        0
                                    ],
                                    "ti": [
                                        0,
                                        -5.987,
                                        0
                                    ]
                                },
                                {
                                    "i": {
                                        "x": 0.667,
                                        "y": 1
                                    },
                                    "o": {
                                        "x": 0.333,
                                        "y": 0
                                    },
                                    "t": 122,
                                    "s": [
                                        1023.25,
                                        261.728,
                                        0
                                    ],
                                    "to": [
                                        0,
                                        3.764,
                                        0
                                    ],
                                    "ti": [
                                        0,
                                        1.347,
                                        0
                                    ]
                                },
                                {
                                    "i": {
                                        "x": 0.667,
                                        "y": 1
                                    },
                                    "o": {
                                        "x": 0.333,
                                        "y": 0
                                    },
                                    "t": 125,
                                    "s": [
                                        1023.25,
                                        246.561,
                                        0
                                    ],
                                    "to": [
                                        0,
                                        -1.125,
                                        0
                                    ],
                                    "ti": [
                                        0,
                                        -0.464,
                                        0
                                    ]
                                },
                                {
                                    "i": {
                                        "x": 0.667,
                                        "y": 1
                                    },
                                    "o": {
                                        "x": 0.333,
                                        "y": 0
                                    },
                                    "t": 129,
                                    "s": [
                                        1023.25,
                                        271.934,
                                        0
                                    ],
                                    "to": [
                                        0,
                                        0.382,
                                        0
                                    ],
                                    "ti": [
                                        0,
                                        1.791,
                                        0
                                    ]
                                },
                                {
                                    "i": {
                                        "x": 0.667,
                                        "y": 1
                                    },
                                    "o": {
                                        "x": 0.333,
                                        "y": 0
                                    },
                                    "t": 132,
                                    "s": [
                                        1023.25,
                                        262.12,
                                        0
                                    ],
                                    "to": [
                                        0,
                                        -2.33,
                                        0
                                    ],
                                    "ti": [
                                        0,
                                        0.556,
                                        0
                                    ]
                                },
                                {
                                    "t": 134,
                                    "s": [
                                        1023.25,
                                        266.25,
                                        0
                                    ]
                                }
                            ],
                            "ix": 2,
                            "l": 2,
                            "x": "var $bm_rt;\nvar e, g, nMax, n, n, t, v, vl, vu, vu, tCur, segDur, tNext, nb, delta;\ne = 0.7;\ng = 4000;\nnMax = 9;\n$bm_rt = n = 0;\nif (numKeys > 0) {\n    $bm_rt = n = nearestKey(time).index;\n    if (key(n).time > time)\n        n--;\n}\nif (n > 0) {\n    t = $bm_sub(time, key(n).time);\n    v = $bm_mul($bm_neg(velocityAtTime($bm_sub(key(n).time, 0.001))), e);\n    vl = length(v);\n    if ($bm_isInstanceOfArray(value)) {\n        vu = vl > 0 ? normalize(v) : [\n            0,\n            0,\n            0\n        ];\n    } else {\n        vu = v < 0 ? -1 : 1;\n    }\n    tCur = 0;\n    segDur = $bm_div($bm_mul(2, vl), g);\n    tNext = segDur;\n    nb = 1;\n    while (tNext < t && nb <= nMax) {\n        vl *= e;\n        segDur *= e;\n        tCur = tNext;\n        tNext = $bm_sum(tNext, segDur);\n        nb++;\n    }\n    if (nb <= nMax) {\n        delta = $bm_sub(t, tCur);\n        $bm_rt = $bm_sum(value, $bm_mul($bm_mul(vu, delta), $bm_sub(vl, $bm_div($bm_mul(g, delta), 2))));\n    } else {\n        $bm_rt = value;\n    }\n} else\n    $bm_rt = value;"
                        },
                        "a": {
                            "a": 0,
                            "k": [
                                40,
                                40,
                                0
                            ],
                            "ix": 1,
                            "l": 2
                        },
                        "s": {
                            "a": 1,
                            "k": [
                                {
                                    "i": {
                                        "x": [
                                            0.833,
                                            0.833,
                                            0.833
                                        ],
                                        "y": [
                                            0.833,
                                            0.833,
                                            0.833
                                        ]
                                    },
                                    "o": {
                                        "x": [
                                            0.167,
                                            0.167,
                                            0.167
                                        ],
                                        "y": [
                                            0.167,
                                            0.167,
                                            0.167
                                        ]
                                    },
                                    "t": 107,
                                    "s": [
                                        0,
                                        0,
                                        100
                                    ]
                                },
                                {
                                    "t": 109,
                                    "s": [
                                        44,
                                        44,
                                        100
                                    ]
                                }
                            ],
                            "ix": 6,
                            "l": 2
                        }
                    },
                    "ao": 0,
                    "ip": 36,
                    "op": 786,
                    "st": 36,
                    "bm": 0
                },
                {
                    "ddd": 0,
                    "ind": 10,
                    "ty": 2,
                    "nm": "row-yellow/for-animated.ai",
                    "cl": "ai",
                    "refId": "image_9",
                    "sr": 1,
                    "ks": {
                        "o": {
                            "a": 1,
                            "k": [
                                {
                                    "i": {
                                        "x": [
                                            0.667
                                        ],
                                        "y": [
                                            1
                                        ]
                                    },
                                    "o": {
                                        "x": [
                                            0.333
                                        ],
                                        "y": [
                                            0
                                        ]
                                    },
                                    "t": 100,
                                    "s": [
                                        0
                                    ]
                                },
                                {
                                    "i": {
                                        "x": [
                                            0.667
                                        ],
                                        "y": [
                                            1
                                        ]
                                    },
                                    "o": {
                                        "x": [
                                            0.333
                                        ],
                                        "y": [
                                            0
                                        ]
                                    },
                                    "t": 101,
                                    "s": [
                                        0
                                    ]
                                },
                                {
                                    "i": {
                                        "x": [
                                            0.667
                                        ],
                                        "y": [
                                            1
                                        ]
                                    },
                                    "o": {
                                        "x": [
                                            0.333
                                        ],
                                        "y": [
                                            0
                                        ]
                                    },
                                    "t": 103,
                                    "s": [
                                        100
                                    ]
                                },
                                {
                                    "t": 105,
                                    "s": [
                                        100
                                    ]
                                }
                            ],
                            "ix": 11
                        },
                        "r": {
                            "a": 0,
                            "k": 0,
                            "ix": 10
                        },
                        "p": {
                            "a": 1,
                            "k": [
                                {
                                    "i": {
                                        "x": 0.667,
                                        "y": 1
                                    },
                                    "o": {
                                        "x": 0.333,
                                        "y": 0
                                    },
                                    "t": 92,
                                    "s": [
                                        70,
                                        552,
                                        0
                                    ],
                                    "to": [
                                        36.667,
                                        -36.667,
                                        0
                                    ],
                                    "ti": [
                                        -40,
                                        40,
                                        0
                                    ]
                                },
                                {
                                    "i": {
                                        "x": 0.667,
                                        "y": 1
                                    },
                                    "o": {
                                        "x": 0.333,
                                        "y": 0
                                    },
                                    "t": 105,
                                    "s": [
                                        290,
                                        332,
                                        0
                                    ],
                                    "to": [
                                        40,
                                        -40,
                                        0
                                    ],
                                    "ti": [
                                        3.333,
                                        -3.333,
                                        0
                                    ]
                                },
                                {
                                    "i": {
                                        "x": 0.667,
                                        "y": 0.621
                                    },
                                    "o": {
                                        "x": 0.333,
                                        "y": 0
                                    },
                                    "t": 110,
                                    "s": [
                                        310,
                                        312,
                                        0
                                    ],
                                    "to": [
                                        -2.068,
                                        2.068,
                                        0
                                    ],
                                    "ti": [
                                        10.55,
                                        -10.568,
                                        0
                                    ]
                                },
                                {
                                    "i": {
                                        "x": 0.667,
                                        "y": 1
                                    },
                                    "o": {
                                        "x": 0.19,
                                        "y": 1
                                    },
                                    "t": 116,
                                    "s": [
                                        265.817,
                                        356.329,
                                        0
                                    ],
                                    "to": [
                                        -6.454,
                                        6.465,
                                        0
                                    ],
                                    "ti": [
                                        -2.03,
                                        1.721,
                                        0
                                    ]
                                },
                                {
                                    "i": {
                                        "x": 0.667,
                                        "y": 0.667
                                    },
                                    "o": {
                                        "x": 0.333,
                                        "y": 0.333
                                    },
                                    "t": 125,
                                    "s": [
                                        278,
                                        346,
                                        0
                                    ],
                                    "to": [
                                        0,
                                        0,
                                        0
                                    ],
                                    "ti": [
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    "t": 141,
                                    "s": [
                                        278,
                                        346,
                                        0
                                    ]
                                }
                            ],
                            "ix": 2,
                            "l": 2,
                            "x": "var $bm_rt;\nvar n, n, t, t, v, amp, freq, decay;\n$bm_rt = n = 0;\nif (numKeys > 0) {\n    $bm_rt = n = nearestKey(time).index;\n    if (key(n).time > time) {\n        n--;\n    }\n}\nif (n == 0) {\n    $bm_rt = t = 0;\n} else {\n    $bm_rt = t = $bm_sub(time, key(n).time);\n}\nif (n > 0 && t < 1) {\n    v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\n    amp = 0.05;\n    freq = 4;\n    decay = 8;\n    $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\n} else {\n    $bm_rt = value;\n}"
                        },
                        "a": {
                            "a": 0,
                            "k": [
                                197.5,
                                197.5,
                                0
                            ],
                            "ix": 1,
                            "l": 2
                        },
                        "s": {
                            "a": 0,
                            "k": [
                                44,
                                44,
                                100
                            ],
                            "ix": 6,
                            "l": 2
                        }
                    },
                    "ao": 0,
                    "ip": 36,
                    "op": 786,
                    "st": 36,
                    "bm": 0
                },
                {
                    "ddd": 0,
                    "ind": 11,
                    "ty": 2,
                    "nm": "row-white/for-animated.ai",
                    "cl": "ai",
                    "refId": "image_10",
                    "sr": 1,
                    "ks": {
                        "o": {
                            "a": 1,
                            "k": [
                                {
                                    "i": {
                                        "x": [
                                            0.667
                                        ],
                                        "y": [
                                            1
                                        ]
                                    },
                                    "o": {
                                        "x": [
                                            0.333
                                        ],
                                        "y": [
                                            0
                                        ]
                                    },
                                    "t": 100,
                                    "s": [
                                        0
                                    ]
                                },
                                {
                                    "i": {
                                        "x": [
                                            0.667
                                        ],
                                        "y": [
                                            1
                                        ]
                                    },
                                    "o": {
                                        "x": [
                                            0.333
                                        ],
                                        "y": [
                                            0
                                        ]
                                    },
                                    "t": 101,
                                    "s": [
                                        0
                                    ]
                                },
                                {
                                    "i": {
                                        "x": [
                                            0.667
                                        ],
                                        "y": [
                                            1
                                        ]
                                    },
                                    "o": {
                                        "x": [
                                            0.333
                                        ],
                                        "y": [
                                            0
                                        ]
                                    },
                                    "t": 103,
                                    "s": [
                                        100
                                    ]
                                },
                                {
                                    "t": 105,
                                    "s": [
                                        100
                                    ]
                                }
                            ],
                            "ix": 11
                        },
                        "r": {
                            "a": 0,
                            "k": 0,
                            "ix": 10
                        },
                        "p": {
                            "a": 1,
                            "k": [
                                {
                                    "i": {
                                        "x": 0.833,
                                        "y": 1
                                    },
                                    "o": {
                                        "x": 0.333,
                                        "y": 0
                                    },
                                    "t": 92,
                                    "s": [
                                        0,
                                        624,
                                        0
                                    ],
                                    "to": [
                                        36.667,
                                        -36.667,
                                        0
                                    ],
                                    "ti": [
                                        -40,
                                        40,
                                        0
                                    ]
                                },
                                {
                                    "i": {
                                        "x": 0.833,
                                        "y": 1
                                    },
                                    "o": {
                                        "x": 0.333,
                                        "y": 0
                                    },
                                    "t": 105,
                                    "s": [
                                        220,
                                        404,
                                        0
                                    ],
                                    "to": [
                                        40,
                                        -40,
                                        0
                                    ],
                                    "ti": [
                                        3.333,
                                        -3.333,
                                        0
                                    ]
                                },
                                {
                                    "i": {
                                        "x": 0.668,
                                        "y": 0.624
                                    },
                                    "o": {
                                        "x": 0.296,
                                        "y": 0
                                    },
                                    "t": 110,
                                    "s": [
                                        240,
                                        384,
                                        0
                                    ],
                                    "to": [
                                        -1.824,
                                        1.824,
                                        0
                                    ],
                                    "ti": [
                                        9.384,
                                        -9.42,
                                        0
                                    ]
                                },
                                {
                                    "i": {
                                        "x": 0.667,
                                        "y": 1
                                    },
                                    "o": {
                                        "x": 0.178,
                                        "y": 1
                                    },
                                    "t": 116,
                                    "s": [
                                        199.587,
                                        424.549,
                                        0
                                    ],
                                    "to": [
                                        -7.769,
                                        7.799,
                                        0
                                    ],
                                    "ti": [
                                        -1.402,
                                        1.092,
                                        0
                                    ]
                                },
                                {
                                    "i": {
                                        "x": 0.667,
                                        "y": 0.667
                                    },
                                    "o": {
                                        "x": 0.333,
                                        "y": 0.333
                                    },
                                    "t": 125,
                                    "s": [
                                        208,
                                        418,
                                        0
                                    ],
                                    "to": [
                                        0,
                                        0,
                                        0
                                    ],
                                    "ti": [
                                        0,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    "t": 141,
                                    "s": [
                                        208,
                                        418,
                                        0
                                    ]
                                }
                            ],
                            "ix": 2,
                            "l": 2,
                            "x": "var $bm_rt;\nvar n, n, t, t, v, amp, freq, decay;\n$bm_rt = n = 0;\nif (numKeys > 0) {\n    $bm_rt = n = nearestKey(time).index;\n    if (key(n).time > time) {\n        n--;\n    }\n}\nif (n == 0) {\n    $bm_rt = t = 0;\n} else {\n    $bm_rt = t = $bm_sub(time, key(n).time);\n}\nif (n > 0 && t < 1) {\n    v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\n    amp = 0.05;\n    freq = 4;\n    decay = 8;\n    $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\n} else {\n    $bm_rt = value;\n}"
                        },
                        "a": {
                            "a": 0,
                            "k": [
                                197.5,
                                197.5,
                                0
                            ],
                            "ix": 1,
                            "l": 2
                        },
                        "s": {
                            "a": 0,
                            "k": [
                                44,
                                44,
                                100
                            ],
                            "ix": 6,
                            "l": 2
                        }
                    },
                    "ao": 0,
                    "ip": 36,
                    "op": 786,
                    "st": 36,
                    "bm": 0
                },
                {
                    "ddd": 1,
                    "ind": 12,
                    "ty": 2,
                    "nm": "squad/for-animated.ai",
                    "cl": "ai",
                    "refId": "image_11",
                    "sr": 1,
                    "ks": {
                        "o": {
                            "a": 1,
                            "k": [
                                {
                                    "i": {
                                        "x": [
                                            0.667
                                        ],
                                        "y": [
                                            1
                                        ]
                                    },
                                    "o": {
                                        "x": [
                                            0.333
                                        ],
                                        "y": [
                                            0
                                        ]
                                    },
                                    "t": 74,
                                    "s": [
                                        0
                                    ]
                                },
                                {
                                    "t": 77,
                                    "s": [
                                        100
                                    ]
                                }
                            ],
                            "ix": 11
                        },
                        "rx": {
                            "a": 0,
                            "k": 0,
                            "ix": 8
                        },
                        "ry": {
                            "a": 0,
                            "k": 0,
                            "ix": 9
                        },
                        "rz": {
                            "a": 0,
                            "k": 0,
                            "ix": 10
                        },
                        "or": {
                            "a": 0,
                            "k": [
                                0,
                                6.814,
                                0
                            ],
                            "ix": 7
                        },
                        "p": {
                            "a": 1,
                            "k": [
                                {
                                    "i": {
                                        "x": 0.667,
                                        "y": 1
                                    },
                                    "o": {
                                        "x": 0.333,
                                        "y": 0
                                    },
                                    "t": 91,
                                    "s": [
                                        641,
                                        451,
                                        0
                                    ],
                                    "to": [
                                        -77.833,
                                        0,
                                        0
                                    ],
                                    "ti": [
                                        77.833,
                                        0,
                                        0
                                    ]
                                },
                                {
                                    "t": 100,
                                    "s": [
                                        174,
                                        451,
                                        0
                                    ]
                                }
                            ],
                            "ix": 2
                        },
                        "a": {
                            "a": 0,
                            "k": [
                                118.5,
                                118.5,
                                0
                            ],
                            "ix": 1
                        },
                        "s": {
                            "a": 1,
                            "k": [
                                {
                                    "i": {
                                        "x": [
                                            0.833,
                                            0.833,
                                            0.833
                                        ],
                                        "y": [
                                            1,
                                            1,
                                            1
                                        ]
                                    },
                                    "o": {
                                        "x": [
                                            0.167,
                                            0.167,
                                            0.167
                                        ],
                                        "y": [
                                            0,
                                            0,
                                            0
                                        ]
                                    },
                                    "t": 73,
                                    "s": [
                                        25,
                                        22,
                                        44
                                    ]
                                },
                                {
                                    "i": {
                                        "x": [
                                            0.562,
                                            0.562,
                                            0.562
                                        ],
                                        "y": [
                                            0.817,
                                            0.819,
                                            1
                                        ]
                                    },
                                    "o": {
                                        "x": [
                                            0.195,
                                            0.195,
                                            0.195
                                        ],
                                        "y": [
                                            0,
                                            0,
                                            0
                                        ]
                                    },
                                    "t": 79,
                                    "s": [
                                        61,
                                        66,
                                        44
                                    ]
                                },
                                {
                                    "i": {
                                        "x": [
                                            0.655,
                                            0.655,
                                            0.655
                                        ],
                                        "y": [
                                            0.843,
                                            0.927,
                                            1
                                        ]
                                    },
                                    "o": {
                                        "x": [
                                            0.31,
                                            0.31,
                                            0.31
                                        ],
                                        "y": [
                                            -0.419,
                                            -0.182,
                                            0
                                        ]
                                    },
                                    "t": 83,
                                    "s": [
                                        38.479,
                                        36.444,
                                        44
                                    ]
                                },
                                {
                                    "i": {
                                        "x": [
                                            0.833,
                                            0.833,
                                            0.833
                                        ],
                                        "y": [
                                            1,
                                            1,
                                            1
                                        ]
                                    },
                                    "o": {
                                        "x": [
                                            0.417,
                                            0.417,
                                            0.417
                                        ],
                                        "y": [
                                            -0.687,
                                            -0.104,
                                            0
                                        ]
                                    },
                                    "t": 87,
                                    "s": [
                                        45.435,
                                        57.178,
                                        44
                                    ]
                                },
                                {
                                    "i": {
                                        "x": [
                                            0.833,
                                            0.833,
                                            0.833
                                        ],
                                        "y": [
                                            1,
                                            1,
                                            1
                                        ]
                                    },
                                    "o": {
                                        "x": [
                                            0.333,
                                            0.333,
                                            0.333
                                        ],
                                        "y": [
                                            0,
                                            0,
                                            0
                                        ]
                                    },
                                    "t": 90,
                                    "s": [
                                        44,
                                        44,
                                        44
                                    ]
                                },
                                {
                                    "i": {
                                        "x": [
                                            0.667,
                                            0.667,
                                            0.667
                                        ],
                                        "y": [
                                            1,
                                            1,
                                            1
                                        ]
                                    },
                                    "o": {
                                        "x": [
                                            0.333,
                                            0.333,
                                            0.333
                                        ],
                                        "y": [
                                            0,
                                            0,
                                            0
                                        ]
                                    },
                                    "t": 101,
                                    "s": [
                                        44,
                                        44,
                                        44
                                    ]
                                },
                                {
                                    "i": {
                                        "x": [
                                            0.667,
                                            0.667,
                                            0.667
                                        ],
                                        "y": [
                                            1.207,
                                            1.428,
                                            1
                                        ]
                                    },
                                    "o": {
                                        "x": [
                                            0.333,
                                            0.333,
                                            0.333
                                        ],
                                        "y": [
                                            0,
                                            0,
                                            0
                                        ]
                                    },
                                    "t": 106,
                                    "s": [
                                        56,
                                        55,
                                        44
                                    ]
                                },
                                {
                                    "i": {
                                        "x": [
                                            0.667,
                                            0.667,
                                            0.667
                                        ],
                                        "y": [
                                            1,
                                            1,
                                            1
                                        ]
                                    },
                                    "o": {
                                        "x": [
                                            0.333,
                                            0.333,
                                            0.333
                                        ],
                                        "y": [
                                            0.158,
                                            0.208,
                                            0
                                        ]
                                    },
                                    "t": 109,
                                    "s": [
                                        66.203,
                                        59.52,
                                        44
                                    ]
                                },
                                {
                                    "i": {
                                        "x": [
                                            0.667,
                                            0.667,
                                            0.667
                                        ],
                                        "y": [
                                            1,
                                            1,
                                            1
                                        ]
                                    },
                                    "o": {
                                        "x": [
                                            0.333,
                                            0.333,
                                            0.333
                                        ],
                                        "y": [
                                            0,
                                            0,
                                            0
                                        ]
                                    },
                                    "t": 114,
                                    "s": [
                                        44,
                                        44,
                                        44
                                    ]
                                },
                                {
                                    "i": {
                                        "x": [
                                            0.667,
                                            0.667,
                                            0.667
                                        ],
                                        "y": [
                                            1,
                                            1,
                                            1
                                        ]
                                    },
                                    "o": {
                                        "x": [
                                            0.333,
                                            0.333,
                                            0.333
                                        ],
                                        "y": [
                                            0,
                                            0,
                                            0
                                        ]
                                    },
                                    "t": 118,
                                    "s": [
                                        55,
                                        53,
                                        44
                                    ]
                                },
                                {
                                    "t": 123,
                                    "s": [
                                        44,
                                        44,
                                        44
                                    ]
                                }
                            ],
                            "ix": 6
                        }
                    },
                    "ao": 0,
                    "ip": 0,
                    "op": 750,
                    "st": 0,
                    "bm": 0
                }
            ],
            "markers": []
        },
        container: document.getElementById("kinesis-animated"),
        path: "kinesis.json",
        renderer: "svg", // Required
        loop: true, // Optional
        autoplay: true, // Optional
        name: "kinesis", // Name for future reference. Optional.
    });

    let code = bodymovin.loadAnimation({
        animationData: {
            "v": "5.7.6",
            "fr": 25,
            "ip": 73,
            "op": 163,
            "w": 1080,
            "h": 1080,
            "nm": "Code Window",
            "ddd": 0,
            "assets": [
                {
                    "id": "comp_0",
                    "layers": [
                        {
                            "ddd": 0,
                            "ind": 1,
                            "ty": 4,
                            "nm": "Code 8",
                            "sr": 1,
                            "ks": {
                                "o": {
                                    "a": 0,
                                    "k": 100,
                                    "ix": 11
                                },
                                "r": {
                                    "a": 0,
                                    "k": 0,
                                    "ix": 10
                                },
                                "p": {
                                    "a": 0,
                                    "k": [
                                        930.976,
                                        573.503,
                                        0
                                    ],
                                    "ix": 2,
                                    "l": 2
                                },
                                "a": {
                                    "a": 0,
                                    "k": [
                                        870.976,
                                        321.003,
                                        0
                                    ],
                                    "ix": 1,
                                    "l": 2
                                },
                                "s": {
                                    "a": 0,
                                    "k": [
                                        100,
                                        100,
                                        100
                                    ],
                                    "ix": 6,
                                    "l": 2
                                }
                            },
                            "ao": 0,
                            "shapes": [
                                {
                                    "ty": "gr",
                                    "it": [
                                        {
                                            "ty": "gr",
                                            "it": [
                                                {
                                                    "ind": 0,
                                                    "ty": "sh",
                                                    "ix": 1,
                                                    "ks": {
                                                        "a": 0,
                                                        "k": {
                                                            "i": [
                                                                [
                                                                    0,
                                                                    0
                                                                ],
                                                                [
                                                                    0,
                                                                    0
                                                                ]
                                                            ],
                                                            "o": [
                                                                [
                                                                    0,
                                                                    0
                                                                ],
                                                                [
                                                                    0,
                                                                    0
                                                                ]
                                                            ],
                                                            "v": [
                                                                [
                                                                    -319.334,
                                                                    0
                                                                ],
                                                                [
                                                                    319.334,
                                                                    0
                                                                ]
                                                            ],
                                                            "c": false
                                                        },
                                                        "ix": 2
                                                    },
                                                    "nm": "Path 1",
                                                    "mn": "ADBE Vector Shape - Group",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "st",
                                                    "c": {
                                                        "a": 0,
                                                        "k": [
                                                            0,
                                                            0,
                                                            0.003921568859,
                                                            1
                                                        ],
                                                        "ix": 3,
                                                        "x": "var $bm_rt;\n$bm_rt = thisComp.layer('Color CTRL').content('Color A').content('Fill 1').color;"
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 100,
                                                        "ix": 4
                                                    },
                                                    "w": {
                                                        "a": 0,
                                                        "k": 30,
                                                        "ix": 5
                                                    },
                                                    "lc": 2,
                                                    "lj": 2,
                                                    "bm": 0,
                                                    "nm": "Stroke 1",
                                                    "mn": "ADBE Vector Graphic - Stroke",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "tm",
                                                    "s": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 1
                                                    },
                                                    "e": {
                                                        "a": 1,
                                                        "k": [
                                                            {
                                                                "i": {
                                                                    "x": [
                                                                        0.833
                                                                    ],
                                                                    "y": [
                                                                        0.833
                                                                    ]
                                                                },
                                                                "o": {
                                                                    "x": [
                                                                        0.167
                                                                    ],
                                                                    "y": [
                                                                        0.167
                                                                    ]
                                                                },
                                                                "t": 70,
                                                                "s": [
                                                                    0
                                                                ]
                                                            },
                                                            {
                                                                "t": 95,
                                                                "s": [
                                                                    100
                                                                ]
                                                            }
                                                        ],
                                                        "ix": 2
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 3
                                                    },
                                                    "m": 1,
                                                    "ix": 3,
                                                    "nm": "Trim Paths 1",
                                                    "mn": "ADBE Vector Filter - Trim",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "tr",
                                                    "p": {
                                                        "a": 0,
                                                        "k": [
                                                            297.334,
                                                            530.604
                                                        ],
                                                        "ix": 2
                                                    },
                                                    "a": {
                                                        "a": 0,
                                                        "k": [
                                                            0,
                                                            0
                                                        ],
                                                        "ix": 1
                                                    },
                                                    "s": {
                                                        "a": 0,
                                                        "k": [
                                                            100,
                                                            100
                                                        ],
                                                        "ix": 3
                                                    },
                                                    "r": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 6
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 100,
                                                        "ix": 7
                                                    },
                                                    "sk": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 4
                                                    },
                                                    "sa": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 5
                                                    },
                                                    "nm": "Transform"
                                                }
                                            ],
                                            "nm": "Group 9",
                                            "np": 3,
                                            "cix": 2,
                                            "bm": 0,
                                            "ix": 1,
                                            "mn": "ADBE Vector Group",
                                            "hd": false
                                        },
                                        {
                                            "ty": "gr",
                                            "it": [
                                                {
                                                    "ind": 0,
                                                    "ty": "sh",
                                                    "ix": 1,
                                                    "ks": {
                                                        "a": 0,
                                                        "k": {
                                                            "i": [
                                                                [
                                                                    0,
                                                                    0
                                                                ],
                                                                [
                                                                    0,
                                                                    0
                                                                ]
                                                            ],
                                                            "o": [
                                                                [
                                                                    0,
                                                                    0
                                                                ],
                                                                [
                                                                    0,
                                                                    0
                                                                ]
                                                            ],
                                                            "v": [
                                                                [
                                                                    -288.971,
                                                                    0
                                                                ],
                                                                [
                                                                    -123.029,
                                                                    0
                                                                ]
                                                            ],
                                                            "c": false
                                                        },
                                                        "ix": 2
                                                    },
                                                    "nm": "Path 1",
                                                    "mn": "ADBE Vector Shape - Group",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "st",
                                                    "c": {
                                                        "a": 0,
                                                        "k": [
                                                            0,
                                                            0,
                                                            0.011764706112,
                                                            1
                                                        ],
                                                        "ix": 3,
                                                        "x": "var $bm_rt;\n$bm_rt = thisComp.layer('Color CTRL').content('Color B').content('Fill 1').color;"
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 100,
                                                        "ix": 4
                                                    },
                                                    "w": {
                                                        "a": 0,
                                                        "k": 30,
                                                        "ix": 5
                                                    },
                                                    "lc": 2,
                                                    "lj": 2,
                                                    "bm": 0,
                                                    "nm": "Stroke 1",
                                                    "mn": "ADBE Vector Graphic - Stroke",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "tm",
                                                    "s": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 1
                                                    },
                                                    "e": {
                                                        "a": 1,
                                                        "k": [
                                                            {
                                                                "i": {
                                                                    "x": [
                                                                        0.833
                                                                    ],
                                                                    "y": [
                                                                        0.833
                                                                    ]
                                                                },
                                                                "o": {
                                                                    "x": [
                                                                        0.167
                                                                    ],
                                                                    "y": [
                                                                        0.167
                                                                    ]
                                                                },
                                                                "t": 95,
                                                                "s": [
                                                                    0
                                                                ]
                                                            },
                                                            {
                                                                "t": 106,
                                                                "s": [
                                                                    100
                                                                ]
                                                            }
                                                        ],
                                                        "ix": 2
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 3
                                                    },
                                                    "m": 1,
                                                    "ix": 3,
                                                    "nm": "Trim Paths 1",
                                                    "mn": "ADBE Vector Filter - Trim",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "tr",
                                                    "p": {
                                                        "a": 0,
                                                        "k": [
                                                            997.51,
                                                            530.604
                                                        ],
                                                        "ix": 2
                                                    },
                                                    "a": {
                                                        "a": 0,
                                                        "k": [
                                                            0,
                                                            0
                                                        ],
                                                        "ix": 1
                                                    },
                                                    "s": {
                                                        "a": 0,
                                                        "k": [
                                                            100,
                                                            100
                                                        ],
                                                        "ix": 3
                                                    },
                                                    "r": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 6
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 100,
                                                        "ix": 7
                                                    },
                                                    "sk": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 4
                                                    },
                                                    "sa": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 5
                                                    },
                                                    "nm": "Transform"
                                                }
                                            ],
                                            "nm": "Group 4",
                                            "np": 3,
                                            "cix": 2,
                                            "bm": 0,
                                            "ix": 2,
                                            "mn": "ADBE Vector Group",
                                            "hd": false
                                        },
                                        {
                                            "ty": "tr",
                                            "p": {
                                                "a": 0,
                                                "k": [
                                                    632.241,
                                                    530.604
                                                ],
                                                "ix": 2
                                            },
                                            "a": {
                                                "a": 0,
                                                "k": [
                                                    632.241,
                                                    530.604
                                                ],
                                                "ix": 1
                                            },
                                            "s": {
                                                "a": 0,
                                                "k": [
                                                    100,
                                                    100
                                                ],
                                                "ix": 3
                                            },
                                            "r": {
                                                "a": 0,
                                                "k": 0,
                                                "ix": 6
                                            },
                                            "o": {
                                                "a": 0,
                                                "k": 100,
                                                "ix": 7
                                            },
                                            "sk": {
                                                "a": 0,
                                                "k": 0,
                                                "ix": 4
                                            },
                                            "sa": {
                                                "a": 0,
                                                "k": 0,
                                                "ix": 5
                                            },
                                            "nm": "Transform"
                                        }
                                    ],
                                    "nm": "Group 43",
                                    "np": 2,
                                    "cix": 2,
                                    "bm": 0,
                                    "ix": 1,
                                    "mn": "ADBE Vector Group",
                                    "hd": false
                                }
                            ],
                            "ip": 70,
                            "op": 624,
                            "st": 70,
                            "bm": 0
                        },
                        {
                            "ddd": 0,
                            "ind": 2,
                            "ty": 4,
                            "nm": "Code 7",
                            "sr": 1,
                            "ks": {
                                "o": {
                                    "a": 0,
                                    "k": 100,
                                    "ix": 11
                                },
                                "r": {
                                    "a": 0,
                                    "k": 0,
                                    "ix": 10
                                },
                                "p": {
                                    "a": 0,
                                    "k": [
                                        930.976,
                                        573.503,
                                        0
                                    ],
                                    "ix": 2,
                                    "l": 2
                                },
                                "a": {
                                    "a": 0,
                                    "k": [
                                        870.976,
                                        321.003,
                                        0
                                    ],
                                    "ix": 1,
                                    "l": 2
                                },
                                "s": {
                                    "a": 0,
                                    "k": [
                                        100,
                                        100,
                                        100
                                    ],
                                    "ix": 6,
                                    "l": 2
                                }
                            },
                            "ao": 0,
                            "shapes": [
                                {
                                    "ty": "gr",
                                    "it": [
                                        {
                                            "ty": "gr",
                                            "it": [
                                                {
                                                    "ind": 0,
                                                    "ty": "sh",
                                                    "ix": 1,
                                                    "ks": {
                                                        "a": 0,
                                                        "k": {
                                                            "i": [
                                                                [
                                                                    0,
                                                                    0
                                                                ],
                                                                [
                                                                    0,
                                                                    0
                                                                ]
                                                            ],
                                                            "o": [
                                                                [
                                                                    0,
                                                                    0
                                                                ],
                                                                [
                                                                    0,
                                                                    0
                                                                ]
                                                            ],
                                                            "v": [
                                                                [
                                                                    -199.976,
                                                                    0
                                                                ],
                                                                [
                                                                    199.976,
                                                                    0
                                                                ]
                                                            ],
                                                            "c": false
                                                        },
                                                        "ix": 2
                                                    },
                                                    "nm": "Path 1",
                                                    "mn": "ADBE Vector Shape - Group",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "st",
                                                    "c": {
                                                        "a": 0,
                                                        "k": [
                                                            0,
                                                            0,
                                                            0.011764706112,
                                                            1
                                                        ],
                                                        "ix": 3,
                                                        "x": "var $bm_rt;\n$bm_rt = thisComp.layer('Color CTRL').content('Color B').content('Fill 1').color;"
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 100,
                                                        "ix": 4
                                                    },
                                                    "w": {
                                                        "a": 0,
                                                        "k": 30,
                                                        "ix": 5
                                                    },
                                                    "lc": 2,
                                                    "lj": 2,
                                                    "bm": 0,
                                                    "nm": "Stroke 1",
                                                    "mn": "ADBE Vector Graphic - Stroke",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "tm",
                                                    "s": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 1
                                                    },
                                                    "e": {
                                                        "a": 1,
                                                        "k": [
                                                            {
                                                                "i": {
                                                                    "x": [
                                                                        0.833
                                                                    ],
                                                                    "y": [
                                                                        0.833
                                                                    ]
                                                                },
                                                                "o": {
                                                                    "x": [
                                                                        0.167
                                                                    ],
                                                                    "y": [
                                                                        0.167
                                                                    ]
                                                                },
                                                                "t": 60,
                                                                "s": [
                                                                    0
                                                                ]
                                                            },
                                                            {
                                                                "t": 74.34765625,
                                                                "s": [
                                                                    100
                                                                ]
                                                            }
                                                        ],
                                                        "ix": 2
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 3
                                                    },
                                                    "m": 1,
                                                    "ix": 3,
                                                    "nm": "Trim Paths 1",
                                                    "mn": "ADBE Vector Filter - Trim",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "tr",
                                                    "p": {
                                                        "a": 0,
                                                        "k": [
                                                            177.976,
                                                            460.804
                                                        ],
                                                        "ix": 2
                                                    },
                                                    "a": {
                                                        "a": 0,
                                                        "k": [
                                                            0,
                                                            0
                                                        ],
                                                        "ix": 1
                                                    },
                                                    "s": {
                                                        "a": 0,
                                                        "k": [
                                                            100,
                                                            100
                                                        ],
                                                        "ix": 3
                                                    },
                                                    "r": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 6
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 100,
                                                        "ix": 7
                                                    },
                                                    "sk": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 4
                                                    },
                                                    "sa": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 5
                                                    },
                                                    "nm": "Transform"
                                                }
                                            ],
                                            "nm": "Group 8",
                                            "np": 3,
                                            "cix": 2,
                                            "bm": 0,
                                            "ix": 1,
                                            "mn": "ADBE Vector Group",
                                            "hd": false
                                        },
                                        {
                                            "ty": "gr",
                                            "it": [
                                                {
                                                    "ind": 0,
                                                    "ty": "sh",
                                                    "ix": 1,
                                                    "ks": {
                                                        "a": 0,
                                                        "k": {
                                                            "i": [
                                                                [
                                                                    0,
                                                                    0
                                                                ],
                                                                [
                                                                    0,
                                                                    0
                                                                ]
                                                            ],
                                                            "o": [
                                                                [
                                                                    0,
                                                                    0
                                                                ],
                                                                [
                                                                    0,
                                                                    0
                                                                ]
                                                            ],
                                                            "v": [
                                                                [
                                                                    -164.378,
                                                                    0
                                                                ],
                                                                [
                                                                    164.378,
                                                                    0
                                                                ]
                                                            ],
                                                            "c": false
                                                        },
                                                        "ix": 2
                                                    },
                                                    "nm": "Path 1",
                                                    "mn": "ADBE Vector Shape - Group",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "tm",
                                                    "s": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 1
                                                    },
                                                    "e": {
                                                        "a": 1,
                                                        "k": [
                                                            {
                                                                "i": {
                                                                    "x": [
                                                                        0.833
                                                                    ],
                                                                    "y": [
                                                                        0.833
                                                                    ]
                                                                },
                                                                "o": {
                                                                    "x": [
                                                                        0.167
                                                                    ],
                                                                    "y": [
                                                                        0.167
                                                                    ]
                                                                },
                                                                "t": 74.348,
                                                                "s": [
                                                                    0
                                                                ]
                                                            },
                                                            {
                                                                "t": 87.2607421875,
                                                                "s": [
                                                                    100
                                                                ]
                                                            }
                                                        ],
                                                        "ix": 2
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 3
                                                    },
                                                    "m": 1,
                                                    "ix": 2,
                                                    "nm": "Trim Paths 1",
                                                    "mn": "ADBE Vector Filter - Trim",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "st",
                                                    "c": {
                                                        "a": 0,
                                                        "k": [
                                                            0,
                                                            0,
                                                            0.011764706112,
                                                            1
                                                        ],
                                                        "ix": 3,
                                                        "x": "var $bm_rt;\n$bm_rt = thisComp.layer('Color CTRL').content('Color B').content('Fill 1').color;"
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 100,
                                                        "ix": 4
                                                    },
                                                    "w": {
                                                        "a": 0,
                                                        "k": 30,
                                                        "ix": 5
                                                    },
                                                    "lc": 2,
                                                    "lj": 2,
                                                    "bm": 0,
                                                    "nm": "Stroke 1",
                                                    "mn": "ADBE Vector Graphic - Stroke",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "tr",
                                                    "p": {
                                                        "a": 0,
                                                        "k": [
                                                            623.357,
                                                            460.804
                                                        ],
                                                        "ix": 2
                                                    },
                                                    "a": {
                                                        "a": 0,
                                                        "k": [
                                                            0,
                                                            0
                                                        ],
                                                        "ix": 1
                                                    },
                                                    "s": {
                                                        "a": 0,
                                                        "k": [
                                                            100,
                                                            100
                                                        ],
                                                        "ix": 3
                                                    },
                                                    "r": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 6
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 100,
                                                        "ix": 7
                                                    },
                                                    "sk": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 4
                                                    },
                                                    "sa": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 5
                                                    },
                                                    "nm": "Transform"
                                                }
                                            ],
                                            "nm": "Group 3",
                                            "np": 3,
                                            "cix": 2,
                                            "bm": 0,
                                            "ix": 2,
                                            "mn": "ADBE Vector Group",
                                            "hd": false
                                        },
                                        {
                                            "ty": "gr",
                                            "it": [
                                                {
                                                    "ind": 0,
                                                    "ty": "sh",
                                                    "ix": 1,
                                                    "ks": {
                                                        "a": 0,
                                                        "k": {
                                                            "i": [
                                                                [
                                                                    0,
                                                                    0
                                                                ],
                                                                [
                                                                    0,
                                                                    0
                                                                ]
                                                            ],
                                                            "o": [
                                                                [
                                                                    0,
                                                                    0
                                                                ],
                                                                [
                                                                    0,
                                                                    0
                                                                ]
                                                            ],
                                                            "v": [
                                                                [
                                                                    -69.102,
                                                                    0
                                                                ],
                                                                [
                                                                    69.102,
                                                                    0
                                                                ]
                                                            ],
                                                            "c": false
                                                        },
                                                        "ix": 2
                                                    },
                                                    "nm": "Path 1",
                                                    "mn": "ADBE Vector Shape - Group",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "st",
                                                    "c": {
                                                        "a": 0,
                                                        "k": [
                                                            0,
                                                            0,
                                                            0.003921568859,
                                                            1
                                                        ],
                                                        "ix": 3,
                                                        "x": "var $bm_rt;\n$bm_rt = thisComp.layer('Color CTRL').content('Color A').content('Fill 1').color;"
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 100,
                                                        "ix": 4
                                                    },
                                                    "w": {
                                                        "a": 0,
                                                        "k": 30,
                                                        "ix": 5
                                                    },
                                                    "lc": 2,
                                                    "lj": 2,
                                                    "bm": 0,
                                                    "nm": "Stroke 1",
                                                    "mn": "ADBE Vector Graphic - Stroke",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "tm",
                                                    "s": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 1
                                                    },
                                                    "e": {
                                                        "a": 1,
                                                        "k": [
                                                            {
                                                                "i": {
                                                                    "x": [
                                                                        0.833
                                                                    ],
                                                                    "y": [
                                                                        0.833
                                                                    ]
                                                                },
                                                                "o": {
                                                                    "x": [
                                                                        0.167
                                                                    ],
                                                                    "y": [
                                                                        0.167
                                                                    ]
                                                                },
                                                                "t": 87.261,
                                                                "s": [
                                                                    0
                                                                ]
                                                            },
                                                            {
                                                                "t": 93,
                                                                "s": [
                                                                    100
                                                                ]
                                                            }
                                                        ],
                                                        "ix": 2
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 3
                                                    },
                                                    "m": 1,
                                                    "ix": 3,
                                                    "nm": "Trim Paths 1",
                                                    "mn": "ADBE Vector Filter - Trim",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "tr",
                                                    "p": {
                                                        "a": 0,
                                                        "k": [
                                                            935.144,
                                                            460.801
                                                        ],
                                                        "ix": 2
                                                    },
                                                    "a": {
                                                        "a": 0,
                                                        "k": [
                                                            0,
                                                            0
                                                        ],
                                                        "ix": 1
                                                    },
                                                    "s": {
                                                        "a": 0,
                                                        "k": [
                                                            100,
                                                            100
                                                        ],
                                                        "ix": 3
                                                    },
                                                    "r": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 6
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 100,
                                                        "ix": 7
                                                    },
                                                    "sk": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 4
                                                    },
                                                    "sa": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 5
                                                    },
                                                    "nm": "Transform"
                                                }
                                            ],
                                            "nm": "Group 16",
                                            "np": 3,
                                            "cix": 2,
                                            "bm": 0,
                                            "ix": 3,
                                            "mn": "ADBE Vector Group",
                                            "hd": false
                                        },
                                        {
                                            "ty": "tr",
                                            "p": {
                                                "a": 0,
                                                "k": [
                                                    491.123,
                                                    460.802
                                                ],
                                                "ix": 2
                                            },
                                            "a": {
                                                "a": 0,
                                                "k": [
                                                    491.123,
                                                    460.802
                                                ],
                                                "ix": 1
                                            },
                                            "s": {
                                                "a": 0,
                                                "k": [
                                                    100,
                                                    100
                                                ],
                                                "ix": 3
                                            },
                                            "r": {
                                                "a": 0,
                                                "k": 0,
                                                "ix": 6
                                            },
                                            "o": {
                                                "a": 0,
                                                "k": 100,
                                                "ix": 7
                                            },
                                            "sk": {
                                                "a": 0,
                                                "k": 0,
                                                "ix": 4
                                            },
                                            "sa": {
                                                "a": 0,
                                                "k": 0,
                                                "ix": 5
                                            },
                                            "nm": "Transform"
                                        }
                                    ],
                                    "nm": "Group 42",
                                    "np": 3,
                                    "cix": 2,
                                    "bm": 0,
                                    "ix": 1,
                                    "mn": "ADBE Vector Group",
                                    "hd": false
                                }
                            ],
                            "ip": 60,
                            "op": 614,
                            "st": 60,
                            "bm": 0
                        },
                        {
                            "ddd": 0,
                            "ind": 3,
                            "ty": 4,
                            "nm": "Code 6",
                            "sr": 1,
                            "ks": {
                                "o": {
                                    "a": 0,
                                    "k": 100,
                                    "ix": 11
                                },
                                "r": {
                                    "a": 0,
                                    "k": 0,
                                    "ix": 10
                                },
                                "p": {
                                    "a": 0,
                                    "k": [
                                        930.976,
                                        573.503,
                                        0
                                    ],
                                    "ix": 2,
                                    "l": 2
                                },
                                "a": {
                                    "a": 0,
                                    "k": [
                                        870.976,
                                        321.003,
                                        0
                                    ],
                                    "ix": 1,
                                    "l": 2
                                },
                                "s": {
                                    "a": 0,
                                    "k": [
                                        100,
                                        100,
                                        100
                                    ],
                                    "ix": 6,
                                    "l": 2
                                }
                            },
                            "ao": 0,
                            "shapes": [
                                {
                                    "ty": "gr",
                                    "it": [
                                        {
                                            "ty": "gr",
                                            "it": [
                                                {
                                                    "ind": 0,
                                                    "ty": "sh",
                                                    "ix": 1,
                                                    "ks": {
                                                        "a": 0,
                                                        "k": {
                                                            "i": [
                                                                [
                                                                    0,
                                                                    0
                                                                ],
                                                                [
                                                                    0,
                                                                    0
                                                                ]
                                                            ],
                                                            "o": [
                                                                [
                                                                    0,
                                                                    0
                                                                ],
                                                                [
                                                                    0,
                                                                    0
                                                                ]
                                                            ],
                                                            "v": [
                                                                [
                                                                    -100.512,
                                                                    0
                                                                ],
                                                                [
                                                                    100.512,
                                                                    0
                                                                ]
                                                            ],
                                                            "c": false
                                                        },
                                                        "ix": 2
                                                    },
                                                    "nm": "Path 1",
                                                    "mn": "ADBE Vector Shape - Group",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "st",
                                                    "c": {
                                                        "a": 0,
                                                        "k": [
                                                            0,
                                                            0,
                                                            0.011764706112,
                                                            1
                                                        ],
                                                        "ix": 3,
                                                        "x": "var $bm_rt;\n$bm_rt = thisComp.layer('Color CTRL').content('Color B').content('Fill 1').color;"
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 100,
                                                        "ix": 4
                                                    },
                                                    "w": {
                                                        "a": 0,
                                                        "k": 30,
                                                        "ix": 5
                                                    },
                                                    "lc": 2,
                                                    "lj": 2,
                                                    "bm": 0,
                                                    "nm": "Stroke 1",
                                                    "mn": "ADBE Vector Graphic - Stroke",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "tm",
                                                    "s": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 1
                                                    },
                                                    "e": {
                                                        "a": 1,
                                                        "k": [
                                                            {
                                                                "i": {
                                                                    "x": [
                                                                        0.833
                                                                    ],
                                                                    "y": [
                                                                        0.833
                                                                    ]
                                                                },
                                                                "o": {
                                                                    "x": [
                                                                        0.167
                                                                    ],
                                                                    "y": [
                                                                        0.167
                                                                    ]
                                                                },
                                                                "t": 50,
                                                                "s": [
                                                                    0
                                                                ]
                                                            },
                                                            {
                                                                "t": 61.478515625,
                                                                "s": [
                                                                    100
                                                                ]
                                                            }
                                                        ],
                                                        "ix": 2
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 3
                                                    },
                                                    "m": 1,
                                                    "ix": 3,
                                                    "nm": "Trim Paths 1",
                                                    "mn": "ADBE Vector Filter - Trim",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "tr",
                                                    "p": {
                                                        "a": 0,
                                                        "k": [
                                                            78.512,
                                                            391.003
                                                        ],
                                                        "ix": 2
                                                    },
                                                    "a": {
                                                        "a": 0,
                                                        "k": [
                                                            0,
                                                            0
                                                        ],
                                                        "ix": 1
                                                    },
                                                    "s": {
                                                        "a": 0,
                                                        "k": [
                                                            100,
                                                            100
                                                        ],
                                                        "ix": 3
                                                    },
                                                    "r": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 6
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 100,
                                                        "ix": 7
                                                    },
                                                    "sk": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 4
                                                    },
                                                    "sa": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 5
                                                    },
                                                    "nm": "Transform"
                                                }
                                            ],
                                            "nm": "Group 19",
                                            "np": 3,
                                            "cix": 2,
                                            "bm": 0,
                                            "ix": 1,
                                            "mn": "ADBE Vector Group",
                                            "hd": false
                                        },
                                        {
                                            "ty": "gr",
                                            "it": [
                                                {
                                                    "ind": 0,
                                                    "ty": "sh",
                                                    "ix": 1,
                                                    "ks": {
                                                        "a": 0,
                                                        "k": {
                                                            "i": [
                                                                [
                                                                    0,
                                                                    0
                                                                ],
                                                                [
                                                                    0,
                                                                    0
                                                                ]
                                                            ],
                                                            "o": [
                                                                [
                                                                    0,
                                                                    0
                                                                ],
                                                                [
                                                                    0,
                                                                    0
                                                                ]
                                                            ],
                                                            "v": [
                                                                [
                                                                    -402.047,
                                                                    0
                                                                ],
                                                                [
                                                                    247.047,
                                                                    0
                                                                ]
                                                            ],
                                                            "c": false
                                                        },
                                                        "ix": 2
                                                    },
                                                    "nm": "Path 1",
                                                    "mn": "ADBE Vector Shape - Group",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "st",
                                                    "c": {
                                                        "a": 0,
                                                        "k": [
                                                            0,
                                                            0,
                                                            0.003921568859,
                                                            1
                                                        ],
                                                        "ix": 3,
                                                        "x": "var $bm_rt;\n$bm_rt = thisComp.layer('Color CTRL').content('Color A').content('Fill 1').color;"
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 100,
                                                        "ix": 4
                                                    },
                                                    "w": {
                                                        "a": 0,
                                                        "k": 30,
                                                        "ix": 5
                                                    },
                                                    "lc": 2,
                                                    "lj": 2,
                                                    "bm": 0,
                                                    "nm": "Stroke 1",
                                                    "mn": "ADBE Vector Graphic - Stroke",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "tm",
                                                    "s": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 1
                                                    },
                                                    "e": {
                                                        "a": 1,
                                                        "k": [
                                                            {
                                                                "i": {
                                                                    "x": [
                                                                        0.833
                                                                    ],
                                                                    "y": [
                                                                        0.833
                                                                    ]
                                                                },
                                                                "o": {
                                                                    "x": [
                                                                        0.167
                                                                    ],
                                                                    "y": [
                                                                        0.167
                                                                    ]
                                                                },
                                                                "t": 61.479,
                                                                "s": [
                                                                    0
                                                                ]
                                                            },
                                                            {
                                                                "t": 83,
                                                                "s": [
                                                                    100
                                                                ]
                                                            }
                                                        ],
                                                        "ix": 2
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 3
                                                    },
                                                    "m": 1,
                                                    "ix": 3,
                                                    "nm": "Trim Paths 1",
                                                    "mn": "ADBE Vector Filter - Trim",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "tr",
                                                    "p": {
                                                        "a": 0,
                                                        "k": [
                                                            657.98,
                                                            391.003
                                                        ],
                                                        "ix": 2
                                                    },
                                                    "a": {
                                                        "a": 0,
                                                        "k": [
                                                            0,
                                                            0
                                                        ],
                                                        "ix": 1
                                                    },
                                                    "s": {
                                                        "a": 0,
                                                        "k": [
                                                            100,
                                                            100
                                                        ],
                                                        "ix": 3
                                                    },
                                                    "r": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 6
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 100,
                                                        "ix": 7
                                                    },
                                                    "sk": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 4
                                                    },
                                                    "sa": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 5
                                                    },
                                                    "nm": "Transform"
                                                }
                                            ],
                                            "nm": "Group 25",
                                            "np": 3,
                                            "cix": 2,
                                            "bm": 0,
                                            "ix": 2,
                                            "mn": "ADBE Vector Group",
                                            "hd": false
                                        },
                                        {
                                            "ty": "tr",
                                            "p": {
                                                "a": 0,
                                                "k": [
                                                    872.976,
                                                    391.002
                                                ],
                                                "ix": 2
                                            },
                                            "a": {
                                                "a": 0,
                                                "k": [
                                                    872.976,
                                                    391.002
                                                ],
                                                "ix": 1
                                            },
                                            "s": {
                                                "a": 0,
                                                "k": [
                                                    100,
                                                    100
                                                ],
                                                "ix": 3
                                            },
                                            "r": {
                                                "a": 0,
                                                "k": 0,
                                                "ix": 6
                                            },
                                            "o": {
                                                "a": 0,
                                                "k": 100,
                                                "ix": 7
                                            },
                                            "sk": {
                                                "a": 0,
                                                "k": 0,
                                                "ix": 4
                                            },
                                            "sa": {
                                                "a": 0,
                                                "k": 0,
                                                "ix": 5
                                            },
                                            "nm": "Transform"
                                        }
                                    ],
                                    "nm": "Group 41",
                                    "np": 2,
                                    "cix": 2,
                                    "bm": 0,
                                    "ix": 1,
                                    "mn": "ADBE Vector Group",
                                    "hd": false
                                }
                            ],
                            "ip": 50,
                            "op": 604,
                            "st": 50,
                            "bm": 0
                        },
                        {
                            "ddd": 0,
                            "ind": 4,
                            "ty": 4,
                            "nm": "Code 5",
                            "sr": 1,
                            "ks": {
                                "o": {
                                    "a": 0,
                                    "k": 100,
                                    "ix": 11
                                },
                                "r": {
                                    "a": 0,
                                    "k": 0,
                                    "ix": 10
                                },
                                "p": {
                                    "a": 0,
                                    "k": [
                                        930.976,
                                        573.503,
                                        0
                                    ],
                                    "ix": 2,
                                    "l": 2
                                },
                                "a": {
                                    "a": 0,
                                    "k": [
                                        870.976,
                                        321.003,
                                        0
                                    ],
                                    "ix": 1,
                                    "l": 2
                                },
                                "s": {
                                    "a": 0,
                                    "k": [
                                        100,
                                        100,
                                        100
                                    ],
                                    "ix": 6,
                                    "l": 2
                                }
                            },
                            "ao": 0,
                            "shapes": [
                                {
                                    "ty": "gr",
                                    "it": [
                                        {
                                            "ty": "gr",
                                            "it": [
                                                {
                                                    "ind": 0,
                                                    "ty": "sh",
                                                    "ix": 1,
                                                    "ks": {
                                                        "a": 0,
                                                        "k": {
                                                            "i": [
                                                                [
                                                                    0,
                                                                    0
                                                                ],
                                                                [
                                                                    0,
                                                                    0
                                                                ]
                                                            ],
                                                            "o": [
                                                                [
                                                                    0,
                                                                    0
                                                                ],
                                                                [
                                                                    0,
                                                                    0
                                                                ]
                                                            ],
                                                            "v": [
                                                                [
                                                                    -74.5,
                                                                    0
                                                                ],
                                                                [
                                                                    74.5,
                                                                    0
                                                                ]
                                                            ],
                                                            "c": false
                                                        },
                                                        "ix": 2
                                                    },
                                                    "nm": "Path 1",
                                                    "mn": "ADBE Vector Shape - Group",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "st",
                                                    "c": {
                                                        "a": 0,
                                                        "k": [
                                                            0,
                                                            0,
                                                            0.003921568859,
                                                            1
                                                        ],
                                                        "ix": 3,
                                                        "x": "var $bm_rt;\n$bm_rt = thisComp.layer('Color CTRL').content('Color A').content('Fill 1').color;"
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 100,
                                                        "ix": 4
                                                    },
                                                    "w": {
                                                        "a": 0,
                                                        "k": 30,
                                                        "ix": 5
                                                    },
                                                    "lc": 2,
                                                    "lj": 2,
                                                    "bm": 0,
                                                    "nm": "Stroke 1",
                                                    "mn": "ADBE Vector Graphic - Stroke",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "tm",
                                                    "s": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 1
                                                    },
                                                    "e": {
                                                        "a": 1,
                                                        "k": [
                                                            {
                                                                "i": {
                                                                    "x": [
                                                                        0.833
                                                                    ],
                                                                    "y": [
                                                                        0.833
                                                                    ]
                                                                },
                                                                "o": {
                                                                    "x": [
                                                                        0.167
                                                                    ],
                                                                    "y": [
                                                                        0.167
                                                                    ]
                                                                },
                                                                "t": 40,
                                                                "s": [
                                                                    0
                                                                ]
                                                            },
                                                            {
                                                                "t": 49.3330078125,
                                                                "s": [
                                                                    100
                                                                ]
                                                            }
                                                        ],
                                                        "ix": 2
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 3
                                                    },
                                                    "m": 1,
                                                    "ix": 3,
                                                    "nm": "Trim Paths 1",
                                                    "mn": "ADBE Vector Filter - Trim",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "tr",
                                                    "p": {
                                                        "a": 0,
                                                        "k": [
                                                            52.5,
                                                            321.202
                                                        ],
                                                        "ix": 2
                                                    },
                                                    "a": {
                                                        "a": 0,
                                                        "k": [
                                                            0,
                                                            0
                                                        ],
                                                        "ix": 1
                                                    },
                                                    "s": {
                                                        "a": 0,
                                                        "k": [
                                                            100,
                                                            100
                                                        ],
                                                        "ix": 3
                                                    },
                                                    "r": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 6
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 100,
                                                        "ix": 7
                                                    },
                                                    "sk": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 4
                                                    },
                                                    "sa": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 5
                                                    },
                                                    "nm": "Transform"
                                                }
                                            ],
                                            "nm": "Group 22",
                                            "np": 3,
                                            "cix": 2,
                                            "bm": 0,
                                            "ix": 1,
                                            "mn": "ADBE Vector Group",
                                            "hd": false
                                        },
                                        {
                                            "ty": "gr",
                                            "it": [
                                                {
                                                    "ind": 0,
                                                    "ty": "sh",
                                                    "ix": 1,
                                                    "ks": {
                                                        "a": 0,
                                                        "k": {
                                                            "i": [
                                                                [
                                                                    0,
                                                                    0
                                                                ],
                                                                [
                                                                    0,
                                                                    0
                                                                ]
                                                            ],
                                                            "o": [
                                                                [
                                                                    0,
                                                                    0
                                                                ],
                                                                [
                                                                    0,
                                                                    0
                                                                ]
                                                            ],
                                                            "v": [
                                                                [
                                                                    -162,
                                                                    0
                                                                ],
                                                                [
                                                                    162,
                                                                    0
                                                                ]
                                                            ],
                                                            "c": false
                                                        },
                                                        "ix": 2
                                                    },
                                                    "nm": "Path 1",
                                                    "mn": "ADBE Vector Shape - Group",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "st",
                                                    "c": {
                                                        "a": 0,
                                                        "k": [
                                                            0,
                                                            0,
                                                            0.003921568859,
                                                            1
                                                        ],
                                                        "ix": 3,
                                                        "x": "var $bm_rt;\n$bm_rt = thisComp.layer('Color CTRL').content('Color A').content('Fill 1').color;"
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 100,
                                                        "ix": 4
                                                    },
                                                    "w": {
                                                        "a": 0,
                                                        "k": 30,
                                                        "ix": 5
                                                    },
                                                    "lc": 2,
                                                    "lj": 2,
                                                    "bm": 0,
                                                    "nm": "Stroke 1",
                                                    "mn": "ADBE Vector Graphic - Stroke",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "tm",
                                                    "s": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 1
                                                    },
                                                    "e": {
                                                        "a": 1,
                                                        "k": [
                                                            {
                                                                "i": {
                                                                    "x": [
                                                                        0.833
                                                                    ],
                                                                    "y": [
                                                                        0.833
                                                                    ]
                                                                },
                                                                "o": {
                                                                    "x": [
                                                                        0.167
                                                                    ],
                                                                    "y": [
                                                                        0.167
                                                                    ]
                                                                },
                                                                "t": 49.333,
                                                                "s": [
                                                                    0
                                                                ]
                                                            },
                                                            {
                                                                "t": 61.3330078125,
                                                                "s": [
                                                                    100
                                                                ]
                                                            }
                                                        ],
                                                        "ix": 2
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 3
                                                    },
                                                    "m": 1,
                                                    "ix": 3,
                                                    "nm": "Trim Paths 1",
                                                    "mn": "ADBE Vector Filter - Trim",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "tr",
                                                    "p": {
                                                        "a": 0,
                                                        "k": [
                                                            344,
                                                            321
                                                        ],
                                                        "ix": 2
                                                    },
                                                    "a": {
                                                        "a": 0,
                                                        "k": [
                                                            0,
                                                            0
                                                        ],
                                                        "ix": 1
                                                    },
                                                    "s": {
                                                        "a": 0,
                                                        "k": [
                                                            100,
                                                            100
                                                        ],
                                                        "ix": 3
                                                    },
                                                    "r": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 6
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 100,
                                                        "ix": 7
                                                    },
                                                    "sk": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 4
                                                    },
                                                    "sa": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 5
                                                    },
                                                    "nm": "Transform"
                                                }
                                            ],
                                            "nm": "Group 27",
                                            "np": 3,
                                            "cix": 2,
                                            "bm": 0,
                                            "ix": 2,
                                            "mn": "ADBE Vector Group",
                                            "hd": false
                                        },
                                        {
                                            "ty": "gr",
                                            "it": [
                                                {
                                                    "ind": 0,
                                                    "ty": "sh",
                                                    "ix": 1,
                                                    "ks": {
                                                        "a": 0,
                                                        "k": {
                                                            "i": [
                                                                [
                                                                    0,
                                                                    0
                                                                ],
                                                                [
                                                                    0,
                                                                    0
                                                                ]
                                                            ],
                                                            "o": [
                                                                [
                                                                    0,
                                                                    0
                                                                ],
                                                                [
                                                                    0,
                                                                    0
                                                                ]
                                                            ],
                                                            "v": [
                                                                [
                                                                    -0.045,
                                                                    0
                                                                ],
                                                                [
                                                                    0.045,
                                                                    0
                                                                ]
                                                            ],
                                                            "c": false
                                                        },
                                                        "ix": 2
                                                    },
                                                    "nm": "Path 1",
                                                    "mn": "ADBE Vector Shape - Group",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "st",
                                                    "c": {
                                                        "a": 0,
                                                        "k": [
                                                            0,
                                                            0,
                                                            0.003921568859,
                                                            1
                                                        ],
                                                        "ix": 3,
                                                        "x": "var $bm_rt;\n$bm_rt = thisComp.layer('Color CTRL').content('Color A').content('Fill 1').color;"
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 100,
                                                        "ix": 4
                                                    },
                                                    "w": {
                                                        "a": 0,
                                                        "k": 30,
                                                        "ix": 5
                                                    },
                                                    "lc": 2,
                                                    "lj": 2,
                                                    "bm": 0,
                                                    "nm": "Stroke 1",
                                                    "mn": "ADBE Vector Graphic - Stroke",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "tm",
                                                    "s": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 1
                                                    },
                                                    "e": {
                                                        "a": 1,
                                                        "k": [
                                                            {
                                                                "i": {
                                                                    "x": [
                                                                        0.833
                                                                    ],
                                                                    "y": [
                                                                        0.833
                                                                    ]
                                                                },
                                                                "o": {
                                                                    "x": [
                                                                        0.167
                                                                    ],
                                                                    "y": [
                                                                        0.167
                                                                    ]
                                                                },
                                                                "t": 61.333,
                                                                "s": [
                                                                    0
                                                                ]
                                                            },
                                                            {
                                                                "t": 62.6669921875,
                                                                "s": [
                                                                    100
                                                                ]
                                                            }
                                                        ],
                                                        "ix": 2
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 3
                                                    },
                                                    "m": 1,
                                                    "ix": 3,
                                                    "nm": "Trim Paths 1",
                                                    "mn": "ADBE Vector Filter - Trim",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "tr",
                                                    "p": {
                                                        "a": 0,
                                                        "k": [
                                                            575.919,
                                                            321.616
                                                        ],
                                                        "ix": 2
                                                    },
                                                    "a": {
                                                        "a": 0,
                                                        "k": [
                                                            0,
                                                            0
                                                        ],
                                                        "ix": 1
                                                    },
                                                    "s": {
                                                        "a": 0,
                                                        "k": [
                                                            100,
                                                            100
                                                        ],
                                                        "ix": 3
                                                    },
                                                    "r": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 6
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 100,
                                                        "ix": 7
                                                    },
                                                    "sk": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 4
                                                    },
                                                    "sa": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 5
                                                    },
                                                    "nm": "Transform"
                                                }
                                            ],
                                            "nm": "Group 1",
                                            "np": 3,
                                            "cix": 2,
                                            "bm": 0,
                                            "ix": 3,
                                            "mn": "ADBE Vector Group",
                                            "hd": false
                                        },
                                        {
                                            "ty": "gr",
                                            "it": [
                                                {
                                                    "ind": 0,
                                                    "ty": "sh",
                                                    "ix": 1,
                                                    "ks": {
                                                        "a": 0,
                                                        "k": {
                                                            "i": [
                                                                [
                                                                    0,
                                                                    0
                                                                ],
                                                                [
                                                                    0,
                                                                    0
                                                                ]
                                                            ],
                                                            "o": [
                                                                [
                                                                    0,
                                                                    0
                                                                ],
                                                                [
                                                                    0,
                                                                    0
                                                                ]
                                                            ],
                                                            "v": [
                                                                [
                                                                    -481.618,
                                                                    0
                                                                ],
                                                                [
                                                                    -157.382,
                                                                    0
                                                                ]
                                                            ],
                                                            "c": false
                                                        },
                                                        "ix": 2
                                                    },
                                                    "nm": "Path 1",
                                                    "mn": "ADBE Vector Shape - Group",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "st",
                                                    "c": {
                                                        "a": 0,
                                                        "k": [
                                                            0,
                                                            0,
                                                            0.011764706112,
                                                            1
                                                        ],
                                                        "ix": 3,
                                                        "x": "var $bm_rt;\n$bm_rt = thisComp.layer('Color CTRL').content('Color B').content('Fill 1').color;"
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 100,
                                                        "ix": 4
                                                    },
                                                    "w": {
                                                        "a": 0,
                                                        "k": 30,
                                                        "ix": 5
                                                    },
                                                    "lc": 2,
                                                    "lj": 2,
                                                    "bm": 0,
                                                    "nm": "Stroke 1",
                                                    "mn": "ADBE Vector Graphic - Stroke",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "tm",
                                                    "s": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 1
                                                    },
                                                    "e": {
                                                        "a": 1,
                                                        "k": [
                                                            {
                                                                "i": {
                                                                    "x": [
                                                                        0.833
                                                                    ],
                                                                    "y": [
                                                                        0.833
                                                                    ]
                                                                },
                                                                "o": {
                                                                    "x": [
                                                                        0.167
                                                                    ],
                                                                    "y": [
                                                                        0.167
                                                                    ]
                                                                },
                                                                "t": 62.667,
                                                                "s": [
                                                                    0
                                                                ]
                                                            },
                                                            {
                                                                "t": 80,
                                                                "s": [
                                                                    100
                                                                ]
                                                            }
                                                        ],
                                                        "ix": 2
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 3
                                                    },
                                                    "m": 1,
                                                    "ix": 3,
                                                    "nm": "Trim Paths 1",
                                                    "mn": "ADBE Vector Filter - Trim",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "tr",
                                                    "p": {
                                                        "a": 0,
                                                        "k": [
                                                            1118.8,
                                                            321.202
                                                        ],
                                                        "ix": 2
                                                    },
                                                    "a": {
                                                        "a": 0,
                                                        "k": [
                                                            0,
                                                            0
                                                        ],
                                                        "ix": 1
                                                    },
                                                    "s": {
                                                        "a": 0,
                                                        "k": [
                                                            100,
                                                            100
                                                        ],
                                                        "ix": 3
                                                    },
                                                    "r": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 6
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 100,
                                                        "ix": 7
                                                    },
                                                    "sk": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 4
                                                    },
                                                    "sa": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 5
                                                    },
                                                    "nm": "Transform"
                                                }
                                            ],
                                            "nm": "Group 20",
                                            "np": 3,
                                            "cix": 2,
                                            "bm": 0,
                                            "ix": 4,
                                            "mn": "ADBE Vector Group",
                                            "hd": false
                                        },
                                        {
                                            "ty": "tr",
                                            "p": {
                                                "a": 0,
                                                "k": [
                                                    789.209,
                                                    321.308
                                                ],
                                                "ix": 2
                                            },
                                            "a": {
                                                "a": 0,
                                                "k": [
                                                    789.209,
                                                    321.308
                                                ],
                                                "ix": 1
                                            },
                                            "s": {
                                                "a": 0,
                                                "k": [
                                                    100,
                                                    100
                                                ],
                                                "ix": 3
                                            },
                                            "r": {
                                                "a": 0,
                                                "k": 0,
                                                "ix": 6
                                            },
                                            "o": {
                                                "a": 0,
                                                "k": 100,
                                                "ix": 7
                                            },
                                            "sk": {
                                                "a": 0,
                                                "k": 0,
                                                "ix": 4
                                            },
                                            "sa": {
                                                "a": 0,
                                                "k": 0,
                                                "ix": 5
                                            },
                                            "nm": "Transform"
                                        }
                                    ],
                                    "nm": "Group 40",
                                    "np": 4,
                                    "cix": 2,
                                    "bm": 0,
                                    "ix": 1,
                                    "mn": "ADBE Vector Group",
                                    "hd": false
                                }
                            ],
                            "ip": 40,
                            "op": 594,
                            "st": 40,
                            "bm": 0
                        },
                        {
                            "ddd": 0,
                            "ind": 5,
                            "ty": 4,
                            "nm": "Code 4",
                            "sr": 1,
                            "ks": {
                                "o": {
                                    "a": 0,
                                    "k": 100,
                                    "ix": 11
                                },
                                "r": {
                                    "a": 0,
                                    "k": 0,
                                    "ix": 10
                                },
                                "p": {
                                    "a": 0,
                                    "k": [
                                        930.976,
                                        573.503,
                                        0
                                    ],
                                    "ix": 2,
                                    "l": 2
                                },
                                "a": {
                                    "a": 0,
                                    "k": [
                                        870.976,
                                        321.003,
                                        0
                                    ],
                                    "ix": 1,
                                    "l": 2
                                },
                                "s": {
                                    "a": 0,
                                    "k": [
                                        100,
                                        100,
                                        100
                                    ],
                                    "ix": 6,
                                    "l": 2
                                }
                            },
                            "ao": 0,
                            "shapes": [
                                {
                                    "ty": "gr",
                                    "it": [
                                        {
                                            "ty": "gr",
                                            "it": [
                                                {
                                                    "ind": 0,
                                                    "ty": "sh",
                                                    "ix": 1,
                                                    "ks": {
                                                        "a": 0,
                                                        "k": {
                                                            "i": [
                                                                [
                                                                    0,
                                                                    0
                                                                ],
                                                                [
                                                                    0,
                                                                    0
                                                                ]
                                                            ],
                                                            "o": [
                                                                [
                                                                    0,
                                                                    0
                                                                ],
                                                                [
                                                                    0,
                                                                    0
                                                                ]
                                                            ],
                                                            "v": [
                                                                [
                                                                    42.898,
                                                                    0
                                                                ],
                                                                [
                                                                    69.102,
                                                                    0
                                                                ]
                                                            ],
                                                            "c": false
                                                        },
                                                        "ix": 2
                                                    },
                                                    "nm": "Path 1",
                                                    "mn": "ADBE Vector Shape - Group",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "st",
                                                    "c": {
                                                        "a": 0,
                                                        "k": [
                                                            0,
                                                            0,
                                                            0.003921568859,
                                                            1
                                                        ],
                                                        "ix": 3,
                                                        "x": "var $bm_rt;\n$bm_rt = thisComp.layer('Color CTRL').content('Color A').content('Fill 1').color;"
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 100,
                                                        "ix": 4
                                                    },
                                                    "w": {
                                                        "a": 0,
                                                        "k": 30,
                                                        "ix": 5
                                                    },
                                                    "lc": 2,
                                                    "lj": 2,
                                                    "bm": 0,
                                                    "nm": "Stroke 1",
                                                    "mn": "ADBE Vector Graphic - Stroke",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "tm",
                                                    "s": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 1
                                                    },
                                                    "e": {
                                                        "a": 1,
                                                        "k": [
                                                            {
                                                                "i": {
                                                                    "x": [
                                                                        0.833
                                                                    ],
                                                                    "y": [
                                                                        0.833
                                                                    ]
                                                                },
                                                                "o": {
                                                                    "x": [
                                                                        0.167
                                                                    ],
                                                                    "y": [
                                                                        0.167
                                                                    ]
                                                                },
                                                                "t": 30,
                                                                "s": [
                                                                    0
                                                                ]
                                                            },
                                                            {
                                                                "t": 39.12109375,
                                                                "s": [
                                                                    100
                                                                ]
                                                            }
                                                        ],
                                                        "ix": 2
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 3
                                                    },
                                                    "m": 1,
                                                    "ix": 3,
                                                    "nm": "Trim Paths 1",
                                                    "mn": "ADBE Vector Filter - Trim",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "tr",
                                                    "p": {
                                                        "a": 0,
                                                        "k": [
                                                            -65.989,
                                                            250
                                                        ],
                                                        "ix": 2
                                                    },
                                                    "a": {
                                                        "a": 0,
                                                        "k": [
                                                            0,
                                                            0
                                                        ],
                                                        "ix": 1
                                                    },
                                                    "s": {
                                                        "a": 0,
                                                        "k": [
                                                            100,
                                                            100
                                                        ],
                                                        "ix": 3
                                                    },
                                                    "r": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 6
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 100,
                                                        "ix": 7
                                                    },
                                                    "sk": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 4
                                                    },
                                                    "sa": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 5
                                                    },
                                                    "nm": "Transform"
                                                }
                                            ],
                                            "nm": "Group 12",
                                            "np": 3,
                                            "cix": 2,
                                            "bm": 0,
                                            "ix": 1,
                                            "mn": "ADBE Vector Group",
                                            "hd": false
                                        },
                                        {
                                            "ty": "gr",
                                            "it": [
                                                {
                                                    "ind": 0,
                                                    "ty": "sh",
                                                    "ix": 1,
                                                    "ks": {
                                                        "a": 0,
                                                        "k": {
                                                            "i": [
                                                                [
                                                                    0,
                                                                    0
                                                                ],
                                                                [
                                                                    0,
                                                                    0
                                                                ]
                                                            ],
                                                            "o": [
                                                                [
                                                                    0,
                                                                    0
                                                                ],
                                                                [
                                                                    0,
                                                                    0
                                                                ]
                                                            ],
                                                            "v": [
                                                                [
                                                                    -98,
                                                                    0
                                                                ],
                                                                [
                                                                    98,
                                                                    0
                                                                ]
                                                            ],
                                                            "c": false
                                                        },
                                                        "ix": 2
                                                    },
                                                    "nm": "Path 1",
                                                    "mn": "ADBE Vector Shape - Group",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "st",
                                                    "c": {
                                                        "a": 0,
                                                        "k": [
                                                            0,
                                                            0,
                                                            0.011764706112,
                                                            1
                                                        ],
                                                        "ix": 3,
                                                        "x": "var $bm_rt;\n$bm_rt = thisComp.layer('Color CTRL').content('Color B').content('Fill 1').color;"
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 100,
                                                        "ix": 4
                                                    },
                                                    "w": {
                                                        "a": 0,
                                                        "k": 30,
                                                        "ix": 5
                                                    },
                                                    "lc": 2,
                                                    "lj": 2,
                                                    "bm": 0,
                                                    "nm": "Stroke 1",
                                                    "mn": "ADBE Vector Graphic - Stroke",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "tm",
                                                    "s": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 1
                                                    },
                                                    "e": {
                                                        "a": 1,
                                                        "k": [
                                                            {
                                                                "i": {
                                                                    "x": [
                                                                        0.833
                                                                    ],
                                                                    "y": [
                                                                        0.833
                                                                    ]
                                                                },
                                                                "o": {
                                                                    "x": [
                                                                        0.167
                                                                    ],
                                                                    "y": [
                                                                        0.167
                                                                    ]
                                                                },
                                                                "t": 36.516,
                                                                "s": [
                                                                    0
                                                                ]
                                                            },
                                                            {
                                                                "t": 45.63671875,
                                                                "s": [
                                                                    100
                                                                ]
                                                            }
                                                        ],
                                                        "ix": 2
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 3
                                                    },
                                                    "m": 1,
                                                    "ix": 3,
                                                    "nm": "Trim Paths 1",
                                                    "mn": "ADBE Vector Filter - Trim",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "tr",
                                                    "p": {
                                                        "a": 0,
                                                        "k": [
                                                            163,
                                                            251
                                                        ],
                                                        "ix": 2
                                                    },
                                                    "a": {
                                                        "a": 0,
                                                        "k": [
                                                            0,
                                                            0
                                                        ],
                                                        "ix": 1
                                                    },
                                                    "s": {
                                                        "a": 0,
                                                        "k": [
                                                            100,
                                                            100
                                                        ],
                                                        "ix": 3
                                                    },
                                                    "r": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 6
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 100,
                                                        "ix": 7
                                                    },
                                                    "sk": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 4
                                                    },
                                                    "sa": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 5
                                                    },
                                                    "nm": "Transform"
                                                }
                                            ],
                                            "nm": "Group 26",
                                            "np": 3,
                                            "cix": 2,
                                            "bm": 0,
                                            "ix": 2,
                                            "mn": "ADBE Vector Group",
                                            "hd": false
                                        },
                                        {
                                            "ty": "gr",
                                            "it": [
                                                {
                                                    "ind": 0,
                                                    "ty": "sh",
                                                    "ix": 1,
                                                    "ks": {
                                                        "a": 0,
                                                        "k": {
                                                            "i": [
                                                                [
                                                                    0,
                                                                    0
                                                                ],
                                                                [
                                                                    0,
                                                                    0
                                                                ]
                                                            ],
                                                            "o": [
                                                                [
                                                                    0,
                                                                    0
                                                                ],
                                                                [
                                                                    0,
                                                                    0
                                                                ]
                                                            ],
                                                            "v": [
                                                                [
                                                                    -162,
                                                                    0
                                                                ],
                                                                [
                                                                    162,
                                                                    0
                                                                ]
                                                            ],
                                                            "c": false
                                                        },
                                                        "ix": 2
                                                    },
                                                    "nm": "Path 1",
                                                    "mn": "ADBE Vector Shape - Group",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "st",
                                                    "c": {
                                                        "a": 0,
                                                        "k": [
                                                            0,
                                                            0,
                                                            0.003921568859,
                                                            1
                                                        ],
                                                        "ix": 3,
                                                        "x": "var $bm_rt;\n$bm_rt = thisComp.layer('Color CTRL').content('Color A').content('Fill 1').color;"
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 100,
                                                        "ix": 4
                                                    },
                                                    "w": {
                                                        "a": 0,
                                                        "k": 30,
                                                        "ix": 5
                                                    },
                                                    "lc": 2,
                                                    "lj": 2,
                                                    "bm": 0,
                                                    "nm": "Stroke 1",
                                                    "mn": "ADBE Vector Graphic - Stroke",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "tm",
                                                    "s": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 1
                                                    },
                                                    "e": {
                                                        "a": 1,
                                                        "k": [
                                                            {
                                                                "i": {
                                                                    "x": [
                                                                        0.833
                                                                    ],
                                                                    "y": [
                                                                        0.833
                                                                    ]
                                                                },
                                                                "o": {
                                                                    "x": [
                                                                        0.167
                                                                    ],
                                                                    "y": [
                                                                        0.167
                                                                    ]
                                                                },
                                                                "t": 44.333,
                                                                "s": [
                                                                    0
                                                                ]
                                                            },
                                                            {
                                                                "t": 53.4541015625,
                                                                "s": [
                                                                    100
                                                                ]
                                                            }
                                                        ],
                                                        "ix": 2
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 3
                                                    },
                                                    "m": 1,
                                                    "ix": 3,
                                                    "nm": "Trim Paths 1",
                                                    "mn": "ADBE Vector Filter - Trim",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "tr",
                                                    "p": {
                                                        "a": 0,
                                                        "k": [
                                                            505,
                                                            251
                                                        ],
                                                        "ix": 2
                                                    },
                                                    "a": {
                                                        "a": 0,
                                                        "k": [
                                                            0,
                                                            0
                                                        ],
                                                        "ix": 1
                                                    },
                                                    "s": {
                                                        "a": 0,
                                                        "k": [
                                                            100,
                                                            100
                                                        ],
                                                        "ix": 3
                                                    },
                                                    "r": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 6
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 100,
                                                        "ix": 7
                                                    },
                                                    "sk": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 4
                                                    },
                                                    "sa": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 5
                                                    },
                                                    "nm": "Transform"
                                                }
                                            ],
                                            "nm": "Group 28",
                                            "np": 3,
                                            "cix": 2,
                                            "bm": 0,
                                            "ix": 3,
                                            "mn": "ADBE Vector Group",
                                            "hd": false
                                        },
                                        {
                                            "ty": "gr",
                                            "it": [
                                                {
                                                    "ind": 0,
                                                    "ty": "sh",
                                                    "ix": 1,
                                                    "ks": {
                                                        "a": 0,
                                                        "k": {
                                                            "i": [
                                                                [
                                                                    0,
                                                                    0
                                                                ],
                                                                [
                                                                    0,
                                                                    0
                                                                ]
                                                            ],
                                                            "o": [
                                                                [
                                                                    0,
                                                                    0
                                                                ],
                                                                [
                                                                    0,
                                                                    0
                                                                ]
                                                            ],
                                                            "v": [
                                                                [
                                                                    -69.102,
                                                                    0
                                                                ],
                                                                [
                                                                    69.102,
                                                                    0
                                                                ]
                                                            ],
                                                            "c": false
                                                        },
                                                        "ix": 2
                                                    },
                                                    "nm": "Path 1",
                                                    "mn": "ADBE Vector Shape - Group",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "st",
                                                    "c": {
                                                        "a": 0,
                                                        "k": [
                                                            0,
                                                            0,
                                                            0.003921568859,
                                                            1
                                                        ],
                                                        "ix": 3,
                                                        "x": "var $bm_rt;\n$bm_rt = thisComp.layer('Color CTRL').content('Color A').content('Fill 1').color;"
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 100,
                                                        "ix": 4
                                                    },
                                                    "w": {
                                                        "a": 0,
                                                        "k": 30,
                                                        "ix": 5
                                                    },
                                                    "lc": 2,
                                                    "lj": 2,
                                                    "bm": 0,
                                                    "nm": "Stroke 1",
                                                    "mn": "ADBE Vector Graphic - Stroke",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "tm",
                                                    "s": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 1
                                                    },
                                                    "e": {
                                                        "a": 1,
                                                        "k": [
                                                            {
                                                                "i": {
                                                                    "x": [
                                                                        0.833
                                                                    ],
                                                                    "y": [
                                                                        0.833
                                                                    ]
                                                                },
                                                                "o": {
                                                                    "x": [
                                                                        0.167
                                                                    ],
                                                                    "y": [
                                                                        0.167
                                                                    ]
                                                                },
                                                                "t": 53.454,
                                                                "s": [
                                                                    0
                                                                ]
                                                            },
                                                            {
                                                                "t": 58.6669921875,
                                                                "s": [
                                                                    100
                                                                ]
                                                            }
                                                        ],
                                                        "ix": 2
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 3
                                                    },
                                                    "m": 1,
                                                    "ix": 3,
                                                    "nm": "Trim Paths 1",
                                                    "mn": "ADBE Vector Filter - Trim",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "tr",
                                                    "p": {
                                                        "a": 0,
                                                        "k": [
                                                            809.011,
                                                            250
                                                        ],
                                                        "ix": 2
                                                    },
                                                    "a": {
                                                        "a": 0,
                                                        "k": [
                                                            0,
                                                            0
                                                        ],
                                                        "ix": 1
                                                    },
                                                    "s": {
                                                        "a": 0,
                                                        "k": [
                                                            100,
                                                            100
                                                        ],
                                                        "ix": 3
                                                    },
                                                    "r": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 6
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 100,
                                                        "ix": 7
                                                    },
                                                    "sk": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 4
                                                    },
                                                    "sa": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 5
                                                    },
                                                    "nm": "Transform"
                                                }
                                            ],
                                            "nm": "Group 13",
                                            "np": 3,
                                            "cix": 2,
                                            "bm": 0,
                                            "ix": 4,
                                            "mn": "ADBE Vector Group",
                                            "hd": false
                                        },
                                        {
                                            "ty": "tr",
                                            "p": {
                                                "a": 0,
                                                "k": [
                                                    62.955,
                                                    250.5
                                                ],
                                                "ix": 2
                                            },
                                            "a": {
                                                "a": 0,
                                                "k": [
                                                    62.955,
                                                    250.5
                                                ],
                                                "ix": 1
                                            },
                                            "s": {
                                                "a": 0,
                                                "k": [
                                                    100,
                                                    100
                                                ],
                                                "ix": 3
                                            },
                                            "r": {
                                                "a": 0,
                                                "k": 0,
                                                "ix": 6
                                            },
                                            "o": {
                                                "a": 0,
                                                "k": 100,
                                                "ix": 7
                                            },
                                            "sk": {
                                                "a": 0,
                                                "k": 0,
                                                "ix": 4
                                            },
                                            "sa": {
                                                "a": 0,
                                                "k": 0,
                                                "ix": 5
                                            },
                                            "nm": "Transform"
                                        }
                                    ],
                                    "nm": "Group 39",
                                    "np": 4,
                                    "cix": 2,
                                    "bm": 0,
                                    "ix": 1,
                                    "mn": "ADBE Vector Group",
                                    "hd": false
                                }
                            ],
                            "ip": 30,
                            "op": 584,
                            "st": 30,
                            "bm": 0
                        },
                        {
                            "ddd": 0,
                            "ind": 6,
                            "ty": 4,
                            "nm": "Code 3",
                            "sr": 1,
                            "ks": {
                                "o": {
                                    "a": 0,
                                    "k": 100,
                                    "ix": 11
                                },
                                "r": {
                                    "a": 0,
                                    "k": 0,
                                    "ix": 10
                                },
                                "p": {
                                    "a": 0,
                                    "k": [
                                        930.976,
                                        573.503,
                                        0
                                    ],
                                    "ix": 2,
                                    "l": 2
                                },
                                "a": {
                                    "a": 0,
                                    "k": [
                                        870.976,
                                        321.003,
                                        0
                                    ],
                                    "ix": 1,
                                    "l": 2
                                },
                                "s": {
                                    "a": 0,
                                    "k": [
                                        100,
                                        100,
                                        100
                                    ],
                                    "ix": 6,
                                    "l": 2
                                }
                            },
                            "ao": 0,
                            "shapes": [
                                {
                                    "ty": "gr",
                                    "it": [
                                        {
                                            "ty": "gr",
                                            "it": [
                                                {
                                                    "ind": 0,
                                                    "ty": "sh",
                                                    "ix": 1,
                                                    "ks": {
                                                        "a": 0,
                                                        "k": {
                                                            "i": [
                                                                [
                                                                    0,
                                                                    0
                                                                ],
                                                                [
                                                                    0,
                                                                    0
                                                                ]
                                                            ],
                                                            "o": [
                                                                [
                                                                    0,
                                                                    0
                                                                ],
                                                                [
                                                                    0,
                                                                    0
                                                                ]
                                                            ],
                                                            "v": [
                                                                [
                                                                    -50.256,
                                                                    0
                                                                ],
                                                                [
                                                                    78.256,
                                                                    0
                                                                ]
                                                            ],
                                                            "c": false
                                                        },
                                                        "ix": 2
                                                    },
                                                    "nm": "Path 1",
                                                    "mn": "ADBE Vector Shape - Group",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "st",
                                                    "c": {
                                                        "a": 0,
                                                        "k": [
                                                            0,
                                                            0,
                                                            0.011764706112,
                                                            1
                                                        ],
                                                        "ix": 3,
                                                        "x": "var $bm_rt;\n$bm_rt = thisComp.layer('Color CTRL').content('Color B').content('Fill 1').color;"
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 100,
                                                        "ix": 4
                                                    },
                                                    "w": {
                                                        "a": 0,
                                                        "k": 30,
                                                        "ix": 5
                                                    },
                                                    "lc": 2,
                                                    "lj": 2,
                                                    "bm": 0,
                                                    "nm": "Stroke 1",
                                                    "mn": "ADBE Vector Graphic - Stroke",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "tm",
                                                    "s": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 1
                                                    },
                                                    "e": {
                                                        "a": 1,
                                                        "k": [
                                                            {
                                                                "i": {
                                                                    "x": [
                                                                        0.833
                                                                    ],
                                                                    "y": [
                                                                        0.833
                                                                    ]
                                                                },
                                                                "o": {
                                                                    "x": [
                                                                        0.167
                                                                    ],
                                                                    "y": [
                                                                        0.167
                                                                    ]
                                                                },
                                                                "t": 20,
                                                                "s": [
                                                                    0
                                                                ]
                                                            },
                                                            {
                                                                "t": 27.875,
                                                                "s": [
                                                                    100
                                                                ]
                                                            }
                                                        ],
                                                        "ix": 2
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 3
                                                    },
                                                    "m": 1,
                                                    "ix": 3,
                                                    "nm": "Trim Paths 1",
                                                    "mn": "ADBE Vector Filter - Trim",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "tr",
                                                    "p": {
                                                        "a": 0,
                                                        "k": [
                                                            28.256,
                                                            181.601
                                                        ],
                                                        "ix": 2
                                                    },
                                                    "a": {
                                                        "a": 0,
                                                        "k": [
                                                            0,
                                                            0
                                                        ],
                                                        "ix": 1
                                                    },
                                                    "s": {
                                                        "a": 0,
                                                        "k": [
                                                            100,
                                                            100
                                                        ],
                                                        "ix": 3
                                                    },
                                                    "r": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 6
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 100,
                                                        "ix": 7
                                                    },
                                                    "sk": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 4
                                                    },
                                                    "sa": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 5
                                                    },
                                                    "nm": "Transform"
                                                }
                                            ],
                                            "nm": "Group 18",
                                            "np": 3,
                                            "cix": 2,
                                            "bm": 0,
                                            "ix": 1,
                                            "mn": "ADBE Vector Group",
                                            "hd": false
                                        },
                                        {
                                            "ty": "gr",
                                            "it": [
                                                {
                                                    "ind": 0,
                                                    "ty": "sh",
                                                    "ix": 1,
                                                    "ks": {
                                                        "a": 0,
                                                        "k": {
                                                            "i": [
                                                                [
                                                                    0,
                                                                    0
                                                                ],
                                                                [
                                                                    0,
                                                                    0
                                                                ]
                                                            ],
                                                            "o": [
                                                                [
                                                                    0,
                                                                    0
                                                                ],
                                                                [
                                                                    0,
                                                                    0
                                                                ]
                                                            ],
                                                            "v": [
                                                                [
                                                                    -282.689,
                                                                    0
                                                                ],
                                                                [
                                                                    282.689,
                                                                    0
                                                                ]
                                                            ],
                                                            "c": false
                                                        },
                                                        "ix": 2
                                                    },
                                                    "nm": "Path 1",
                                                    "mn": "ADBE Vector Shape - Group",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "st",
                                                    "c": {
                                                        "a": 0,
                                                        "k": [
                                                            0,
                                                            0,
                                                            0.003921568859,
                                                            1
                                                        ],
                                                        "ix": 3,
                                                        "x": "var $bm_rt;\n$bm_rt = thisComp.layer('Color CTRL').content('Color A').content('Fill 1').color;"
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 100,
                                                        "ix": 4
                                                    },
                                                    "w": {
                                                        "a": 0,
                                                        "k": 30,
                                                        "ix": 5
                                                    },
                                                    "lc": 2,
                                                    "lj": 2,
                                                    "bm": 0,
                                                    "nm": "Stroke 1",
                                                    "mn": "ADBE Vector Graphic - Stroke",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "tm",
                                                    "s": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 1
                                                    },
                                                    "e": {
                                                        "a": 1,
                                                        "k": [
                                                            {
                                                                "i": {
                                                                    "x": [
                                                                        0.833
                                                                    ],
                                                                    "y": [
                                                                        0.833
                                                                    ]
                                                                },
                                                                "o": {
                                                                    "x": [
                                                                        0.167
                                                                    ],
                                                                    "y": [
                                                                        0.167
                                                                    ]
                                                                },
                                                                "t": 27.875,
                                                                "s": [
                                                                    0
                                                                ]
                                                            },
                                                            {
                                                                "t": 43.625,
                                                                "s": [
                                                                    100
                                                                ]
                                                            }
                                                        ],
                                                        "ix": 2
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 3
                                                    },
                                                    "m": 1,
                                                    "ix": 3,
                                                    "nm": "Trim Paths 1",
                                                    "mn": "ADBE Vector Filter - Trim",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "tr",
                                                    "p": {
                                                        "a": 0,
                                                        "k": [
                                                            465.474,
                                                            181.601
                                                        ],
                                                        "ix": 2
                                                    },
                                                    "a": {
                                                        "a": 0,
                                                        "k": [
                                                            0,
                                                            0
                                                        ],
                                                        "ix": 1
                                                    },
                                                    "s": {
                                                        "a": 0,
                                                        "k": [
                                                            100,
                                                            100
                                                        ],
                                                        "ix": 3
                                                    },
                                                    "r": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 6
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 100,
                                                        "ix": 7
                                                    },
                                                    "sk": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 4
                                                    },
                                                    "sa": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 5
                                                    },
                                                    "nm": "Transform"
                                                }
                                            ],
                                            "nm": "Group 30",
                                            "np": 3,
                                            "cix": 2,
                                            "bm": 0,
                                            "ix": 2,
                                            "mn": "ADBE Vector Group",
                                            "hd": false
                                        },
                                        {
                                            "ty": "gr",
                                            "it": [
                                                {
                                                    "ind": 0,
                                                    "ty": "sh",
                                                    "ix": 1,
                                                    "ks": {
                                                        "a": 0,
                                                        "k": {
                                                            "i": [
                                                                [
                                                                    0,
                                                                    0
                                                                ],
                                                                [
                                                                    0,
                                                                    0
                                                                ]
                                                            ],
                                                            "o": [
                                                                [
                                                                    0,
                                                                    0
                                                                ],
                                                                [
                                                                    0,
                                                                    0
                                                                ]
                                                            ],
                                                            "v": [
                                                                [
                                                                    -413.047,
                                                                    0
                                                                ],
                                                                [
                                                                    -311.953,
                                                                    0
                                                                ]
                                                            ],
                                                            "c": false
                                                        },
                                                        "ix": 2
                                                    },
                                                    "nm": "Path 1",
                                                    "mn": "ADBE Vector Shape - Group",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "st",
                                                    "c": {
                                                        "a": 0,
                                                        "k": [
                                                            0,
                                                            0,
                                                            0.011764706112,
                                                            1
                                                        ],
                                                        "ix": 3,
                                                        "x": "var $bm_rt;\n$bm_rt = thisComp.layer('Color CTRL').content('Color B').content('Fill 1').color;"
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 100,
                                                        "ix": 4
                                                    },
                                                    "w": {
                                                        "a": 0,
                                                        "k": 30,
                                                        "ix": 5
                                                    },
                                                    "lc": 2,
                                                    "lj": 2,
                                                    "bm": 0,
                                                    "nm": "Stroke 1",
                                                    "mn": "ADBE Vector Graphic - Stroke",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "tm",
                                                    "s": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 1
                                                    },
                                                    "e": {
                                                        "a": 1,
                                                        "k": [
                                                            {
                                                                "i": {
                                                                    "x": [
                                                                        0.833
                                                                    ],
                                                                    "y": [
                                                                        0.833
                                                                    ]
                                                                },
                                                                "o": {
                                                                    "x": [
                                                                        0.167
                                                                    ],
                                                                    "y": [
                                                                        0.167
                                                                    ]
                                                                },
                                                                "t": 41,
                                                                "s": [
                                                                    0
                                                                ]
                                                            },
                                                            {
                                                                "t": 62,
                                                                "s": [
                                                                    100
                                                                ]
                                                            }
                                                        ],
                                                        "ix": 2
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 3
                                                    },
                                                    "m": 1,
                                                    "ix": 3,
                                                    "nm": "Trim Paths 1",
                                                    "mn": "ADBE Vector Filter - Trim",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "tr",
                                                    "p": {
                                                        "a": 0,
                                                        "k": [
                                                            1236.953,
                                                            181.601
                                                        ],
                                                        "ix": 2
                                                    },
                                                    "a": {
                                                        "a": 0,
                                                        "k": [
                                                            0,
                                                            0
                                                        ],
                                                        "ix": 1
                                                    },
                                                    "s": {
                                                        "a": 0,
                                                        "k": [
                                                            100,
                                                            100
                                                        ],
                                                        "ix": 3
                                                    },
                                                    "r": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 6
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 100,
                                                        "ix": 7
                                                    },
                                                    "sk": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 4
                                                    },
                                                    "sa": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 5
                                                    },
                                                    "nm": "Transform"
                                                }
                                            ],
                                            "nm": "Group 24",
                                            "np": 3,
                                            "cix": 2,
                                            "bm": 0,
                                            "ix": 3,
                                            "mn": "ADBE Vector Group",
                                            "hd": false
                                        },
                                        {
                                            "ty": "tr",
                                            "p": {
                                                "a": 0,
                                                "k": [
                                                    363.082,
                                                    181.601
                                                ],
                                                "ix": 2
                                            },
                                            "a": {
                                                "a": 0,
                                                "k": [
                                                    363.082,
                                                    181.601
                                                ],
                                                "ix": 1
                                            },
                                            "s": {
                                                "a": 0,
                                                "k": [
                                                    100,
                                                    100
                                                ],
                                                "ix": 3
                                            },
                                            "r": {
                                                "a": 0,
                                                "k": 0,
                                                "ix": 6
                                            },
                                            "o": {
                                                "a": 0,
                                                "k": 100,
                                                "ix": 7
                                            },
                                            "sk": {
                                                "a": 0,
                                                "k": 0,
                                                "ix": 4
                                            },
                                            "sa": {
                                                "a": 0,
                                                "k": 0,
                                                "ix": 5
                                            },
                                            "nm": "Transform"
                                        }
                                    ],
                                    "nm": "Group 38",
                                    "np": 3,
                                    "cix": 2,
                                    "bm": 0,
                                    "ix": 1,
                                    "mn": "ADBE Vector Group",
                                    "hd": false
                                }
                            ],
                            "ip": 20,
                            "op": 574,
                            "st": 20,
                            "bm": 0
                        },
                        {
                            "ddd": 0,
                            "ind": 7,
                            "ty": 4,
                            "nm": "Code 2",
                            "sr": 1,
                            "ks": {
                                "o": {
                                    "a": 0,
                                    "k": 100,
                                    "ix": 11
                                },
                                "r": {
                                    "a": 0,
                                    "k": 0,
                                    "ix": 10
                                },
                                "p": {
                                    "a": 0,
                                    "k": [
                                        930.976,
                                        573.503,
                                        0
                                    ],
                                    "ix": 2,
                                    "l": 2
                                },
                                "a": {
                                    "a": 0,
                                    "k": [
                                        870.976,
                                        321.003,
                                        0
                                    ],
                                    "ix": 1,
                                    "l": 2
                                },
                                "s": {
                                    "a": 0,
                                    "k": [
                                        100,
                                        100,
                                        100
                                    ],
                                    "ix": 6,
                                    "l": 2
                                }
                            },
                            "ao": 0,
                            "shapes": [
                                {
                                    "ty": "gr",
                                    "it": [
                                        {
                                            "ty": "gr",
                                            "it": [
                                                {
                                                    "ind": 0,
                                                    "ty": "sh",
                                                    "ix": 1,
                                                    "ks": {
                                                        "a": 0,
                                                        "k": {
                                                            "i": [
                                                                [
                                                                    0,
                                                                    0
                                                                ],
                                                                [
                                                                    0,
                                                                    0
                                                                ]
                                                            ],
                                                            "o": [
                                                                [
                                                                    0,
                                                                    0
                                                                ],
                                                                [
                                                                    0,
                                                                    0
                                                                ]
                                                            ],
                                                            "v": [
                                                                [
                                                                    -563.284,
                                                                    0
                                                                ],
                                                                [
                                                                    -73.716,
                                                                    0
                                                                ]
                                                            ],
                                                            "c": false
                                                        },
                                                        "ix": 2
                                                    },
                                                    "nm": "Path 1",
                                                    "mn": "ADBE Vector Shape - Group",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "st",
                                                    "c": {
                                                        "a": 0,
                                                        "k": [
                                                            0,
                                                            0,
                                                            0.003921568859,
                                                            1
                                                        ],
                                                        "ix": 3,
                                                        "x": "var $bm_rt;\n$bm_rt = thisComp.layer('Color CTRL').content('Color A').content('Fill 1').color;"
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 100,
                                                        "ix": 4
                                                    },
                                                    "w": {
                                                        "a": 0,
                                                        "k": 30,
                                                        "ix": 5
                                                    },
                                                    "lc": 2,
                                                    "lj": 2,
                                                    "bm": 0,
                                                    "nm": "Stroke 1",
                                                    "mn": "ADBE Vector Graphic - Stroke",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "tm",
                                                    "s": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 1
                                                    },
                                                    "e": {
                                                        "a": 1,
                                                        "k": [
                                                            {
                                                                "i": {
                                                                    "x": [
                                                                        0.833
                                                                    ],
                                                                    "y": [
                                                                        0.833
                                                                    ]
                                                                },
                                                                "o": {
                                                                    "x": [
                                                                        0.167
                                                                    ],
                                                                    "y": [
                                                                        0.167
                                                                    ]
                                                                },
                                                                "t": 10,
                                                                "s": [
                                                                    0
                                                                ]
                                                            },
                                                            {
                                                                "t": 36.896484375,
                                                                "s": [
                                                                    100
                                                                ]
                                                            }
                                                        ],
                                                        "ix": 2
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 3
                                                    },
                                                    "m": 1,
                                                    "ix": 3,
                                                    "nm": "Trim Paths 1",
                                                    "mn": "ADBE Vector Filter - Trim",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "tr",
                                                    "p": {
                                                        "a": 0,
                                                        "k": [
                                                            541.284,
                                                            111.801
                                                        ],
                                                        "ix": 2
                                                    },
                                                    "a": {
                                                        "a": 0,
                                                        "k": [
                                                            0,
                                                            0
                                                        ],
                                                        "ix": 1
                                                    },
                                                    "s": {
                                                        "a": 0,
                                                        "k": [
                                                            100,
                                                            100
                                                        ],
                                                        "ix": 3
                                                    },
                                                    "r": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 6
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 100,
                                                        "ix": 7
                                                    },
                                                    "sk": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 4
                                                    },
                                                    "sa": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 5
                                                    },
                                                    "nm": "Transform"
                                                }
                                            ],
                                            "nm": "Group 35",
                                            "np": 3,
                                            "cix": 2,
                                            "bm": 0,
                                            "ix": 1,
                                            "mn": "ADBE Vector Group",
                                            "hd": false
                                        },
                                        {
                                            "ty": "gr",
                                            "it": [
                                                {
                                                    "ind": 0,
                                                    "ty": "sh",
                                                    "ix": 1,
                                                    "ks": {
                                                        "a": 0,
                                                        "k": {
                                                            "i": [
                                                                [
                                                                    0,
                                                                    0
                                                                ],
                                                                [
                                                                    0,
                                                                    0
                                                                ]
                                                            ],
                                                            "o": [
                                                                [
                                                                    0,
                                                                    0
                                                                ],
                                                                [
                                                                    0,
                                                                    0
                                                                ]
                                                            ],
                                                            "v": [
                                                                [
                                                                    -729.102,
                                                                    0
                                                                ],
                                                                [
                                                                    -590.898,
                                                                    0
                                                                ]
                                                            ],
                                                            "c": false
                                                        },
                                                        "ix": 2
                                                    },
                                                    "nm": "Path 1",
                                                    "mn": "ADBE Vector Shape - Group",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "st",
                                                    "c": {
                                                        "a": 0,
                                                        "k": [
                                                            0,
                                                            0,
                                                            0.003921568859,
                                                            1
                                                        ],
                                                        "ix": 3,
                                                        "x": "var $bm_rt;\n$bm_rt = thisComp.layer('Color CTRL').content('Color A').content('Fill 1').color;"
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 100,
                                                        "ix": 4
                                                    },
                                                    "w": {
                                                        "a": 0,
                                                        "k": 30,
                                                        "ix": 5
                                                    },
                                                    "lc": 2,
                                                    "lj": 2,
                                                    "bm": 0,
                                                    "nm": "Stroke 1",
                                                    "mn": "ADBE Vector Graphic - Stroke",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "tm",
                                                    "s": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 1
                                                    },
                                                    "e": {
                                                        "a": 1,
                                                        "k": [
                                                            {
                                                                "i": {
                                                                    "x": [
                                                                        0.833
                                                                    ],
                                                                    "y": [
                                                                        0.833
                                                                    ]
                                                                },
                                                                "o": {
                                                                    "x": [
                                                                        0.167
                                                                    ],
                                                                    "y": [
                                                                        0.167
                                                                    ]
                                                                },
                                                                "t": 35.552,
                                                                "s": [
                                                                    0
                                                                ]
                                                            },
                                                            {
                                                                "t": 49,
                                                                "s": [
                                                                    100
                                                                ]
                                                            }
                                                        ],
                                                        "ix": 2
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 3
                                                    },
                                                    "m": 1,
                                                    "ix": 3,
                                                    "nm": "Trim Paths 1",
                                                    "mn": "ADBE Vector Filter - Trim",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "tr",
                                                    "p": {
                                                        "a": 0,
                                                        "k": [
                                                            1269.144,
                                                            111.801
                                                        ],
                                                        "ix": 2
                                                    },
                                                    "a": {
                                                        "a": 0,
                                                        "k": [
                                                            0,
                                                            0
                                                        ],
                                                        "ix": 1
                                                    },
                                                    "s": {
                                                        "a": 0,
                                                        "k": [
                                                            100,
                                                            100
                                                        ],
                                                        "ix": 3
                                                    },
                                                    "r": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 6
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 100,
                                                        "ix": 7
                                                    },
                                                    "sk": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 4
                                                    },
                                                    "sa": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 5
                                                    },
                                                    "nm": "Transform"
                                                }
                                            ],
                                            "nm": "Group 17",
                                            "np": 3,
                                            "cix": 2,
                                            "bm": 0,
                                            "ix": 2,
                                            "mn": "ADBE Vector Group",
                                            "hd": false
                                        },
                                        {
                                            "ty": "tr",
                                            "p": {
                                                "a": 0,
                                                "k": [
                                                    658.123,
                                                    111.801
                                                ],
                                                "ix": 2
                                            },
                                            "a": {
                                                "a": 0,
                                                "k": [
                                                    658.123,
                                                    111.801
                                                ],
                                                "ix": 1
                                            },
                                            "s": {
                                                "a": 0,
                                                "k": [
                                                    100,
                                                    100
                                                ],
                                                "ix": 3
                                            },
                                            "r": {
                                                "a": 0,
                                                "k": 0,
                                                "ix": 6
                                            },
                                            "o": {
                                                "a": 0,
                                                "k": 100,
                                                "ix": 7
                                            },
                                            "sk": {
                                                "a": 0,
                                                "k": 0,
                                                "ix": 4
                                            },
                                            "sa": {
                                                "a": 0,
                                                "k": 0,
                                                "ix": 5
                                            },
                                            "nm": "Transform"
                                        }
                                    ],
                                    "nm": "Group 37",
                                    "np": 2,
                                    "cix": 2,
                                    "bm": 0,
                                    "ix": 1,
                                    "mn": "ADBE Vector Group",
                                    "hd": false
                                }
                            ],
                            "ip": 10,
                            "op": 564,
                            "st": 10,
                            "bm": 0
                        },
                        {
                            "ddd": 0,
                            "ind": 8,
                            "ty": 4,
                            "nm": "Code",
                            "sr": 1,
                            "ks": {
                                "o": {
                                    "a": 0,
                                    "k": 100,
                                    "ix": 11
                                },
                                "r": {
                                    "a": 0,
                                    "k": 0,
                                    "ix": 10
                                },
                                "p": {
                                    "a": 0,
                                    "k": [
                                        930.976,
                                        573.503,
                                        0
                                    ],
                                    "ix": 2,
                                    "l": 2
                                },
                                "a": {
                                    "a": 0,
                                    "k": [
                                        870.976,
                                        321.003,
                                        0
                                    ],
                                    "ix": 1,
                                    "l": 2
                                },
                                "s": {
                                    "a": 0,
                                    "k": [
                                        100,
                                        100,
                                        100
                                    ],
                                    "ix": 6,
                                    "l": 2
                                }
                            },
                            "ao": 0,
                            "shapes": [
                                {
                                    "ty": "gr",
                                    "it": [
                                        {
                                            "ty": "gr",
                                            "it": [
                                                {
                                                    "ind": 0,
                                                    "ty": "sh",
                                                    "ix": 1,
                                                    "ks": {
                                                        "a": 0,
                                                        "k": {
                                                            "i": [
                                                                [
                                                                    0,
                                                                    0
                                                                ],
                                                                [
                                                                    0,
                                                                    0
                                                                ]
                                                            ],
                                                            "o": [
                                                                [
                                                                    0,
                                                                    0
                                                                ],
                                                                [
                                                                    0,
                                                                    0
                                                                ]
                                                            ],
                                                            "v": [
                                                                [
                                                                    66.024,
                                                                    0
                                                                ],
                                                                [
                                                                    199.976,
                                                                    0
                                                                ]
                                                            ],
                                                            "c": false
                                                        },
                                                        "ix": 2
                                                    },
                                                    "nm": "Path 1",
                                                    "mn": "ADBE Vector Shape - Group",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "st",
                                                    "c": {
                                                        "a": 0,
                                                        "k": [
                                                            0,
                                                            0,
                                                            0.011764706112,
                                                            1
                                                        ],
                                                        "ix": 3,
                                                        "x": "var $bm_rt;\n$bm_rt = thisComp.layer('Color CTRL').content('Color B').content('Fill 1').color;"
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 100,
                                                        "ix": 4
                                                    },
                                                    "w": {
                                                        "a": 0,
                                                        "k": 30,
                                                        "ix": 5
                                                    },
                                                    "lc": 2,
                                                    "lj": 2,
                                                    "bm": 0,
                                                    "nm": "Stroke 1",
                                                    "mn": "ADBE Vector Graphic - Stroke",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "tm",
                                                    "s": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 1
                                                    },
                                                    "e": {
                                                        "a": 1,
                                                        "k": [
                                                            {
                                                                "i": {
                                                                    "x": [
                                                                        0.833
                                                                    ],
                                                                    "y": [
                                                                        0.833
                                                                    ]
                                                                },
                                                                "o": {
                                                                    "x": [
                                                                        0.167
                                                                    ],
                                                                    "y": [
                                                                        0.167
                                                                    ]
                                                                },
                                                                "t": -6,
                                                                "s": [
                                                                    0
                                                                ]
                                                            },
                                                            {
                                                                "i": {
                                                                    "x": [
                                                                        0.833
                                                                    ],
                                                                    "y": [
                                                                        0.833
                                                                    ]
                                                                },
                                                                "o": {
                                                                    "x": [
                                                                        0.167
                                                                    ],
                                                                    "y": [
                                                                        0.167
                                                                    ]
                                                                },
                                                                "t": 0,
                                                                "s": [
                                                                    0
                                                                ]
                                                            },
                                                            {
                                                                "t": 6.6669921875,
                                                                "s": [
                                                                    100
                                                                ]
                                                            }
                                                        ],
                                                        "ix": 2
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 3
                                                    },
                                                    "m": 1,
                                                    "ix": 3,
                                                    "nm": "Trim Paths 1",
                                                    "mn": "ADBE Vector Filter - Trim",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "tr",
                                                    "p": {
                                                        "a": 0,
                                                        "k": [
                                                            -88.024,
                                                            42
                                                        ],
                                                        "ix": 2
                                                    },
                                                    "a": {
                                                        "a": 0,
                                                        "k": [
                                                            0,
                                                            0
                                                        ],
                                                        "ix": 1
                                                    },
                                                    "s": {
                                                        "a": 0,
                                                        "k": [
                                                            100,
                                                            100
                                                        ],
                                                        "ix": 3
                                                    },
                                                    "r": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 6
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 100,
                                                        "ix": 7
                                                    },
                                                    "sk": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 4
                                                    },
                                                    "sa": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 5
                                                    },
                                                    "nm": "Transform"
                                                }
                                            ],
                                            "nm": "Group 34",
                                            "np": 3,
                                            "cix": 2,
                                            "bm": 0,
                                            "ix": 1,
                                            "mn": "ADBE Vector Group",
                                            "hd": false
                                        },
                                        {
                                            "ty": "gr",
                                            "it": [
                                                {
                                                    "ind": 0,
                                                    "ty": "sh",
                                                    "ix": 1,
                                                    "ks": {
                                                        "a": 0,
                                                        "k": {
                                                            "i": [
                                                                [
                                                                    0,
                                                                    0
                                                                ],
                                                                [
                                                                    0,
                                                                    0
                                                                ]
                                                            ],
                                                            "o": [
                                                                [
                                                                    0,
                                                                    0
                                                                ],
                                                                [
                                                                    0,
                                                                    0
                                                                ]
                                                            ],
                                                            "v": [
                                                                [
                                                                    -69.102,
                                                                    0
                                                                ],
                                                                [
                                                                    69.102,
                                                                    0
                                                                ]
                                                            ],
                                                            "c": false
                                                        },
                                                        "ix": 2
                                                    },
                                                    "nm": "Path 1",
                                                    "mn": "ADBE Vector Shape - Group",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "st",
                                                    "c": {
                                                        "a": 0,
                                                        "k": [
                                                            0,
                                                            0,
                                                            0.011764706112,
                                                            1
                                                        ],
                                                        "ix": 3,
                                                        "x": "var $bm_rt;\n$bm_rt = thisComp.layer('Color CTRL').content('Color B').content('Fill 1').color;"
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 100,
                                                        "ix": 4
                                                    },
                                                    "w": {
                                                        "a": 0,
                                                        "k": 30,
                                                        "ix": 5
                                                    },
                                                    "lc": 2,
                                                    "lj": 2,
                                                    "bm": 0,
                                                    "nm": "Stroke 1",
                                                    "mn": "ADBE Vector Graphic - Stroke",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "tm",
                                                    "s": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 1
                                                    },
                                                    "e": {
                                                        "a": 1,
                                                        "k": [
                                                            {
                                                                "i": {
                                                                    "x": [
                                                                        0.833
                                                                    ],
                                                                    "y": [
                                                                        0.833
                                                                    ]
                                                                },
                                                                "o": {
                                                                    "x": [
                                                                        0.167
                                                                    ],
                                                                    "y": [
                                                                        0.167
                                                                    ]
                                                                },
                                                                "t": 6.667,
                                                                "s": [
                                                                    0
                                                                ]
                                                            },
                                                            {
                                                                "t": 12,
                                                                "s": [
                                                                    100
                                                                ]
                                                            }
                                                        ],
                                                        "ix": 2
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 3
                                                    },
                                                    "m": 1,
                                                    "ix": 3,
                                                    "nm": "Trim Paths 1",
                                                    "mn": "ADBE Vector Filter - Trim",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "tr",
                                                    "p": {
                                                        "a": 0,
                                                        "k": [
                                                            247.011,
                                                            42
                                                        ],
                                                        "ix": 2
                                                    },
                                                    "a": {
                                                        "a": 0,
                                                        "k": [
                                                            0,
                                                            0
                                                        ],
                                                        "ix": 1
                                                    },
                                                    "s": {
                                                        "a": 0,
                                                        "k": [
                                                            100,
                                                            100
                                                        ],
                                                        "ix": 3
                                                    },
                                                    "r": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 6
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 100,
                                                        "ix": 7
                                                    },
                                                    "sk": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 4
                                                    },
                                                    "sa": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 5
                                                    },
                                                    "nm": "Transform"
                                                }
                                            ],
                                            "nm": "Group 15",
                                            "np": 3,
                                            "cix": 2,
                                            "bm": 0,
                                            "ix": 2,
                                            "mn": "ADBE Vector Group",
                                            "hd": false
                                        },
                                        {
                                            "ty": "gr",
                                            "it": [
                                                {
                                                    "ind": 0,
                                                    "ty": "sh",
                                                    "ix": 1,
                                                    "ks": {
                                                        "a": 0,
                                                        "k": {
                                                            "i": [
                                                                [
                                                                    0,
                                                                    0
                                                                ],
                                                                [
                                                                    0,
                                                                    0
                                                                ]
                                                            ],
                                                            "o": [
                                                                [
                                                                    0,
                                                                    0
                                                                ],
                                                                [
                                                                    0,
                                                                    0
                                                                ]
                                                            ],
                                                            "v": [
                                                                [
                                                                    -0.045,
                                                                    0
                                                                ],
                                                                [
                                                                    0.045,
                                                                    0
                                                                ]
                                                            ],
                                                            "c": false
                                                        },
                                                        "ix": 2
                                                    },
                                                    "nm": "Path 1",
                                                    "mn": "ADBE Vector Shape - Group",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "st",
                                                    "c": {
                                                        "a": 0,
                                                        "k": [
                                                            0,
                                                            0,
                                                            0.003921568859,
                                                            1
                                                        ],
                                                        "ix": 3,
                                                        "x": "var $bm_rt;\n$bm_rt = thisComp.layer('Color CTRL').content('Color A').content('Fill 1').color;"
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 100,
                                                        "ix": 4
                                                    },
                                                    "w": {
                                                        "a": 0,
                                                        "k": 30,
                                                        "ix": 5
                                                    },
                                                    "lc": 2,
                                                    "lj": 2,
                                                    "bm": 0,
                                                    "nm": "Stroke 1",
                                                    "mn": "ADBE Vector Graphic - Stroke",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "tm",
                                                    "s": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 1
                                                    },
                                                    "e": {
                                                        "a": 1,
                                                        "k": [
                                                            {
                                                                "i": {
                                                                    "x": [
                                                                        0.833
                                                                    ],
                                                                    "y": [
                                                                        0.833
                                                                    ]
                                                                },
                                                                "o": {
                                                                    "x": [
                                                                        0.167
                                                                    ],
                                                                    "y": [
                                                                        0.167
                                                                    ]
                                                                },
                                                                "t": 12,
                                                                "s": [
                                                                    0
                                                                ]
                                                            },
                                                            {
                                                                "t": 13.3330078125,
                                                                "s": [
                                                                    100
                                                                ]
                                                            }
                                                        ],
                                                        "ix": 2
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 3
                                                    },
                                                    "m": 1,
                                                    "ix": 3,
                                                    "nm": "Trim Paths 1",
                                                    "mn": "ADBE Vector Filter - Trim",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "tr",
                                                    "p": {
                                                        "a": 0,
                                                        "k": [
                                                            384.919,
                                                            41.616
                                                        ],
                                                        "ix": 2
                                                    },
                                                    "a": {
                                                        "a": 0,
                                                        "k": [
                                                            0,
                                                            0
                                                        ],
                                                        "ix": 1
                                                    },
                                                    "s": {
                                                        "a": 0,
                                                        "k": [
                                                            100,
                                                            100
                                                        ],
                                                        "ix": 3
                                                    },
                                                    "r": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 6
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 100,
                                                        "ix": 7
                                                    },
                                                    "sk": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 4
                                                    },
                                                    "sa": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 5
                                                    },
                                                    "nm": "Transform"
                                                }
                                            ],
                                            "nm": "Group 2",
                                            "np": 3,
                                            "cix": 2,
                                            "bm": 0,
                                            "ix": 3,
                                            "mn": "ADBE Vector Group",
                                            "hd": false
                                        },
                                        {
                                            "ty": "gr",
                                            "it": [
                                                {
                                                    "ind": 0,
                                                    "ty": "sh",
                                                    "ix": 1,
                                                    "ks": {
                                                        "a": 0,
                                                        "k": {
                                                            "i": [
                                                                [
                                                                    0,
                                                                    0
                                                                ],
                                                                [
                                                                    0,
                                                                    0
                                                                ]
                                                            ],
                                                            "o": [
                                                                [
                                                                    0,
                                                                    0
                                                                ],
                                                                [
                                                                    0,
                                                                    0
                                                                ]
                                                            ],
                                                            "v": [
                                                                [
                                                                    -199.976,
                                                                    0
                                                                ],
                                                                [
                                                                    199.976,
                                                                    0
                                                                ]
                                                            ],
                                                            "c": false
                                                        },
                                                        "ix": 2
                                                    },
                                                    "nm": "Path 1",
                                                    "mn": "ADBE Vector Shape - Group",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "st",
                                                    "c": {
                                                        "a": 0,
                                                        "k": [
                                                            0,
                                                            0,
                                                            0.003921568859,
                                                            1
                                                        ],
                                                        "ix": 3,
                                                        "x": "var $bm_rt;\n$bm_rt = thisComp.layer('Color CTRL').content('Color A').content('Fill 1').color;"
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 100,
                                                        "ix": 4
                                                    },
                                                    "w": {
                                                        "a": 0,
                                                        "k": 30,
                                                        "ix": 5
                                                    },
                                                    "lc": 2,
                                                    "lj": 2,
                                                    "bm": 0,
                                                    "nm": "Stroke 1",
                                                    "mn": "ADBE Vector Graphic - Stroke",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "tm",
                                                    "s": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 1
                                                    },
                                                    "e": {
                                                        "a": 1,
                                                        "k": [
                                                            {
                                                                "i": {
                                                                    "x": [
                                                                        0.833
                                                                    ],
                                                                    "y": [
                                                                        0.833
                                                                    ]
                                                                },
                                                                "o": {
                                                                    "x": [
                                                                        0.167
                                                                    ],
                                                                    "y": [
                                                                        0.167
                                                                    ]
                                                                },
                                                                "t": 12,
                                                                "s": [
                                                                    0
                                                                ]
                                                            },
                                                            {
                                                                "t": 25.3330078125,
                                                                "s": [
                                                                    100
                                                                ]
                                                            }
                                                        ],
                                                        "ix": 2
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 3
                                                    },
                                                    "m": 1,
                                                    "ix": 3,
                                                    "nm": "Trim Paths 1",
                                                    "mn": "ADBE Vector Filter - Trim",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "tr",
                                                    "p": {
                                                        "a": 0,
                                                        "k": [
                                                            659.976,
                                                            42
                                                        ],
                                                        "ix": 2
                                                    },
                                                    "a": {
                                                        "a": 0,
                                                        "k": [
                                                            0,
                                                            0
                                                        ],
                                                        "ix": 1
                                                    },
                                                    "s": {
                                                        "a": 0,
                                                        "k": [
                                                            100,
                                                            100
                                                        ],
                                                        "ix": 3
                                                    },
                                                    "r": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 6
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 100,
                                                        "ix": 7
                                                    },
                                                    "sk": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 4
                                                    },
                                                    "sa": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 5
                                                    },
                                                    "nm": "Transform"
                                                }
                                            ],
                                            "nm": "Group 33",
                                            "np": 3,
                                            "cix": 2,
                                            "bm": 0,
                                            "ix": 4,
                                            "mn": "ADBE Vector Group",
                                            "hd": false
                                        },
                                        {
                                            "ty": "gr",
                                            "it": [
                                                {
                                                    "ind": 0,
                                                    "ty": "sh",
                                                    "ix": 1,
                                                    "ks": {
                                                        "a": 0,
                                                        "k": {
                                                            "i": [
                                                                [
                                                                    0,
                                                                    0
                                                                ],
                                                                [
                                                                    0,
                                                                    0
                                                                ]
                                                            ],
                                                            "o": [
                                                                [
                                                                    0,
                                                                    0
                                                                ],
                                                                [
                                                                    0,
                                                                    0
                                                                ]
                                                            ],
                                                            "v": [
                                                                [
                                                                    -402.047,
                                                                    0
                                                                ],
                                                                [
                                                                    -355.953,
                                                                    0
                                                                ]
                                                            ],
                                                            "c": false
                                                        },
                                                        "ix": 2
                                                    },
                                                    "nm": "Path 1",
                                                    "mn": "ADBE Vector Shape - Group",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "st",
                                                    "c": {
                                                        "a": 0,
                                                        "k": [
                                                            0,
                                                            0,
                                                            0.011764706112,
                                                            1
                                                        ],
                                                        "ix": 3,
                                                        "x": "var $bm_rt;\n$bm_rt = thisComp.layer('Color CTRL').content('Color B').content('Fill 1').color;"
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 100,
                                                        "ix": 4
                                                    },
                                                    "w": {
                                                        "a": 0,
                                                        "k": 30,
                                                        "ix": 5
                                                    },
                                                    "lc": 2,
                                                    "lj": 2,
                                                    "bm": 0,
                                                    "nm": "Stroke 1",
                                                    "mn": "ADBE Vector Graphic - Stroke",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "tm",
                                                    "s": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 1
                                                    },
                                                    "e": {
                                                        "a": 1,
                                                        "k": [
                                                            {
                                                                "i": {
                                                                    "x": [
                                                                        0.833
                                                                    ],
                                                                    "y": [
                                                                        0.833
                                                                    ]
                                                                },
                                                                "o": {
                                                                    "x": [
                                                                        0.167
                                                                    ],
                                                                    "y": [
                                                                        0.167
                                                                    ]
                                                                },
                                                                "t": 21.333,
                                                                "s": [
                                                                    0
                                                                ]
                                                            },
                                                            {
                                                                "t": 40,
                                                                "s": [
                                                                    100
                                                                ]
                                                            }
                                                        ],
                                                        "ix": 2
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 3
                                                    },
                                                    "m": 1,
                                                    "ix": 3,
                                                    "nm": "Trim Paths 1",
                                                    "mn": "ADBE Vector Filter - Trim",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "tr",
                                                    "p": {
                                                        "a": 0,
                                                        "k": [
                                                            1341.953,
                                                            41.601
                                                        ],
                                                        "ix": 2
                                                    },
                                                    "a": {
                                                        "a": 0,
                                                        "k": [
                                                            0,
                                                            0
                                                        ],
                                                        "ix": 1
                                                    },
                                                    "s": {
                                                        "a": 0,
                                                        "k": [
                                                            100,
                                                            100
                                                        ],
                                                        "ix": 3
                                                    },
                                                    "r": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 6
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 100,
                                                        "ix": 7
                                                    },
                                                    "sk": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 4
                                                    },
                                                    "sa": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 5
                                                    },
                                                    "nm": "Transform"
                                                }
                                            ],
                                            "nm": "Group 23",
                                            "np": 3,
                                            "cix": 2,
                                            "bm": 0,
                                            "ix": 5,
                                            "mn": "ADBE Vector Group",
                                            "hd": false
                                        },
                                        {
                                            "ty": "tr",
                                            "p": {
                                                "a": 0,
                                                "k": [
                                                    728,
                                                    41.801
                                                ],
                                                "ix": 2
                                            },
                                            "a": {
                                                "a": 0,
                                                "k": [
                                                    728,
                                                    41.801
                                                ],
                                                "ix": 1
                                            },
                                            "s": {
                                                "a": 0,
                                                "k": [
                                                    100,
                                                    100
                                                ],
                                                "ix": 3
                                            },
                                            "r": {
                                                "a": 0,
                                                "k": 0,
                                                "ix": 6
                                            },
                                            "o": {
                                                "a": 0,
                                                "k": 100,
                                                "ix": 7
                                            },
                                            "sk": {
                                                "a": 0,
                                                "k": 0,
                                                "ix": 4
                                            },
                                            "sa": {
                                                "a": 0,
                                                "k": 0,
                                                "ix": 5
                                            },
                                            "nm": "Transform"
                                        }
                                    ],
                                    "nm": "Group 36",
                                    "np": 5,
                                    "cix": 2,
                                    "bm": 0,
                                    "ix": 1,
                                    "mn": "ADBE Vector Group",
                                    "hd": false
                                }
                            ],
                            "ip": 0,
                            "op": 554,
                            "st": 0,
                            "bm": 0
                        },
                        {
                            "ddd": 0,
                            "ind": 9,
                            "ty": 4,
                            "nm": "Window",
                            "sr": 1,
                            "ks": {
                                "o": {
                                    "a": 0,
                                    "k": 100,
                                    "ix": 11
                                },
                                "r": {
                                    "a": 0,
                                    "k": 0,
                                    "ix": 10
                                },
                                "p": {
                                    "a": 0,
                                    "k": [
                                        604.326,
                                        535.805,
                                        0
                                    ],
                                    "ix": 2,
                                    "l": 2
                                },
                                "a": {
                                    "a": 0,
                                    "k": [
                                        7.5,
                                        -98,
                                        0
                                    ],
                                    "ix": 1,
                                    "l": 2
                                },
                                "s": {
                                    "a": 0,
                                    "k": [
                                        149.721,
                                        79.268,
                                        100
                                    ],
                                    "ix": 6,
                                    "l": 2
                                }
                            },
                            "ao": 0,
                            "shapes": [
                                {
                                    "ty": "gr",
                                    "it": [
                                        {
                                            "ty": "rc",
                                            "d": 1,
                                            "s": {
                                                "a": 0,
                                                "k": [
                                                    855,
                                                    688
                                                ],
                                                "ix": 2
                                            },
                                            "p": {
                                                "a": 0,
                                                "k": [
                                                    0,
                                                    0
                                                ],
                                                "ix": 3
                                            },
                                            "r": {
                                                "a": 0,
                                                "k": 25,
                                                "ix": 4
                                            },
                                            "nm": "Rectangle Path 1",
                                            "mn": "ADBE Vector Shape - Rect",
                                            "hd": false
                                        },
                                        {
                                            "ty": "st",
                                            "c": {
                                                "a": 0,
                                                "k": [
                                                    0,
                                                    0,
                                                    0,
                                                    1
                                                ],
                                                "ix": 3
                                            },
                                            "o": {
                                                "a": 0,
                                                "k": 100,
                                                "ix": 4
                                            },
                                            "w": {
                                                "a": 0,
                                                "k": 4,
                                                "ix": 5
                                            },
                                            "lc": 1,
                                            "lj": 1,
                                            "ml": 4,
                                            "bm": 0,
                                            "nm": "Stroke 1",
                                            "mn": "ADBE Vector Graphic - Stroke",
                                            "hd": true
                                        },
                                        {
                                            "ty": "fl",
                                            "c": {
                                                "a": 0,
                                                "k": [
                                                    0.952941176471,
                                                    0.952941176471,
                                                    0.952941176471,
                                                    1
                                                ],
                                                "ix": 4
                                            },
                                            "o": {
                                                "a": 0,
                                                "k": 100,
                                                "ix": 5
                                            },
                                            "r": 1,
                                            "bm": 0,
                                            "nm": "Fill 1",
                                            "mn": "ADBE Vector Graphic - Fill",
                                            "hd": false
                                        },
                                        {
                                            "ty": "gr",
                                            "it": [
                                                {
                                                    "ty": "st",
                                                    "c": {
                                                        "a": 0,
                                                        "k": [
                                                            0,
                                                            0,
                                                            0.011764706112,
                                                            1
                                                        ],
                                                        "ix": 3,
                                                        "x": "var $bm_rt;\n$bm_rt = thisComp.layer('Color CTRL').content('Color B').content('Fill 1').color;"
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 100,
                                                        "ix": 4
                                                    },
                                                    "w": {
                                                        "a": 0,
                                                        "k": 30,
                                                        "ix": 5
                                                    },
                                                    "lc": 2,
                                                    "lj": 2,
                                                    "bm": 0,
                                                    "nm": "Stroke 1",
                                                    "mn": "ADBE Vector Graphic - Stroke",
                                                    "hd": false
                                                },
                                                {
                                                    "ty": "tr",
                                                    "p": {
                                                        "a": 0,
                                                        "k": [
                                                            0,
                                                            0
                                                        ],
                                                        "ix": 2
                                                    },
                                                    "a": {
                                                        "a": 0,
                                                        "k": [
                                                            0,
                                                            0
                                                        ],
                                                        "ix": 1
                                                    },
                                                    "s": {
                                                        "a": 0,
                                                        "k": [
                                                            100,
                                                            100
                                                        ],
                                                        "ix": 3
                                                    },
                                                    "r": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 6
                                                    },
                                                    "o": {
                                                        "a": 0,
                                                        "k": 100,
                                                        "ix": 7
                                                    },
                                                    "sk": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 4
                                                    },
                                                    "sa": {
                                                        "a": 0,
                                                        "k": 0,
                                                        "ix": 5
                                                    },
                                                    "nm": "Transform"
                                                }
                                            ],
                                            "nm": "Group 1",
                                            "np": 1,
                                            "cix": 2,
                                            "bm": 0,
                                            "ix": 4,
                                            "mn": "ADBE Vector Group",
                                            "hd": false
                                        },
                                        {
                                            "ty": "tr",
                                            "p": {
                                                "a": 0,
                                                "k": [
                                                    7.5,
                                                    -98
                                                ],
                                                "ix": 2
                                            },
                                            "a": {
                                                "a": 0,
                                                "k": [
                                                    0,
                                                    0
                                                ],
                                                "ix": 1
                                            },
                                            "s": {
                                                "a": 0,
                                                "k": [
                                                    100,
                                                    100
                                                ],
                                                "ix": 3
                                            },
                                            "r": {
                                                "a": 0,
                                                "k": 0,
                                                "ix": 6
                                            },
                                            "o": {
                                                "a": 0,
                                                "k": 100,
                                                "ix": 7
                                            },
                                            "sk": {
                                                "a": 0,
                                                "k": 0,
                                                "ix": 4
                                            },
                                            "sa": {
                                                "a": 0,
                                                "k": 0,
                                                "ix": 5
                                            },
                                            "nm": "Transform"
                                        }
                                    ],
                                    "nm": "Rectangle 1",
                                    "np": 4,
                                    "cix": 2,
                                    "bm": 0,
                                    "ix": 1,
                                    "mn": "ADBE Vector Group",
                                    "hd": false
                                }
                            ],
                            "ip": 0,
                            "op": 7983,
                            "st": 0,
                            "bm": 0
                        },
                        {
                            "ddd": 0,
                            "ind": 10,
                            "ty": 4,
                            "nm": "Color CTRL",
                            "hd": true,
                            "sr": 1,
                            "ks": {
                                "o": {
                                    "a": 0,
                                    "k": 100,
                                    "ix": 11
                                },
                                "r": {
                                    "a": 0,
                                    "k": 0,
                                    "ix": 10
                                },
                                "p": {
                                    "a": 0,
                                    "k": [
                                        1149.483,
                                        394.348,
                                        0
                                    ],
                                    "ix": 2,
                                    "l": 2
                                },
                                "a": {
                                    "a": 0,
                                    "k": [
                                        7.691,
                                        265.477,
                                        0
                                    ],
                                    "ix": 1,
                                    "l": 2
                                },
                                "s": {
                                    "a": 0,
                                    "k": [
                                        100,
                                        100,
                                        100
                                    ],
                                    "ix": 6,
                                    "l": 2
                                }
                            },
                            "ao": 0,
                            "shapes": [
                                {
                                    "ty": "gr",
                                    "it": [
                                        {
                                            "d": 1,
                                            "ty": "el",
                                            "s": {
                                                "a": 0,
                                                "k": [
                                                    78.31,
                                                    78.31
                                                ],
                                                "ix": 2
                                            },
                                            "p": {
                                                "a": 0,
                                                "k": [
                                                    0,
                                                    0
                                                ],
                                                "ix": 3
                                            },
                                            "nm": "Ellipse Path 1",
                                            "mn": "ADBE Vector Shape - Ellipse",
                                            "hd": false
                                        },
                                        {
                                            "ty": "fl",
                                            "c": {
                                                "a": 0,
                                                "k": [
                                                    0,
                                                    0.5176470588235295,
                                                    0.788235294117647,
                                                    1
                                                ],
                                                "ix": 4
                                            },
                                            "o": {
                                                "a": 0,
                                                "k": 100,
                                                "ix": 5
                                            },
                                            "r": 1,
                                            "bm": 0,
                                            "nm": "Fill 1",
                                            "mn": "ADBE Vector Graphic - Fill",
                                            "hd": false
                                        },
                                        {
                                            "ty": "tr",
                                            "p": {
                                                "a": 0,
                                                "k": [
                                                    7.691,
                                                    265.477
                                                ],
                                                "ix": 2
                                            },
                                            "a": {
                                                "a": 0,
                                                "k": [
                                                    0,
                                                    0
                                                ],
                                                "ix": 1
                                            },
                                            "s": {
                                                "a": 0,
                                                "k": [
                                                    100,
                                                    100
                                                ],
                                                "ix": 3
                                            },
                                            "r": {
                                                "a": 0,
                                                "k": 0,
                                                "ix": 6
                                            },
                                            "o": {
                                                "a": 0,
                                                "k": 100,
                                                "ix": 7
                                            },
                                            "sk": {
                                                "a": 0,
                                                "k": 0,
                                                "ix": 4
                                            },
                                            "sa": {
                                                "a": 0,
                                                "k": 0,
                                                "ix": 5
                                            },
                                            "nm": "Transform"
                                        }
                                    ],
                                    "nm": "Color A",
                                    "np": 2,
                                    "cix": 2,
                                    "bm": 0,
                                    "ix": 1,
                                    "mn": "ADBE Vector Group",
                                    "hd": false
                                },
                                {
                                    "ty": "gr",
                                    "it": [
                                        {
                                            "d": 1,
                                            "ty": "el",
                                            "s": {
                                                "a": 0,
                                                "k": [
                                                    78.31,
                                                    78.31
                                                ],
                                                "ix": 2
                                            },
                                            "p": {
                                                "a": 0,
                                                "k": [
                                                    0,
                                                    0
                                                ],
                                                "ix": 3
                                            },
                                            "nm": "Ellipse Path 1",
                                            "mn": "ADBE Vector Shape - Ellipse",
                                            "hd": false
                                        },
                                        {
                                            "ty": "fl",
                                            "c": {
                                                "a": 0,
                                                "k": [
                                                    0,
                                                    0,
                                                    0,
                                                    1
                                                ],
                                                "ix": 4
                                            },
                                            "o": {
                                                "a": 0,
                                                "k": 100,
                                                "ix": 5
                                            },
                                            "r": 1,
                                            "bm": 0,
                                            "nm": "Fill 1",
                                            "mn": "ADBE Vector Graphic - Fill",
                                            "hd": false
                                        },
                                        {
                                            "ty": "tr",
                                            "p": {
                                                "a": 0,
                                                "k": [
                                                    7.691,
                                                    392.731
                                                ],
                                                "ix": 2
                                            },
                                            "a": {
                                                "a": 0,
                                                "k": [
                                                    0,
                                                    0
                                                ],
                                                "ix": 1
                                            },
                                            "s": {
                                                "a": 0,
                                                "k": [
                                                    100,
                                                    100
                                                ],
                                                "ix": 3
                                            },
                                            "r": {
                                                "a": 0,
                                                "k": 0,
                                                "ix": 6
                                            },
                                            "o": {
                                                "a": 0,
                                                "k": 100,
                                                "ix": 7
                                            },
                                            "sk": {
                                                "a": 0,
                                                "k": 0,
                                                "ix": 4
                                            },
                                            "sa": {
                                                "a": 0,
                                                "k": 0,
                                                "ix": 5
                                            },
                                            "nm": "Transform"
                                        }
                                    ],
                                    "nm": "Color B",
                                    "np": 2,
                                    "cix": 2,
                                    "bm": 0,
                                    "ix": 2,
                                    "mn": "ADBE Vector Group",
                                    "hd": false
                                }
                            ],
                            "ip": 0,
                            "op": 250,
                            "st": 0,
                            "bm": 0
                        }
                    ]
                }
            ],
            "layers": [
                {
                    "ddd": 0,
                    "ind": 1,
                    "ty": 4,
                    "nm": "Divider",
                    "sr": 1,
                    "ks": {
                        "o": {
                            "a": 0,
                            "k": 100,
                            "ix": 11
                        },
                        "r": {
                            "a": 0,
                            "k": 0,
                            "ix": 10
                        },
                        "p": {
                            "a": 0,
                            "k": [
                                540,
                                540,
                                0
                            ],
                            "ix": 2,
                            "l": 2
                        },
                        "a": {
                            "a": 0,
                            "k": [
                                0,
                                0,
                                0
                            ],
                            "ix": 1,
                            "l": 2
                        },
                        "s": {
                            "a": 0,
                            "k": [
                                100,
                                100,
                                100
                            ],
                            "ix": 6,
                            "l": 2
                        }
                    },
                    "ao": 0,
                    "shapes": [
                        {
                            "ty": "gr",
                            "it": [
                                {
                                    "ind": 0,
                                    "ty": "sh",
                                    "ix": 1,
                                    "ks": {
                                        "a": 0,
                                        "k": {
                                            "i": [
                                                [
                                                    0,
                                                    0
                                                ],
                                                [
                                                    0,
                                                    0
                                                ]
                                            ],
                                            "o": [
                                                [
                                                    0,
                                                    0
                                                ],
                                                [
                                                    0,
                                                    0
                                                ]
                                            ],
                                            "v": [
                                                [
                                                    -428,
                                                    -261
                                                ],
                                                [
                                                    428,
                                                    -261
                                                ]
                                            ],
                                            "c": false
                                        },
                                        "ix": 2
                                    },
                                    "nm": "Path 1",
                                    "mn": "ADBE Vector Shape - Group",
                                    "hd": false
                                },
                                {
                                    "ty": "st",
                                    "c": {
                                        "a": 0,
                                        "k": [
                                            0,
                                            0,
                                            0,
                                            1
                                        ],
                                        "ix": 3
                                    },
                                    "o": {
                                        "a": 0,
                                        "k": 100,
                                        "ix": 4
                                    },
                                    "w": {
                                        "a": 0,
                                        "k": 4,
                                        "ix": 5
                                    },
                                    "lc": 1,
                                    "lj": 1,
                                    "ml": 4,
                                    "bm": 0,
                                    "nm": "Stroke 1",
                                    "mn": "ADBE Vector Graphic - Stroke",
                                    "hd": false
                                },
                                {
                                    "ty": "fl",
                                    "c": {
                                        "a": 0,
                                        "k": [
                                            0.5294117647058824,
                                            0.27058823529411763,
                                            0.27058823529411763,
                                            1
                                        ],
                                        "ix": 4
                                    },
                                    "o": {
                                        "a": 0,
                                        "k": 100,
                                        "ix": 5
                                    },
                                    "r": 1,
                                    "bm": 0,
                                    "nm": "Fill 1",
                                    "mn": "ADBE Vector Graphic - Fill",
                                    "hd": true
                                },
                                {
                                    "ty": "tr",
                                    "p": {
                                        "a": 0,
                                        "k": [
                                            0,
                                            0
                                        ],
                                        "ix": 2
                                    },
                                    "a": {
                                        "a": 0,
                                        "k": [
                                            0,
                                            0
                                        ],
                                        "ix": 1
                                    },
                                    "s": {
                                        "a": 0,
                                        "k": [
                                            100,
                                            100
                                        ],
                                        "ix": 3
                                    },
                                    "r": {
                                        "a": 0,
                                        "k": 0,
                                        "ix": 6
                                    },
                                    "o": {
                                        "a": 0,
                                        "k": 100,
                                        "ix": 7
                                    },
                                    "sk": {
                                        "a": 0,
                                        "k": 0,
                                        "ix": 4
                                    },
                                    "sa": {
                                        "a": 0,
                                        "k": 0,
                                        "ix": 5
                                    },
                                    "nm": "Transform"
                                }
                            ],
                            "nm": "Shape 1",
                            "np": 3,
                            "cix": 2,
                            "bm": 0,
                            "ix": 1,
                            "mn": "ADBE Vector Group",
                            "hd": false
                        }
                    ],
                    "ip": 0,
                    "op": 7983,
                    "st": 0,
                    "bm": 0
                },
                {
                    "ddd": 0,
                    "ind": 2,
                    "ty": 4,
                    "nm": "Matte",
                    "td": 1,
                    "sr": 1,
                    "ks": {
                        "o": {
                            "a": 0,
                            "k": 100,
                            "ix": 11
                        },
                        "r": {
                            "a": 0,
                            "k": 0,
                            "ix": 10
                        },
                        "p": {
                            "a": 0,
                            "k": [
                                540,
                                540,
                                0
                            ],
                            "ix": 2,
                            "l": 2
                        },
                        "a": {
                            "a": 0,
                            "k": [
                                0,
                                0,
                                0
                            ],
                            "ix": 1,
                            "l": 2
                        },
                        "s": {
                            "a": 0,
                            "k": [
                                100,
                                100,
                                100
                            ],
                            "ix": 6,
                            "l": 2
                        }
                    },
                    "ao": 0,
                    "shapes": [
                        {
                            "ty": "gr",
                            "it": [
                                {
                                    "ty": "rc",
                                    "d": 1,
                                    "s": {
                                        "a": 0,
                                        "k": [
                                            821,
                                            565
                                        ],
                                        "ix": 2
                                    },
                                    "p": {
                                        "a": 0,
                                        "k": [
                                            0,
                                            0
                                        ],
                                        "ix": 3
                                    },
                                    "r": {
                                        "a": 0,
                                        "k": 0,
                                        "ix": 4
                                    },
                                    "nm": "Rectangle Path 1",
                                    "mn": "ADBE Vector Shape - Rect",
                                    "hd": false
                                },
                                {
                                    "ty": "st",
                                    "c": {
                                        "a": 0,
                                        "k": [
                                            0,
                                            0,
                                            0,
                                            1
                                        ],
                                        "ix": 3
                                    },
                                    "o": {
                                        "a": 0,
                                        "k": 100,
                                        "ix": 4
                                    },
                                    "w": {
                                        "a": 0,
                                        "k": 4,
                                        "ix": 5
                                    },
                                    "lc": 1,
                                    "lj": 1,
                                    "ml": 4,
                                    "bm": 0,
                                    "nm": "Stroke 1",
                                    "mn": "ADBE Vector Graphic - Stroke",
                                    "hd": false
                                },
                                {
                                    "ty": "fl",
                                    "c": {
                                        "a": 0,
                                        "k": [
                                            0.952941176471,
                                            0.952941176471,
                                            0.952941176471,
                                            1
                                        ],
                                        "ix": 4
                                    },
                                    "o": {
                                        "a": 0,
                                        "k": 100,
                                        "ix": 5
                                    },
                                    "r": 1,
                                    "bm": 0,
                                    "nm": "Fill 1",
                                    "mn": "ADBE Vector Graphic - Fill",
                                    "hd": false
                                },
                                {
                                    "ty": "tr",
                                    "p": {
                                        "a": 0,
                                        "k": [
                                            -1.5,
                                            32.26
                                        ],
                                        "ix": 2
                                    },
                                    "a": {
                                        "a": 0,
                                        "k": [
                                            0,
                                            0
                                        ],
                                        "ix": 1
                                    },
                                    "s": {
                                        "a": 0,
                                        "k": [
                                            100,
                                            102.893
                                        ],
                                        "ix": 3
                                    },
                                    "r": {
                                        "a": 0,
                                        "k": 0,
                                        "ix": 6
                                    },
                                    "o": {
                                        "a": 0,
                                        "k": 100,
                                        "ix": 7
                                    },
                                    "sk": {
                                        "a": 0,
                                        "k": 0,
                                        "ix": 4
                                    },
                                    "sa": {
                                        "a": 0,
                                        "k": 0,
                                        "ix": 5
                                    },
                                    "nm": "Transform"
                                }
                            ],
                            "nm": "Rectangle 1",
                            "np": 3,
                            "cix": 2,
                            "bm": 0,
                            "ix": 1,
                            "mn": "ADBE Vector Group",
                            "hd": false
                        }
                    ],
                    "ip": 0,
                    "op": 7983,
                    "st": 0,
                    "bm": 0
                },
                {
                    "ddd": 0,
                    "ind": 3,
                    "ty": 0,
                    "nm": "Code",
                    "parent": 5,
                    "tt": 1,
                    "refId": "comp_0",
                    "sr": 1,
                    "ks": {
                        "o": {
                            "a": 0,
                            "k": 100,
                            "ix": 11
                        },
                        "r": {
                            "a": 0,
                            "k": 0,
                            "ix": 10
                        },
                        "p": {
                            "a": 0,
                            "k": [
                                960,
                                1098.307,
                                0
                            ],
                            "ix": 2,
                            "l": 2
                        },
                        "a": {
                            "a": 0,
                            "k": [
                                960,
                                540,
                                0
                            ],
                            "ix": 1,
                            "l": 2
                        },
                        "s": {
                            "a": 0,
                            "k": [
                                100,
                                100,
                                100
                            ],
                            "ix": 6,
                            "l": 2
                        }
                    },
                    "ao": 0,
                    "tm": {
                        "a": 1,
                        "k": [
                            {
                                "i": {
                                    "x": [
                                        0.833
                                    ],
                                    "y": [
                                        0.833
                                    ]
                                },
                                "o": {
                                    "x": [
                                        0.167
                                    ],
                                    "y": [
                                        0.167
                                    ]
                                },
                                "t": 89,
                                "s": [
                                    0
                                ]
                            },
                            {
                                "t": 338,
                                "s": [
                                    9.96
                                ],
                                "h": 1
                            }
                        ],
                        "ix": 2
                    },
                    "w": 1920,
                    "h": 1080,
                    "ip": 89,
                    "op": 982,
                    "st": 89,
                    "bm": 0
                },
                {
                    "ddd": 0,
                    "ind": 4,
                    "ty": 4,
                    "nm": "Matte 2",
                    "td": 1,
                    "sr": 1,
                    "ks": {
                        "o": {
                            "a": 0,
                            "k": 100,
                            "ix": 11
                        },
                        "r": {
                            "a": 0,
                            "k": 0,
                            "ix": 10
                        },
                        "p": {
                            "a": 0,
                            "k": [
                                540,
                                540,
                                0
                            ],
                            "ix": 2,
                            "l": 2
                        },
                        "a": {
                            "a": 0,
                            "k": [
                                0,
                                0,
                                0
                            ],
                            "ix": 1,
                            "l": 2
                        },
                        "s": {
                            "a": 0,
                            "k": [
                                100,
                                100,
                                100
                            ],
                            "ix": 6,
                            "l": 2
                        }
                    },
                    "ao": 0,
                    "shapes": [
                        {
                            "ty": "gr",
                            "it": [
                                {
                                    "ty": "rc",
                                    "d": 1,
                                    "s": {
                                        "a": 0,
                                        "k": [
                                            821,
                                            565
                                        ],
                                        "ix": 2
                                    },
                                    "p": {
                                        "a": 0,
                                        "k": [
                                            0,
                                            0
                                        ],
                                        "ix": 3
                                    },
                                    "r": {
                                        "a": 0,
                                        "k": 0,
                                        "ix": 4
                                    },
                                    "nm": "Rectangle Path 1",
                                    "mn": "ADBE Vector Shape - Rect",
                                    "hd": false
                                },
                                {
                                    "ty": "st",
                                    "c": {
                                        "a": 0,
                                        "k": [
                                            0,
                                            0,
                                            0,
                                            1
                                        ],
                                        "ix": 3
                                    },
                                    "o": {
                                        "a": 0,
                                        "k": 100,
                                        "ix": 4
                                    },
                                    "w": {
                                        "a": 0,
                                        "k": 4,
                                        "ix": 5
                                    },
                                    "lc": 1,
                                    "lj": 1,
                                    "ml": 4,
                                    "bm": 0,
                                    "nm": "Stroke 1",
                                    "mn": "ADBE Vector Graphic - Stroke",
                                    "hd": false
                                },
                                {
                                    "ty": "fl",
                                    "c": {
                                        "a": 0,
                                        "k": [
                                            0.952941176471,
                                            0.952941176471,
                                            0.952941176471,
                                            1
                                        ],
                                        "ix": 4
                                    },
                                    "o": {
                                        "a": 0,
                                        "k": 100,
                                        "ix": 5
                                    },
                                    "r": 1,
                                    "bm": 0,
                                    "nm": "Fill 1",
                                    "mn": "ADBE Vector Graphic - Fill",
                                    "hd": false
                                },
                                {
                                    "ty": "tr",
                                    "p": {
                                        "a": 0,
                                        "k": [
                                            -1.5,
                                            32.26
                                        ],
                                        "ix": 2
                                    },
                                    "a": {
                                        "a": 0,
                                        "k": [
                                            0,
                                            0
                                        ],
                                        "ix": 1
                                    },
                                    "s": {
                                        "a": 0,
                                        "k": [
                                            100,
                                            102.893
                                        ],
                                        "ix": 3
                                    },
                                    "r": {
                                        "a": 0,
                                        "k": 0,
                                        "ix": 6
                                    },
                                    "o": {
                                        "a": 0,
                                        "k": 100,
                                        "ix": 7
                                    },
                                    "sk": {
                                        "a": 0,
                                        "k": 0,
                                        "ix": 4
                                    },
                                    "sa": {
                                        "a": 0,
                                        "k": 0,
                                        "ix": 5
                                    },
                                    "nm": "Transform"
                                }
                            ],
                            "nm": "Rectangle 1",
                            "np": 3,
                            "cix": 2,
                            "bm": 0,
                            "ix": 1,
                            "mn": "ADBE Vector Group",
                            "hd": false
                        }
                    ],
                    "ip": 0,
                    "op": 7983,
                    "st": 0,
                    "bm": 0
                },
                {
                    "ddd": 0,
                    "ind": 5,
                    "ty": 0,
                    "nm": "Code",
                    "tt": 1,
                    "refId": "comp_0",
                    "sr": 1,
                    "ks": {
                        "o": {
                            "a": 0,
                            "k": 100,
                            "ix": 11
                        },
                        "r": {
                            "a": 0,
                            "k": 0,
                            "ix": 10
                        },
                        "p": {
                            "a": 1,
                            "k": [
                                {
                                    "i": {
                                        "x": 0.833,
                                        "y": 0.833
                                    },
                                    "o": {
                                        "x": 0.167,
                                        "y": 0.167
                                    },
                                    "t": 0,
                                    "s": [
                                        851.2,
                                        507.384,
                                        0
                                    ],
                                    "to": [
                                        0,
                                        -3.216,
                                        0
                                    ],
                                    "ti": [
                                        0,
                                        84.589,
                                        0
                                    ]
                                },
                                {
                                    "i": {
                                        "x": 0.833,
                                        "y": 0.833
                                    },
                                    "o": {
                                        "x": 0.167,
                                        "y": 0.167
                                    },
                                    "t": 73,
                                    "s": [
                                        851.2,
                                        505.392,
                                        0
                                    ],
                                    "to": [
                                        0,
                                        -0.801,
                                        0
                                    ],
                                    "ti": [
                                        -0.021,
                                        155.381,
                                        0
                                    ]
                                },
                                {
                                    "i": {
                                        "x": 0.833,
                                        "y": 0.833
                                    },
                                    "o": {
                                        "x": 0.167,
                                        "y": 0.167
                                    },
                                    "t": 163,
                                    "s": [
                                        851.246,
                                        81.492,
                                        0
                                    ],
                                    "to": [
                                        0.033,
                                        -246.776,
                                        0
                                    ],
                                    "ti": [
                                        0.102,
                                        0.409,
                                        0
                                    ]
                                },
                                {
                                    "t": 213,
                                    "s": [
                                        851.2,
                                        -394.608,
                                        0
                                    ]
                                }
                            ],
                            "ix": 2,
                            "l": 2
                        },
                        "a": {
                            "a": 0,
                            "k": [
                                960,
                                540,
                                0
                            ],
                            "ix": 1,
                            "l": 2
                        },
                        "s": {
                            "a": 0,
                            "k": [
                                76,
                                76,
                                100
                            ],
                            "ix": 6,
                            "l": 2
                        }
                    },
                    "ao": 0,
                    "tm": {
                        "a": 1,
                        "k": [
                            {
                                "i": {
                                    "x": [
                                        0.833
                                    ],
                                    "y": [
                                        0.833
                                    ]
                                },
                                "o": {
                                    "x": [
                                        0.167
                                    ],
                                    "y": [
                                        0.167
                                    ]
                                },
                                "t": 0,
                                "s": [
                                    0
                                ]
                            },
                            {
                                "t": 249,
                                "s": [
                                    9.96
                                ],
                                "h": 1
                            }
                        ],
                        "ix": 2
                    },
                    "w": 1920,
                    "h": 1080,
                    "ip": 0,
                    "op": 937,
                    "st": 0,
                    "bm": 0
                },
                {
                    "ddd": 0,
                    "ind": 6,
                    "ty": 4,
                    "nm": "Menu",
                    "sr": 1,
                    "ks": {
                        "o": {
                            "a": 0,
                            "k": 100,
                            "ix": 11
                        },
                        "r": {
                            "a": 0,
                            "k": 0,
                            "ix": 10
                        },
                        "p": {
                            "a": 0,
                            "k": [
                                540,
                                540,
                                0
                            ],
                            "ix": 2,
                            "l": 2
                        },
                        "a": {
                            "a": 0,
                            "k": [
                                0,
                                0,
                                0
                            ],
                            "ix": 1,
                            "l": 2
                        },
                        "s": {
                            "a": 0,
                            "k": [
                                100,
                                100,
                                100
                            ],
                            "ix": 6,
                            "l": 2
                        }
                    },
                    "ao": 0,
                    "shapes": [
                        {
                            "ty": "gr",
                            "it": [
                                {
                                    "d": 1,
                                    "ty": "el",
                                    "s": {
                                        "a": 0,
                                        "k": [
                                            22.586,
                                            22.586
                                        ],
                                        "ix": 2
                                    },
                                    "p": {
                                        "a": 0,
                                        "k": [
                                            0,
                                            0
                                        ],
                                        "ix": 3
                                    },
                                    "nm": "Ellipse Path 1",
                                    "mn": "ADBE Vector Shape - Ellipse",
                                    "hd": false
                                },
                                {
                                    "ty": "st",
                                    "c": {
                                        "a": 0,
                                        "k": [
                                            0,
                                            0,
                                            0,
                                            1
                                        ],
                                        "ix": 3
                                    },
                                    "o": {
                                        "a": 0,
                                        "k": 100,
                                        "ix": 4
                                    },
                                    "w": {
                                        "a": 0,
                                        "k": 4,
                                        "ix": 5
                                    },
                                    "lc": 1,
                                    "lj": 1,
                                    "ml": 4,
                                    "bm": 0,
                                    "nm": "Stroke 1",
                                    "mn": "ADBE Vector Graphic - Stroke",
                                    "hd": false
                                },
                                {
                                    "ty": "fl",
                                    "c": {
                                        "a": 0,
                                        "k": [
                                            0.5294117647058824,
                                            0.27058823529411763,
                                            0.27058823529411763,
                                            1
                                        ],
                                        "ix": 4
                                    },
                                    "o": {
                                        "a": 0,
                                        "k": 100,
                                        "ix": 5
                                    },
                                    "r": 1,
                                    "bm": 0,
                                    "nm": "Fill 1",
                                    "mn": "ADBE Vector Graphic - Fill",
                                    "hd": true
                                },
                                {
                                    "ty": "tr",
                                    "p": {
                                        "a": 0,
                                        "k": [
                                            -316.008,
                                            -299.772
                                        ],
                                        "ix": 2
                                    },
                                    "a": {
                                        "a": 0,
                                        "k": [
                                            0,
                                            0
                                        ],
                                        "ix": 1
                                    },
                                    "s": {
                                        "a": 0,
                                        "k": [
                                            100,
                                            100
                                        ],
                                        "ix": 3
                                    },
                                    "r": {
                                        "a": 0,
                                        "k": 0,
                                        "ix": 6
                                    },
                                    "o": {
                                        "a": 0,
                                        "k": 100,
                                        "ix": 7
                                    },
                                    "sk": {
                                        "a": 0,
                                        "k": 0,
                                        "ix": 4
                                    },
                                    "sa": {
                                        "a": 0,
                                        "k": 0,
                                        "ix": 5
                                    },
                                    "nm": "Transform"
                                }
                            ],
                            "nm": "Ellipse 3",
                            "np": 3,
                            "cix": 2,
                            "bm": 0,
                            "ix": 1,
                            "mn": "ADBE Vector Group",
                            "hd": false
                        },
                        {
                            "ty": "gr",
                            "it": [
                                {
                                    "d": 1,
                                    "ty": "el",
                                    "s": {
                                        "a": 0,
                                        "k": [
                                            22.586,
                                            22.586
                                        ],
                                        "ix": 2
                                    },
                                    "p": {
                                        "a": 0,
                                        "k": [
                                            0,
                                            0
                                        ],
                                        "ix": 3
                                    },
                                    "nm": "Ellipse Path 1",
                                    "mn": "ADBE Vector Shape - Ellipse",
                                    "hd": false
                                },
                                {
                                    "ty": "st",
                                    "c": {
                                        "a": 0,
                                        "k": [
                                            0,
                                            0,
                                            0,
                                            1
                                        ],
                                        "ix": 3
                                    },
                                    "o": {
                                        "a": 0,
                                        "k": 100,
                                        "ix": 4
                                    },
                                    "w": {
                                        "a": 0,
                                        "k": 4,
                                        "ix": 5
                                    },
                                    "lc": 1,
                                    "lj": 1,
                                    "ml": 4,
                                    "bm": 0,
                                    "nm": "Stroke 1",
                                    "mn": "ADBE Vector Graphic - Stroke",
                                    "hd": false
                                },
                                {
                                    "ty": "fl",
                                    "c": {
                                        "a": 0,
                                        "k": [
                                            0.5294117647058824,
                                            0.27058823529411763,
                                            0.27058823529411763,
                                            1
                                        ],
                                        "ix": 4
                                    },
                                    "o": {
                                        "a": 0,
                                        "k": 100,
                                        "ix": 5
                                    },
                                    "r": 1,
                                    "bm": 0,
                                    "nm": "Fill 1",
                                    "mn": "ADBE Vector Graphic - Fill",
                                    "hd": true
                                },
                                {
                                    "ty": "tr",
                                    "p": {
                                        "a": 0,
                                        "k": [
                                            -351.008,
                                            -299.772
                                        ],
                                        "ix": 2
                                    },
                                    "a": {
                                        "a": 0,
                                        "k": [
                                            0,
                                            0
                                        ],
                                        "ix": 1
                                    },
                                    "s": {
                                        "a": 0,
                                        "k": [
                                            100,
                                            100
                                        ],
                                        "ix": 3
                                    },
                                    "r": {
                                        "a": 0,
                                        "k": 0,
                                        "ix": 6
                                    },
                                    "o": {
                                        "a": 0,
                                        "k": 100,
                                        "ix": 7
                                    },
                                    "sk": {
                                        "a": 0,
                                        "k": 0,
                                        "ix": 4
                                    },
                                    "sa": {
                                        "a": 0,
                                        "k": 0,
                                        "ix": 5
                                    },
                                    "nm": "Transform"
                                }
                            ],
                            "nm": "Ellipse 2",
                            "np": 3,
                            "cix": 2,
                            "bm": 0,
                            "ix": 2,
                            "mn": "ADBE Vector Group",
                            "hd": false
                        },
                        {
                            "ty": "gr",
                            "it": [
                                {
                                    "d": 1,
                                    "ty": "el",
                                    "s": {
                                        "a": 0,
                                        "k": [
                                            22.586,
                                            22.586
                                        ],
                                        "ix": 2
                                    },
                                    "p": {
                                        "a": 0,
                                        "k": [
                                            0,
                                            0
                                        ],
                                        "ix": 3
                                    },
                                    "nm": "Ellipse Path 1",
                                    "mn": "ADBE Vector Shape - Ellipse",
                                    "hd": false
                                },
                                {
                                    "ty": "st",
                                    "c": {
                                        "a": 0,
                                        "k": [
                                            0,
                                            0,
                                            0,
                                            1
                                        ],
                                        "ix": 3
                                    },
                                    "o": {
                                        "a": 0,
                                        "k": 100,
                                        "ix": 4
                                    },
                                    "w": {
                                        "a": 0,
                                        "k": 4,
                                        "ix": 5
                                    },
                                    "lc": 1,
                                    "lj": 1,
                                    "ml": 4,
                                    "bm": 0,
                                    "nm": "Stroke 1",
                                    "mn": "ADBE Vector Graphic - Stroke",
                                    "hd": false
                                },
                                {
                                    "ty": "fl",
                                    "c": {
                                        "a": 0,
                                        "k": [
                                            0.5294117647058824,
                                            0.27058823529411763,
                                            0.27058823529411763,
                                            1
                                        ],
                                        "ix": 4
                                    },
                                    "o": {
                                        "a": 0,
                                        "k": 100,
                                        "ix": 5
                                    },
                                    "r": 1,
                                    "bm": 0,
                                    "nm": "Fill 1",
                                    "mn": "ADBE Vector Graphic - Fill",
                                    "hd": true
                                },
                                {
                                    "ty": "tr",
                                    "p": {
                                        "a": 0,
                                        "k": [
                                            -386.008,
                                            -299.772
                                        ],
                                        "ix": 2
                                    },
                                    "a": {
                                        "a": 0,
                                        "k": [
                                            0,
                                            0
                                        ],
                                        "ix": 1
                                    },
                                    "s": {
                                        "a": 0,
                                        "k": [
                                            100,
                                            100
                                        ],
                                        "ix": 3
                                    },
                                    "r": {
                                        "a": 0,
                                        "k": 0,
                                        "ix": 6
                                    },
                                    "o": {
                                        "a": 0,
                                        "k": 100,
                                        "ix": 7
                                    },
                                    "sk": {
                                        "a": 0,
                                        "k": 0,
                                        "ix": 4
                                    },
                                    "sa": {
                                        "a": 0,
                                        "k": 0,
                                        "ix": 5
                                    },
                                    "nm": "Transform"
                                }
                            ],
                            "nm": "Ellipse 1",
                            "np": 3,
                            "cix": 2,
                            "bm": 0,
                            "ix": 3,
                            "mn": "ADBE Vector Group",
                            "hd": false
                        }
                    ],
                    "ip": 0,
                    "op": 7983,
                    "st": 0,
                    "bm": 0
                },
                {
                    "ddd": 0,
                    "ind": 7,
                    "ty": 4,
                    "nm": "Window",
                    "sr": 1,
                    "ks": {
                        "o": {
                            "a": 0,
                            "k": 100,
                            "ix": 11
                        },
                        "r": {
                            "a": 0,
                            "k": 0,
                            "ix": 10
                        },
                        "p": {
                            "a": 0,
                            "k": [
                                540,
                                540,
                                0
                            ],
                            "ix": 2,
                            "l": 2
                        },
                        "a": {
                            "a": 0,
                            "k": [
                                7.5,
                                -98,
                                0
                            ],
                            "ix": 1,
                            "l": 2
                        },
                        "s": {
                            "a": 0,
                            "k": [
                                100,
                                100,
                                100
                            ],
                            "ix": 6,
                            "l": 2
                        }
                    },
                    "ao": 0,
                    "shapes": [
                        {
                            "ty": "gr",
                            "it": [
                                {
                                    "ty": "rc",
                                    "d": 1,
                                    "s": {
                                        "a": 0,
                                        "k": [
                                            855,
                                            688
                                        ],
                                        "ix": 2
                                    },
                                    "p": {
                                        "a": 0,
                                        "k": [
                                            0,
                                            0
                                        ],
                                        "ix": 3
                                    },
                                    "r": {
                                        "a": 0,
                                        "k": 25,
                                        "ix": 4
                                    },
                                    "nm": "Rectangle Path 1",
                                    "mn": "ADBE Vector Shape - Rect",
                                    "hd": false
                                },
                                {
                                    "ty": "st",
                                    "c": {
                                        "a": 0,
                                        "k": [
                                            0,
                                            0,
                                            0,
                                            1
                                        ],
                                        "ix": 3
                                    },
                                    "o": {
                                        "a": 0,
                                        "k": 100,
                                        "ix": 4
                                    },
                                    "w": {
                                        "a": 0,
                                        "k": 4,
                                        "ix": 5
                                    },
                                    "lc": 1,
                                    "lj": 1,
                                    "ml": 4,
                                    "bm": 0,
                                    "nm": "Stroke 1",
                                    "mn": "ADBE Vector Graphic - Stroke",
                                    "hd": true
                                },
                                {
                                    "ty": "fl",
                                    "c": {
                                        "a": 0,
                                        "k": [
                                            0.9372549019607843,
                                            0.9372549019607843,
                                            0.9372549019607843,
                                            1
                                        ],
                                        "ix": 4
                                    },
                                    "o": {
                                        "a": 0,
                                        "k": 100,
                                        "ix": 5
                                    },
                                    "r": 1,
                                    "bm": 0,
                                    "nm": "Fill 1",
                                    "mn": "ADBE Vector Graphic - Fill",
                                    "hd": false
                                },
                                {
                                    "ty": "tr",
                                    "p": {
                                        "a": 0,
                                        "k": [
                                            7.5,
                                            -98
                                        ],
                                        "ix": 2
                                    },
                                    "a": {
                                        "a": 0,
                                        "k": [
                                            0,
                                            0
                                        ],
                                        "ix": 1
                                    },
                                    "s": {
                                        "a": 0,
                                        "k": [
                                            100,
                                            100
                                        ],
                                        "ix": 3
                                    },
                                    "r": {
                                        "a": 0,
                                        "k": 0,
                                        "ix": 6
                                    },
                                    "o": {
                                        "a": 0,
                                        "k": 100,
                                        "ix": 7
                                    },
                                    "sk": {
                                        "a": 0,
                                        "k": 0,
                                        "ix": 4
                                    },
                                    "sa": {
                                        "a": 0,
                                        "k": 0,
                                        "ix": 5
                                    },
                                    "nm": "Transform"
                                }
                            ],
                            "nm": "Rectangle 1",
                            "np": 3,
                            "cix": 2,
                            "bm": 0,
                            "ix": 1,
                            "mn": "ADBE Vector Group",
                            "hd": false
                        }
                    ],
                    "ip": 0,
                    "op": 7983,
                    "st": 0,
                    "bm": 0
                }
            ],
            "markers": [
                {
                    "tm": 51,
                    "cm": "",
                    "dr": 0
                }
            ]
        },
        container: document.getElementById("code"),
        path: "code.json",
        renderer: "svg", // Required
        loop: true, // Optional
        autoplay: true, // Optional
        name: "code", // Name for future reference. Optional.
    });
};

export default miscellaneous2
