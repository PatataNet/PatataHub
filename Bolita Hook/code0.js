gdjs.TitleCode = {};
gdjs.TitleCode.GDRopeObjects1= [];
gdjs.TitleCode.GDRopeObjects2= [];
gdjs.TitleCode.GDRopeObjects3= [];
gdjs.TitleCode.GDSmallRedBallObjects1= [];
gdjs.TitleCode.GDSmallRedBallObjects2= [];
gdjs.TitleCode.GDSmallRedBallObjects3= [];
gdjs.TitleCode.GDFinishObjects1= [];
gdjs.TitleCode.GDFinishObjects2= [];
gdjs.TitleCode.GDFinishObjects3= [];
gdjs.TitleCode.GDEmptyCloudBackgroundObjects1= [];
gdjs.TitleCode.GDEmptyCloudBackgroundObjects2= [];
gdjs.TitleCode.GDEmptyCloudBackgroundObjects3= [];
gdjs.TitleCode.GDStarObjects1= [];
gdjs.TitleCode.GDStarObjects2= [];
gdjs.TitleCode.GDStarObjects3= [];
gdjs.TitleCode.GDBluePanelObjects1= [];
gdjs.TitleCode.GDBluePanelObjects2= [];
gdjs.TitleCode.GDBluePanelObjects3= [];
gdjs.TitleCode.GDInstructionsObjects1= [];
gdjs.TitleCode.GDInstructionsObjects2= [];
gdjs.TitleCode.GDInstructionsObjects3= [];
gdjs.TitleCode.GDTitleObjects1= [];
gdjs.TitleCode.GDTitleObjects2= [];
gdjs.TitleCode.GDTitleObjects3= [];

gdjs.TitleCode.conditionTrue_0 = {val:false};
gdjs.TitleCode.condition0IsTrue_0 = {val:false};
gdjs.TitleCode.condition1IsTrue_0 = {val:false};


gdjs.TitleCode.eventsList0 = function(runtimeScene) {

{


gdjs.TitleCode.condition0IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 2);
}if (gdjs.TitleCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 2);
}}

}


};gdjs.TitleCode.eventsList1 = function(runtimeScene) {

{


gdjs.TitleCode.condition0IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.TitleCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.TitleCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("EmptyCloudBackground"), gdjs.TitleCode.GDEmptyCloudBackgroundObjects1);
{for(var i = 0, len = gdjs.TitleCode.GDEmptyCloudBackgroundObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDEmptyCloudBackgroundObjects1[i].setXOffset(gdjs.TitleCode.GDEmptyCloudBackgroundObjects1[i].getXOffset() + (1));
}
}}

}


};gdjs.TitleCode.eventsList2 = function(runtimeScene) {

{


gdjs.TitleCode.condition0IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.TitleCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Levels", false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}}

}


};gdjs.TitleCode.eventsList3 = function(runtimeScene) {

{


gdjs.TitleCode.condition0IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.TitleCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SmallRedBall"), gdjs.TitleCode.GDSmallRedBallObjects2);
gdjs.copyArray(runtimeScene.getObjects("Star"), gdjs.TitleCode.GDStarObjects2);
{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.TitleCode.GDSmallRedBallObjects2.length !== 0 ? gdjs.TitleCode.GDSmallRedBallObjects2[0] : null), (gdjs.TitleCode.GDStarObjects2.length !== 0 ? gdjs.TitleCode.GDStarObjects2[0] : null));
}{for(var i = 0, len = gdjs.TitleCode.GDStarObjects2.length ;i < len;++i) {
    gdjs.TitleCode.GDStarObjects2[i].getBehavior("Physics2").addRopeJoint((gdjs.TitleCode.GDStarObjects2[i].getPointX("Grab")), (gdjs.TitleCode.GDStarObjects2[i].getPointY("Grab")), (gdjs.TitleCode.GDSmallRedBallObjects2.length !== 0 ? gdjs.TitleCode.GDSmallRedBallObjects2[0] : null), (( gdjs.TitleCode.GDSmallRedBallObjects2.length === 0 ) ? 0 :gdjs.TitleCode.GDSmallRedBallObjects2[0].getPointX("Grab")), (( gdjs.TitleCode.GDSmallRedBallObjects2.length === 0 ) ? 0 :gdjs.TitleCode.GDSmallRedBallObjects2[0].getPointY("Grab")), -(1), false, gdjs.VariablesContainer.badVariable);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Rope"), gdjs.TitleCode.GDRopeObjects1);
gdjs.copyArray(runtimeScene.getObjects("SmallRedBall"), gdjs.TitleCode.GDSmallRedBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Star"), gdjs.TitleCode.GDStarObjects1);
{for(var i = 0, len = gdjs.TitleCode.GDRopeObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDRopeObjects1[i].drawLine((( gdjs.TitleCode.GDSmallRedBallObjects1.length === 0 ) ? 0 :gdjs.TitleCode.GDSmallRedBallObjects1[0].getPointX("Grab")), (( gdjs.TitleCode.GDSmallRedBallObjects1.length === 0 ) ? 0 :gdjs.TitleCode.GDSmallRedBallObjects1[0].getPointY("Grab")), (( gdjs.TitleCode.GDStarObjects1.length === 0 ) ? 0 :gdjs.TitleCode.GDStarObjects1[0].getPointX("Grab")), (( gdjs.TitleCode.GDStarObjects1.length === 0 ) ? 0 :gdjs.TitleCode.GDStarObjects1[0].getPointY("Grab")), 3);
}
}}

}


};gdjs.TitleCode.eventsList4 = function(runtimeScene) {

{


gdjs.TitleCode.eventsList1(runtimeScene);
}


{


gdjs.TitleCode.eventsList2(runtimeScene);
}


{


gdjs.TitleCode.eventsList3(runtimeScene);
}


};

