import { useState } from "react";

function LoopDemoPage() {
    const [forEachDemoOutput, setForEachDemoOutput] = useState<string>()
    const [mapDemoOutput, setMapDemoOutput] = useState<string>()
    const [filterDemoOutput, setFilterDemoOutput] = useState<string>()
    const forEachDemoData = ["apple", "orange", "banana"];

    const forEachDemo = (demoData: Array<string>) => {
        const demoArray: string[] = [];
        demoData.forEach((element) => {
            demoArray.push(element.toUpperCase())
        })
        setForEachDemoOutput(demoArray.join(", "))
        return;
    };
    const mapDemo = (mapDemoData: Array<number>) => {
        const multipliedData = mapDemoData.map((x) => x * 5)
        setMapDemoOutput(JSON.stringify(multipliedData, null, ' '))
        return;
    };
    const filterDemo = (filterDemoData: Array<string>) => {
        const filteredArray = filterDemoData.filter((word) => word.length === 5)
        setFilterDemoOutput(JSON.stringify(filteredArray))
        return filteredArray;
    };

    return (
        <div>
            <h3>
                This is a page to showcase various loops and iterations.
            </h3>
            <div>
                <h4>
                    forEach:
                </h4>
                <p>Here's the words we'll be modifying: apple, orange, banana</p>
                <button onClick={() => forEachDemo(forEachDemoData)}>Capitalize!</button>
                <p>{forEachDemoOutput}</p>
            </div>
            <div>
                <h4>
                    map:
                </h4>
                <p>We'll be multiplying these numbers by 5: 2, 4, 6, 8</p>
                <button onClick={() => mapDemo([2, 4, 6, 8])}>Multiply!</button>
                <p>{mapDemoOutput}</p>
            </div>
            <div>
                <h4>
                    filter:
                </h4>
                <p>We'll be filtering down to just words that are 5 letters</p>
                <p>Here's the words: Apple, Grape, Banana, Pear, Cherry, Strawberry, Blueberry</p>
                <button onClick={() => filterDemo(["Apple","Grape","Banana","Pear","Cherry","Strawberry","Blueberry"])}>
                    Filter!
                </button>
                <p>{filterDemoOutput}</p>
            </div>
        </div>
    )
};

export default LoopDemoPage;