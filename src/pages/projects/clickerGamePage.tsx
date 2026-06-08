import { useEffect, useRef, useState } from "react";

function ClickerGame() {
    const [baseClickCount, setBaseClickCount] = useState<number>(0);
    const [baseClickIncreaseAmount, setBaseClickIncreaseAmount] = useState<number>(1);

    const [autoClickerCount, setAutoClickerCount] = useState<number>(0);
    const [autoClickerClickAmount, setAutoClickerClickAmount] = useState<number>(1)
    const [autoClickerTiming, setAutoClickerTiming] = useState<number>(1000);
    const [autoClickerEnabled, setAutoClickerEnabled] = useState<boolean>(false);
    const [autoClickerCost, setAutoClickerCost] = useState<number>(10);
    const [autoClickerTimingCost, setAutoClickerTimingCost] = useState<number>(100)
    const [autoClickerClickAmountCost, setAutoClickerClickAmountCost] = useState<number>(50);
    const autoClickerIntervalIdRef = useRef(0)

    const increaseBaseClickCount = () => {
        setBaseClickCount(baseClickCount + baseClickIncreaseAmount)
        return;
    }


    /* ---AUTOCLICKER FUNCTIONALITY--- */
    // Basic auto clicker setup

    const allowAutoClickerBuy = () => {
        if (!autoClickerCost) return;
        if (baseClickCount < autoClickerCost) return false;
        if (autoClickerCount >= 100) return false;
        return true;
    }

    const autoClickerFunctionality = () => {
        setBaseClickCount(baseClickCount => ((autoClickerClickAmount * autoClickerCount) + baseClickCount));
    };

    const refreshAutoClickerIntervalId = () => {
        clearInterval(autoClickerIntervalIdRef.current)
        autoClickerIntervalIdRef.current = 0;
        autoClickerIntervalIdRef.current = setInterval(autoClickerFunctionality, autoClickerTiming);
        setAutoClickerEnabled(true)
        return;
    }

    // starts autoclicker upon buying the first one
    useEffect(() => {
        if (autoClickerCount === 0) return;
        refreshAutoClickerIntervalId()
    }, [autoClickerCount])

    const stopBaseAutoClicker = () => {
        console.log("stopping intervalId: ", autoClickerIntervalIdRef.current)
        clearInterval(autoClickerIntervalIdRef.current)
        setAutoClickerEnabled(false);
        return;
    }

    const handleBaseAutoClickerStart = () => {
        setAutoClickerEnabled(true);
        autoClickerIntervalIdRef.current = setInterval(autoClickerFunctionality, autoClickerTiming);
        return;
    }

    const autoClickerBuyButton = () => {
        setAutoClickerCount(autoClickerCount + 1);
        setBaseClickCount(baseClickCount - autoClickerCost);
        setAutoClickerCost(autoClickerCost + Math.round(autoClickerCost * 0.5))
    }

    // Autoclicker timing button and functionality

    const autoClickerTimingButton = () => {
        setAutoClickerTiming(autoClickerTiming - 100);
        setAutoClickerTimingCost(autoClickerTimingCost + Math.round(autoClickerTimingCost * 1.5))
    }

    const allowAutoClickingTimingPurchase = () => {
        if (!autoClickerTimingCost) return;
        if (autoClickerTiming === 100) return true;
        if (autoClickerTimingCost > baseClickCount) return true;
        return false;
    }

    useEffect(() => {
        if (autoClickerTiming === 1000) return;
        refreshAutoClickerIntervalId()
    }, [autoClickerTiming])

    // Autoclicker click amount

    const autoClickerClickAmountButton = () => {
        setAutoClickerClickAmount(autoClickerClickAmount + 1);
        setAutoClickerClickAmountCost(autoClickerClickAmountCost + Math.round(autoClickerClickAmountCost * 0.5));
    }

    const allowAutoClickerClickAmountPurchase = () => {
        if (!autoClickerClickAmountCost) return;
        if (autoClickerClickAmount === 10) return true;
        if (autoClickerClickAmountCost > baseClickCount) return true;
        return false;
    }

    useEffect(() => {
        if (autoClickerClickAmount === 1) return;
        refreshAutoClickerIntervalId()
    }, [autoClickerClickAmount])

    console.log(autoClickerClickAmount)

    /* ---END AUTOCLICKER FUNCTIONALITY--- */

    return (
        <div>
            <h3>{baseClickCount}</h3>
            <h4>{`You have ${autoClickerCount} auto clickers`}</h4>
            <br />
            <div className="clickerGame-button-house">
                <button onClick={increaseBaseClickCount}>Click!</button>
                <button
                    onClick={autoClickerBuyButton}
                    disabled={!allowAutoClickerBuy()}
                    >
                        Get an Auto Clicker!
                </button>
                <button
                    onClick={autoClickerTimingButton}
                    disabled={allowAutoClickingTimingPurchase()}
                    >
                        Speed up your Auto Clicker!
                </button>
                <button
                    onClick={autoClickerClickAmountButton}
                    disabled={allowAutoClickerClickAmountPurchase()}
                    >
                        Power up your Auto Clicker!
                </button>
            </div>
            <div className="clickerGame-autoClicker-startStop-house">
                <div className="clickerGame-baseAutoClicker-house">
                    <button onClick={handleBaseAutoClickerStart} hidden={autoClickerEnabled ? true : false}>Start Auto Clicking</button>
                    <button onClick={stopBaseAutoClicker} hidden={autoClickerEnabled ? false : true}>Stop Auto Clicking</button>
                </div>
            </div>
        </div>
    )
};

export default ClickerGame;