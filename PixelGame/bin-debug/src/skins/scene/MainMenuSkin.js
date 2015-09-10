var skins;
(function (skins) {
    var scene;
    (function (scene) {
        var MainMenuSkin = (function (_super) {
            __extends(MainMenuSkin, _super);
            function MainMenuSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [480, 800]);
                this.elementsContent = [this.bg_i(), this.grp_particle_i(), this.grp_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var __egretProto__ = MainMenuSkin.prototype;
            Object.defineProperty(__egretProto__, "skinParts", {
                get: function () {
                    return MainMenuSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            __egretProto__.__4_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "x", "y"], ["Gabriola", 40, "Quit", 618, 371]);
                return t;
            };
            __egretProto__.bg_i = function () {
                var t = new egret.gui.UIAsset();
                this.bg = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [520, "title_bg", 840, -20, -20]);
                return t;
            };
            __egretProto__.grp_i = function () {
                var t = new egret.gui.Group();
                this.grp = t;
                this.__s(t, ["height", "width", "x", "y"], [480, 800, 0, 0]);
                t.elementsContent = [this.lbl_start_i(), this.__3_i(), this.__4_i(), this.img_title_i()];
                return t;
            };
            __egretProto__.grp_particle_i = function () {
                var t = new egret.gui.Group();
                this.grp_particle = t;
                this.__s(t, ["height", "width", "x", "y"], [480, 800, 0, 0]);
                return t;
            };
            __egretProto__.img_title_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_title = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [128, "title_title_1", 360, 99, 81]);
                return t;
            };
            __egretProto__.lbl_start_i = function () {
                var t = new egret.gui.Label();
                this.lbl_start = t;
                this.__s(t, ["fontFamily", "size", "text", "x", "y"], ["Gabriola", 40, "Start", 588, 271]);
                return t;
            };
            __egretProto__.__3_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "x", "y"], ["Gabriola", 40, "Options", 598, 321]);
                return t;
            };
            MainMenuSkin._skinParts = ["bg", "grp_particle", "lbl_start", "img_title", "grp"];
            return MainMenuSkin;
        })(egret.gui.Skin);
        scene.MainMenuSkin = MainMenuSkin;
        MainMenuSkin.prototype.__class__ = "skins.scene.MainMenuSkin";
    })(scene = skins.scene || (skins.scene = {}));
})(skins || (skins = {}));
//# sourceMappingURL=MainMenuSkin.js.map