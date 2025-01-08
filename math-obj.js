const mathObj = {
    abs (a) {
        return Math.abs(a);
    },
    isEven (a) {
        if (a % 2 == 0) {
            return true;
        } else {
            return false;
        }
    }, 
    isOdd (a) {
        if (a % 2 == 0) {
            return false;
        } else {
            return true;
        }
    },
    isStrictlyPositive (a) {
        if (a > 0) {
            return true;
        } else {
            return false;
        }
    },
    min (a, b) {
        if (a < b) {
            return a;
        } else {
            return b;
        }
    },
    max (a, b) {
        if (a < b) {
            return b;
        } else {
            return a;
        }
    }
}
