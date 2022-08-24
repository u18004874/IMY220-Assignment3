function EventHandler(arr) {
    this.arrObjects = arr;

    this.getEventsBetweenDates = function (start, end) {
        this.arrObjects = arr.filter(function (el) {
            return (el.dateStart >= start && el.dateEnd <= end);
        });
        return this.arrObjects;
    }

    this.getByMonth = function (month) {
        this.arrObjects = arr.filter(function (el) {
            var getMonth = el.dateStart.slice(5, 7);
            //console.log(getMonth);
            return (getMonth == month);
        });
        return this.arrObjects;
    }

    this.getUniqueDateAndSort = function () {
        // console.log(arr[0]);
        var reducedArr = arr.reduce((prev, curr) => (prev.every(prevItem => prevItem.dateStart != curr.dateStart) ? prev.push(curr) : true, prev), []);

        //console.log(reducedArr);
        this.arrObjects = reducedArr.sort(function (a, b) {
            var getMonthA = a.dateStart.slice(5, 7);
            var getMonthB = b.dateStart.slice(5, 7);

            if (getMonthA == getMonthB) {
                return;
            }
            return getMonthA - getMonthB;
        });
        //console.log(arr);
        return this.arrObjects;
    }

    this.getSummary = function (...objects) {
        var summary;
        if (objects == undefined || objects.length == 0) {
            summary = this.arrObjects.map(function (element, index) {
                var elSummary = "";
                if (element.dateStart == element.dateEnd) {
                    elSummary = "On " + element.dateStart + ": " + element.name + "(" + element.description + ")";
                    return elSummary;
                }
                elSummary = "From " + element.dateStart + " to " + element.dateEnd + ": " + element.name + "(" + element.description + ")";
                return elSummary;
            });
        }
        else if (objects[0].constructor == Array) {
            summary = objects[0].map(function (element, index) {
                var elSummary = "";
                if (element.dateStart == element.dateEnd) {
                    elSummary = "On " + element.dateStart + ": " + element.name + "(" + element.description + ")";
                    return elSummary;
                }
                elSummary = "From " + element.dateStart + " to " + element.dateEnd + ": " + element.name + "(" + element.description + ")";
                return elSummary;
            });
        }
        else {
            //        console.log(objects);
            summary = objects.map(function (element, index) {
                var elSummary = "";
                if (element.dateStart == element.dateEnd) {
                    elSummary = "On " + element.dateStart + ": " + element.name + "(" + element.description + ")";
                    return elSummary;
                }
                elSummary = "From " + element.dateStart + " to " + element.dateEnd + ": " + element.name + "(" + element.description + ")";
                return elSummary;
            });
        }

        return summary;
    }
}

Array.prototype.getEventsBetweenDates = function (start, end) {
    var newObj = new EventHandler(this);
    return newObj.getEventsBetweenDates();
}

Array.prototype.getByMonth = function (month) {
    var newObj = new EventHandler(this);
    return newObj.getByMonth();
}

Array.prototype.getUniqueDateAndSort = function () {
    var newObj = new EventHandler(this);
    return newObj.getUniqueDateAndSort();
}

Array.prototype.getSummary = function (...objects) {
    var newObj = new EventHandler(this);
    return newObj.getSummary();
}

