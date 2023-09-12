gdjs.LeaderboardCode = {};
gdjs.LeaderboardCode.GDScoreTextObjects1= [];
gdjs.LeaderboardCode.GDScoreTextObjects2= [];
gdjs.LeaderboardCode.GDScoreTextObjects3= [];
gdjs.LeaderboardCode.GDPlayerNameInputObjects1= [];
gdjs.LeaderboardCode.GDPlayerNameInputObjects2= [];
gdjs.LeaderboardCode.GDPlayerNameInputObjects3= [];
gdjs.LeaderboardCode.GDSubmitButtonObjects1= [];
gdjs.LeaderboardCode.GDSubmitButtonObjects2= [];
gdjs.LeaderboardCode.GDSubmitButtonObjects3= [];
gdjs.LeaderboardCode.GDMainMenuButtonObjects1= [];
gdjs.LeaderboardCode.GDMainMenuButtonObjects2= [];
gdjs.LeaderboardCode.GDMainMenuButtonObjects3= [];
gdjs.LeaderboardCode.GDRestartButtonObjects1= [];
gdjs.LeaderboardCode.GDRestartButtonObjects2= [];
gdjs.LeaderboardCode.GDRestartButtonObjects3= [];
gdjs.LeaderboardCode.GDSummerBackgroundObjects1= [];
gdjs.LeaderboardCode.GDSummerBackgroundObjects2= [];
gdjs.LeaderboardCode.GDSummerBackgroundObjects3= [];
gdjs.LeaderboardCode.GDGrassObjects1= [];
gdjs.LeaderboardCode.GDGrassObjects2= [];
gdjs.LeaderboardCode.GDGrassObjects3= [];
gdjs.LeaderboardCode.GDTreeObjects1= [];
gdjs.LeaderboardCode.GDTreeObjects2= [];
gdjs.LeaderboardCode.GDTreeObjects3= [];
gdjs.LeaderboardCode.GDNewPanelSpriteObjects1= [];
gdjs.LeaderboardCode.GDNewPanelSpriteObjects2= [];
gdjs.LeaderboardCode.GDNewPanelSpriteObjects3= [];


