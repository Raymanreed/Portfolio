function FauxMemorial() {
    const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const dayRanges = { min: 1, maxA: 31, maxB: 30, maxFeb: 28, maxLeap: 29 };
    const birthYearRange = { min: 1960, max: 2015 };
    const deathYearRange = { min: 1972, max: 2025 };
    const leapYears = [1960,1964,1968,1972,1976,1980,1984,1988,1992,1996,2000,2004,2008,2012,2016,2020,2024]

    function yearGenerator() {
        const deathYear = Math.floor(Math.random() * (deathYearRange.max - deathYearRange.min + 1) + deathYearRange.min)
        const birthYear = Math.floor(Math.random() * (birthYearRange.max - birthYearRange.min + 1) + birthYearRange.min);
        if (birthYear >= deathYear) {
            const deathYearRegenned = deathYear + (birthYear - deathYear) + 10;
            return [birthYear, deathYearRegenned];
        } else {
            return [birthYear, deathYear]
        };
    };

    const generateMonthDayYear = () => {
        const monthGen = [Math.floor(Math.random() * (11 - 0 + 1) + 0), Math.floor(Math.random() * (11 - 0 + 1) + 0)];
        const yearGen = yearGenerator();
        const dayGen = () => {
            let dayMax = dayRanges.maxA;
            if ((leapYears.includes(yearGen[1]) || leapYears.includes(yearGen[0])) && monthGen.includes(1)) {
                dayMax = dayRanges.maxLeap
            }
            if (monthGen.includes(1)) {
                dayMax = dayRanges.maxFeb
            }
            if (monthGen.includes(3) ||
                monthGen.includes(5) ||
                monthGen.includes(8) ||
                monthGen.includes(10)) {
                dayMax = dayRanges.maxB
            }
            return (Math.floor(Math.random() * (dayMax - dayRanges.min + 1) + dayRanges.min));
        };
        return [`${monthArray[monthGen[0]]} ${dayGen()}, ${yearGen[0]}`, `${monthArray[monthGen[1]]} ${dayGen()}, ${yearGen[1]}`];
    }

    return (
        <div>
            <h2>With the Angles Now</h2>
            <h3>Forever in our hearts</h3>
            <div>
                <img src="https://thispersondoesnotexist.com/" alt="Loading..." decoding="async" height={300} width={300} />
            </div>
            <h3>{generateMonthDayYear().join(' - ')}</h3>
        </div>
    )
};

export default FauxMemorial;
