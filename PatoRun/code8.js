gdjs.Level_328Code = {};
gdjs.Level_328Code.GDBackgroundObjects1= [];
gdjs.Level_328Code.GDBackgroundObjects2= [];
gdjs.Level_328Code.GDBlackBarsObjects1= [];
gdjs.Level_328Code.GDBlackBarsObjects2= [];
gdjs.Level_328Code.GDNestObjects1= [];
gdjs.Level_328Code.GDNestObjects2= [];
gdjs.Level_328Code.GDDuckObjects1= [];
gdjs.Level_328Code.GDDuckObjects2= [];
gdjs.Level_328Code.GDLadyDuckObjects1= [];
gdjs.Level_328Code.GDLadyDuckObjects2= [];
gdjs.Level_328Code.GDHeartObjects1= [];
gdjs.Level_328Code.GDHeartObjects2= [];
gdjs.Level_328Code.GDTheEndObjects1= [];
gdjs.Level_328Code.GDTheEndObjects2= [];

gdjs.Level_328Code.conditionTrue_0 = {val:false};
gdjs.Level_328Code.condition0IsTrue_0 = {val:false};
gdjs.Level_328Code.condition1IsTrue_0 = {val:false};


gdjs.Level_328Code.eventsList0 = function(runtimeScene) {

{


gdjs.Level_328Code.condition0IsTrue_0.val = false;
{
gdjs.Level_328Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level_328Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "TheEnd.mp3", true, 100, 1);
}}

}


};

gdjs.Level_328Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_328Code.GDBackgroundObjects1.length = 0;
gdjs.Level_328Code.GDBackgroundObjects2.length = 0;
gdjs.Level_328Code.GDBlackBarsObjects1.length = 0;
gdjs.Level_328Code.GDBlackBarsObjects2.length = 0;
gdjs.Level_328Code.GDNestObjects1.length = 0;
gdjs.Level_328Code.GDNestObjects2.length = 0;
gdjs.Level_328Code.GDDuckObjects1.length = 0;
gdjs.Level_328Code.GDDuckObjects2.length = 0;
gdjs.Level_328Code.GDLadyDuckObjects1.length = 0;
gdjs.Level_328Code.GDLadyDuckObjects2.length = 0;
gdjs.Level_328Code.GDHeartObjects1.length = 0;
gdjs.Level_328Code.GDHeartObjects2.length = 0;
gdjs.Level_328Code.GDTheEndObjects1.length = 0;
gdjs.Level_328Code.GDTheEndObjects2.length = 0;

gdjs.Level_328Code.eventsList0(runtimeScene);

return;

}

gdjs['Level_328Code'] = gdjs.Level_328Code;
