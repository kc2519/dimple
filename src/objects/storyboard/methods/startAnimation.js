// Copyright: 2013 PMSI-AlignAlytics
// License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"
// Source: /src/objects/storyboard/methods/startAnimation.js
this.startAnimation = function () {
    if (this._animationTimer == null) {
        if (this.onTick != null) { this.onTick(this.getFrameValue()); };
        this._animationTimer = setInterval((function (storyboard) {
            return function () {
                storyboard._goToFrameIndex(storyboard._frame + 1);
                if (storyboard.onTick != null) {
                    storyboard.onTick(storyboard.getFrameValue());
                };
                storyboard._drawText(storyboard.frameDuration / 2);
            }
        })(this), this.frameDuration);
    }
};