gdjs.TitleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TitleCode.GDRopeObjects1.length = 0;
gdjs.TitleCode.GDRopeObjects2.length = 0;
gdjs.TitleCode.GDRopeObjects3.length = 0;
gdjs.TitleCode.GDSmallRedBallObjects1.length = 0;
gdjs.TitleCode.GDSmallRedBallObjects2.length = 0;
gdjs.TitleCode.GDSmallRedBallObjects3.length = 0;
gdjs.TitleCode.GDFinishObjects1.length = 0;
gdjs.TitleCode.GDFinishObjects2.length = 0;
gdjs.TitleCode.GDFinishObjects3.length = 0;
gdjs.TitleCode.GDEmptyCloudBackgroundObjects1.length = 0;
gdjs.TitleCode.GDEmptyCloudBackgroundObjects2.length = 0;
gdjs.TitleCode.GDEmptyCloudBackgroundObjects3.length = 0;
gdjs.TitleCode.GDStarObjects1.length = 0;
gdjs.TitleCode.GDStarObjects2.length = 0;
gdjs.TitleCode.GDStarObjects3.length = 0;
gdjs.TitleCode.GDBluePanelObjects1.length = 0;
gdjs.TitleCode.GDBluePanelObjects2.length = 0;
gdjs.TitleCode.GDBluePanelObjects3.length = 0;
gdjs.TitleCode.GDInstructionsObjects1.length = 0;
gdjs.TitleCode.GDInstructionsObjects2.length = 0;
gdjs.TitleCode.GDInstructionsObjects3.length = 0;
gdjs.TitleCode.GDTitleObjects1.length = 0;
gdjs.TitleCode.GDTitleObjects2.length = 0;
gdjs.TitleCode.GDTitleObjects3.length = 0;

gdjs.TitleCode.eventsList4(runtimeScene);

return;

}

gdjs['TitleCode'] = gdjs.TitleCode;
