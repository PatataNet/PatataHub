gdjs.MainCode = {};
gdjs.MainCode.GDTextContentObjects1= [];
gdjs.MainCode.GDTextContentObjects2= [];
gdjs.MainCode.GDDownloadButtonObjects1= [];
gdjs.MainCode.GDDownloadButtonObjects2= [];
gdjs.MainCode.GDUploadButtonObjects1= [];
gdjs.MainCode.GDUploadButtonObjects2= [];
gdjs.MainCode.GDInstructionsObjects1= [];
gdjs.MainCode.GDInstructionsObjects2= [];

gdjs.MainCode.conditionTrue_0 = {val:false};
gdjs.MainCode.condition0IsTrue_0 = {val:false};
gdjs.MainCode.condition1IsTrue_0 = {val:false};
gdjs.MainCode.conditionTrue_1 = {val:false};
gdjs.MainCode.condition0IsTrue_1 = {val:false};
gdjs.MainCode.condition1IsTrue_1 = {val:false};


gdjs.MainCode.eventsList0 = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition0IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14218292);
}
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TextContent"), gdjs.MainCode.GDTextContentObjects1);
{gdjs.evtsExt__UploadDownloadTextFile__DownloadTextFile.func(runtimeScene, "filename.json", (( gdjs.MainCode.GDTextContentObjects1.length === 0 ) ? "" :gdjs.MainCode.GDTextContentObjects1[0].getString()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.MainCode.eventsList1 = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition0IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14219972);
}
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{gdjs.evtsExt__UploadDownloadTextFile__UploadTextFile.func(runtimeScene, runtimeScene.getScene().getVariables().get("TextContent"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.MainCode.eventsList2 = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition0IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14221836);
}
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TextContent"), gdjs.MainCode.GDTextContentObjects1);
{for(var i = 0, len = gdjs.MainCode.GDTextContentObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDTextContentObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("TextContent")));
}
}}

}


};gdjs.MainCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("DownloadButton"), gdjs.MainCode.GDDownloadButtonObjects1);

gdjs.MainCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDDownloadButtonObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDDownloadButtonObjects1[i].getBehavior("button").isClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.MainCode.condition0IsTrue_0.val = true;
        gdjs.MainCode.GDDownloadButtonObjects1[k] = gdjs.MainCode.GDDownloadButtonObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDDownloadButtonObjects1.length = k;}if (gdjs.MainCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("UploadButton"), gdjs.MainCode.GDUploadButtonObjects1);

gdjs.MainCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDUploadButtonObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDUploadButtonObjects1[i].getBehavior("button").isClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.MainCode.condition0IsTrue_0.val = true;
        gdjs.MainCode.GDUploadButtonObjects1[k] = gdjs.MainCode.GDUploadButtonObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDUploadButtonObjects1.length = k;}if (gdjs.MainCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtsExt__UploadDownloadTextFile__UploadFinished.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.MainCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainCode.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDTextContentObjects1.length = 0;
gdjs.MainCode.GDTextContentObjects2.length = 0;
gdjs.MainCode.GDDownloadButtonObjects1.length = 0;
gdjs.MainCode.GDDownloadButtonObjects2.length = 0;
gdjs.MainCode.GDUploadButtonObjects1.length = 0;
gdjs.MainCode.GDUploadButtonObjects2.length = 0;
gdjs.MainCode.GDInstructionsObjects1.length = 0;
gdjs.MainCode.GDInstructionsObjects2.length = 0;

gdjs.MainCode.eventsList3(runtimeScene);

return;

}

gdjs['MainCode'] = gdjs.MainCode;
