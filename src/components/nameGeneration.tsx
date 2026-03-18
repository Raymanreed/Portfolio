import { femaleFirstNameDB } from '../assets/allFemaleFirstDB.ts';
import { maleFirstNameDB } from '../assets/allMaleFirstDB.ts';
import { lastNameDB } from '../assets/allLastNameDB.ts';

function RandomNameGenerator() {
    const chosenFemaleFirst = femaleFirstNameDB[Math.floor(Math.random() * (femaleFirstNameDB.length - 0 + 1) + 0)];
    const chosenMaleFirst = maleFirstNameDB[Math.floor(Math.random() * (maleFirstNameDB.length - 0 + 1) + 0)];
    const chosenLastName = lastNameDB[Math.floor(Math.random() * (lastNameDB.length - 0 + 1) + 0)]

    const chosenName = () => {
        if (chosenFemaleFirst.length >= chosenMaleFirst.length) {
            return chosenFemaleFirst;
        }
        return chosenMaleFirst
    }
    return `${chosenName()} ${chosenLastName}`
}

export default RandomNameGenerator;