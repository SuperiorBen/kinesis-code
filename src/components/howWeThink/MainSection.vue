<template>
    <div class="content">
        <div class="background">
            <img class="arrow" src="../../assets/images-howWeThink/images/arrow.svg" alt="arrow">
            <img class="circle" src="../../assets/images-howWeThink/images/circle.svg" alt="circle">
        </div>

        <div class="contentinfo">
            <div class="texts">
                <p class="title">How do we <span>think?</span></p>
                <p class="info">Digital business involves much more than pilots in mobility,
                    artificial intelligence or IoT. It involves fundamental changes
                    in culture, communications, performance measurement,
                    and the way work gets done. Without a foundation in place
                    to enable all that change, your digital efforts will stall. <span>

                        The five digital imperatives a platform for digital business is
                        made up of five pillars – we call them imperatives because
                        they are “must haves” and not “nice to have”.</span></p>
            </div>
            <img class="mainTask" src="../../assets/images-howWeThink/images/mainTask.svg" alt="mainTask">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.content {
    width: 100%;
    height: 50vh;
    overflow: hidden;

    .background {
        width: 100%;
        height: 50vh;
        background: #F2F3F3;
        overflow: hidden;
        position: relative;
        z-index: 1;

        .arrow {
            width: 22em;
            opacity: 0.4;
            margin-top: 2em;
            margin-left: 1em;
        }

        .circle {
            width: 55em;
            margin-top: -130vh;
            margin-left: 28em;
            opacity: 0.5;
        }
    }

    .contentinfo {
        width: 100%;
        height: 50vh;
        overflow: hidden;
        position: relative;
        z-index: 2;
        top: -50vh;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;


        .texts {
            width: 30em;
            height: 50vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .title {
                font-size: 2.5em;
                font-weight: bold;
                color: #162B3E;
                margin: 0px;

                span {
                    color: #FE9900;
                }
            }

            .info {
                width: 90%;
                height: auto;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                line-height: 1.4em;
                font-size: 0.9em;

                span {
                    margin-top: 2em;
                }
            }
        }

        .mainTask {
            width: 27em;
        }
    }
}

@media (min-width: 430px) {
    .content {
        width: 100%;
        height: 50vh;
        overflow: hidden;

        .background {
            width: 100%;
            height: 50vh;
            background: #F2F3F3;
            overflow: hidden;

            .arrow {
                width: 22em;
                opacity: 0.4;
                margin-left: 5em;
            }

            .circle {
                width: 55em;
                margin-top: -130vh;
                margin-left: 28em;
            }
        }
    }
}
</style>