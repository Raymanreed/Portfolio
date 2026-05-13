import { useState } from "react";

function ClickerGame() {
    // const [baseClickCount, setBaseClickCount] = useState<number>(0);

    const clickTrackObj = {
        baseClicks: 0,
        baseAutoClickerAmount: 0,
        baseAutoClickerTimer: 1000,
        baseClickIncreaseAmount: 1,
        set baseClickIncreaser(baseClickIncreaseAmount: number) {
            this.baseClicks = this.baseClicks + baseClickIncreaseAmount;
        },
        get currentBaseClicks() {
            return this.baseClicks
        },
        displayBaseClicks: function() {
            return `${this.baseClicks}`
        }
    }

    const baseClickerButton = () => {
        clickTrackObj.baseClickIncreaser = clickTrackObj.baseClickIncreaseAmount;
        console.log(clickTrackObj.currentBaseClicks)
        return;
    }

    // setBaseClickCount(clickTrackObj.baseClicks)

    return (
        <div>
            <h3>{clickTrackObj.displayBaseClicks()}</h3>
            <br />
            <button onClick={baseClickerButton}>Click!</button>
        </div>
    )
};

export default ClickerGame;