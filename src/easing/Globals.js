let now = 0, lastTime = 0, deltaTime = 0, expectedFPS = 1000 / 60, currentTime = 0;

class Globals {
    static get now() {
        return now;
    }

    static set now(val) {
        now = val;
    }

    static get lastTime() {
        return lastTime;
    }

    static set lastTime(val) {
        lastTime = val;
    }

    static get deltaTime() {
        return deltaTime;
    }

    static set deltaTime(val) {
        deltaTime = val;
    }

    static get currentTime() {
        return currentTime;
    }

    static set currentTime(val) {
        currentTime = val;
    }

    static get expectedFPS() {
        return expectedFPS;
    }

}

export default Globals;
