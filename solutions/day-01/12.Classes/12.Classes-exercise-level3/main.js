const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

class Statistics {
    constructor(agesArr) {
        this.agesArr = [...agesArr]
    }
    
    logArr() {
        console.log(this.agesArr)
    }
    
    count() {
        return this.agesArr.length
    }

    sum() {
        return this.agesArr.reduce((sum, element) => sum += element, 0)
    }

    min() {
        return Math.min(...this.agesArr)
    }

    max() {
        return Math.max(...this.agesArr)
    }

    range() {
        return this.max() - this.min()
    }

    mean() {
        return Math.round(this.sum() / this.agesArr.length)
    }

    median() {
        let tempArr = [...this.agesArr]
        tempArr.sort(function(a, b) {
            return a - b;
        });
        return tempArr[Math.floor(this.agesArr.length / 2)]
    }

    mode() {
        const modeObj = {'mode': '', 'count': 0}
        for(let i = this.min(); i <= this.max(); i++) {
            const filteredArr = this.agesArr.filter( element => element === i)
            if(filteredArr.length > modeObj.count) {
                modeObj.mode = i
                modeObj.count = filteredArr.length
            }
        }
        return modeObj
    }

    var() {
        let squaringDeviationFromTheMean = 0
        for(let element of this.agesArr) {
            squaringDeviationFromTheMean += Math.pow((element - ((this.sum() / this.agesArr.length))), 2)
        }
        return Math.round((squaringDeviationFromTheMean / this.agesArr.length) * 10) / 10
    }

    std() {
        return Math.round(Math.sqrt(this.var()) * 10) / 10
    }

    freqDist() {
        let freqDistStr = "["
        let tempArr = []
        for(let i = this.min(); i <= this.max(); i++) {
            const filteredArr = this.agesArr.filter( element => element === i)
            if(filteredArr.length){
                tempArr.push(filteredArr)
            }
        }
        tempArr = tempArr.reverse()
        for(let j = this.mode().count; j > 0; j--) {
            for(let element of tempArr) {
                if(element.length === j) {
                    freqDistStr += '(' + Number.parseFloat(j / 25 * 100).toFixed(1) + ', ' + element[0] +'), '
                }
            }
        }
        freqDistStr = freqDistStr.slice(0, -2)
        freqDistStr += ']'

        return freqDistStr
    }

    describe() {
        return 'Count:' + statistics.count() +'\n'
        + 'Sum: ' + statistics.sum() +'\n'
        + 'Min: ' + statistics.min() +'\n'
        + 'Max: ' + statistics.max() +'\n'
        + 'Range: ' + statistics.range() +'\n'
        + 'Mean: ' + statistics.mean() +'\n'
        + 'Median: ' + statistics.median() +'\n'
        + 'Mode: ' +  JSON.stringify(statistics.mode())  +'\n'
        + 'Variance: ' + statistics.var() +'\n'
        + 'Standard Deviation: ' + statistics.std() +'\n'
        + 'Frequency Distribution: ' + statistics.freqDist()
    }
}
const statistics = new Statistics(ages)
console.log(statistics.describe())