gdjs.LeaderboardCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.playerAuthentication.isAuthenticated();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.LeaderboardCode.GDPlayerNameInputObjects2);
{for(var i = 0, len = gdjs.LeaderboardCode.GDPlayerNameInputObjects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDPlayerNameInputObjects2[i].setString(gdjs.playerAuthentication.getUsername());
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDPlayerNameInputObjects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDPlayerNameInputObjects2[i].setDisabled(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.playerAuthentication.isAuthenticated());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("PlayerName")) != "0";
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.LeaderboardCode.GDPlayerNameInputObjects1);
{for(var i = 0, len = gdjs.LeaderboardCode.GDPlayerNameInputObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDPlayerNameInputObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("PlayerName")));
}
}}

}


};gdjs.LeaderboardCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.playerAuthentication.isAuthenticated();
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.saveConnectedPlayerScore(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)))), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Score")));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.playerAuthentication.isAuthenticated());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.LeaderboardCode.GDPlayerNameInputObjects2);
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)))), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Score")), (( gdjs.LeaderboardCode.GDPlayerNameInputObjects2.length === 0 ) ? "" :gdjs.LeaderboardCode.GDPlayerNameInputObjects2[0].getString()));
}{runtimeScene.getGame().getVariables().get("PlayerName").setString((( gdjs.LeaderboardCode.GDPlayerNameInputObjects2.length === 0 ) ? "" :gdjs.LeaderboardCode.GDPlayerNameInputObjects2[0].getString()));
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.playerAuthentication.removeAuthenticationBanner(runtimeScene);
}{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)))), true);
}}

}


};gdjs.LeaderboardCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.LeaderboardCode.GDScoreTextObjects1);
{for(var i = 0, len = gdjs.LeaderboardCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDScoreTextObjects1[i].setString("Time: " + gdjs.evtsExt__TimeFormatter__SecondsToHHMMSS000.func(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Score")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}
{ //Subevents
gdjs.LeaderboardCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.playerAuthentication.hasLoggedIn();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.LeaderboardCode.GDPlayerNameInputObjects1);
{for(var i = 0, len = gdjs.LeaderboardCode.GDPlayerNameInputObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDPlayerNameInputObjects1[i].setString(gdjs.playerAuthentication.getUsername());
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDPlayerNameInputObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDPlayerNameInputObjects1[i].setDisabled(true);
}
}{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.leaderboards.isLeaderboardViewErrored();
if (isConditionTrue_0) {
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RestartButton"), gdjs.LeaderboardCode.GDRestartButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDRestartButtonObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDRestartButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDRestartButtonObjects1[k] = gdjs.LeaderboardCode.GDRestartButtonObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDRestartButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.playerAuthentication.removeAuthenticationBanner(runtimeScene);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MainMenuButton"), gdjs.LeaderboardCode.GDMainMenuButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDMainMenuButtonObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDMainMenuButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDMainMenuButtonObjects1[k] = gdjs.LeaderboardCode.GDMainMenuButtonObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDMainMenuButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.playerAuthentication.removeAuthenticationBanner(runtimeScene);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LevelSelection", false);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("SubmitButton"), gdjs.LeaderboardCode.GDSubmitButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDSubmitButtonObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDSubmitButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDSubmitButtonObjects1[k] = gdjs.LeaderboardCode.GDSubmitButtonObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDSubmitButtonObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.LeaderboardCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.leaderboards.hasPlayerJustClosedLeaderboardView();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.leaderboards.hasBeenSaved(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)))));
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LevelSelection", false);
}}

}


};

gdjs.LeaderboardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LeaderboardCode.GDScoreTextObjects1.length = 0;
gdjs.LeaderboardCode.GDScoreTextObjects2.length = 0;
gdjs.LeaderboardCode.GDScoreTextObjects3.length = 0;
gdjs.LeaderboardCode.GDPlayerNameInputObjects1.length = 0;
gdjs.LeaderboardCode.GDPlayerNameInputObjects2.length = 0;
gdjs.LeaderboardCode.GDPlayerNameInputObjects3.length = 0;
gdjs.LeaderboardCode.GDSubmitButtonObjects1.length = 0;
gdjs.LeaderboardCode.GDSubmitButtonObjects2.length = 0;
gdjs.LeaderboardCode.GDSubmitButtonObjects3.length = 0;
gdjs.LeaderboardCode.GDMainMenuButtonObjects1.length = 0;
gdjs.LeaderboardCode.GDMainMenuButtonObjects2.length = 0;
gdjs.LeaderboardCode.GDMainMenuButtonObjects3.length = 0;
gdjs.LeaderboardCode.GDRestartButtonObjects1.length = 0;
gdjs.LeaderboardCode.GDRestartButtonObjects2.length = 0;
gdjs.LeaderboardCode.GDRestartButtonObjects3.length = 0;
gdjs.LeaderboardCode.GDSummerBackgroundObjects1.length = 0;
gdjs.LeaderboardCode.GDSummerBackgroundObjects2.length = 0;
gdjs.LeaderboardCode.GDSummerBackgroundObjects3.length = 0;
gdjs.LeaderboardCode.GDGrassObjects1.length = 0;
gdjs.LeaderboardCode.GDGrassObjects2.length = 0;
gdjs.LeaderboardCode.GDGrassObjects3.length = 0;
gdjs.LeaderboardCode.GDTreeObjects1.length = 0;
gdjs.LeaderboardCode.GDTreeObjects2.length = 0;
gdjs.LeaderboardCode.GDTreeObjects3.length = 0;
gdjs.LeaderboardCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.LeaderboardCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.LeaderboardCode.GDNewPanelSpriteObjects3.length = 0;

gdjs.LeaderboardCode.eventsList2(runtimeScene);

return;

}

gdjs['LeaderboardCode'] = gdjs.LeaderboardCode;
