gdjs.LeaderboardBackgroundCode = {};
gdjs.LeaderboardBackgroundCode.GDPlatformObjects1= [];
gdjs.LeaderboardBackgroundCode.GDPlatformObjects2= [];
gdjs.LeaderboardBackgroundCode.GDBackgroundObjects1= [];
gdjs.LeaderboardBackgroundCode.GDBackgroundObjects2= [];
gdjs.LeaderboardBackgroundCode.GDDustParticlesObjects1= [];
gdjs.LeaderboardBackgroundCode.GDDustParticlesObjects2= [];

gdjs.LeaderboardBackgroundCode.conditionTrue_0 = {val:false};
gdjs.LeaderboardBackgroundCode.condition0IsTrue_0 = {val:false};
gdjs.LeaderboardBackgroundCode.condition1IsTrue_0 = {val:false};


gdjs.LeaderboardBackgroundCode.eventsList0 = function(runtimeScene) {

{


gdjs.LeaderboardBackgroundCode.condition0IsTrue_0.val = false;
{
gdjs.LeaderboardBackgroundCode.condition0IsTrue_0.val = !(gdjs.evtTools.leaderboards.isLeaderboardViewLoaded());
}if (gdjs.LeaderboardBackgroundCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};

gdjs.LeaderboardBackgroundCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LeaderboardBackgroundCode.GDPlatformObjects1.length = 0;
gdjs.LeaderboardBackgroundCode.GDPlatformObjects2.length = 0;
gdjs.LeaderboardBackgroundCode.GDBackgroundObjects1.length = 0;
gdjs.LeaderboardBackgroundCode.GDBackgroundObjects2.length = 0;
gdjs.LeaderboardBackgroundCode.GDDustParticlesObjects1.length = 0;
gdjs.LeaderboardBackgroundCode.GDDustParticlesObjects2.length = 0;

gdjs.LeaderboardBackgroundCode.eventsList0(runtimeScene);

return;

}

gdjs['LeaderboardBackgroundCode'] = gdjs.LeaderboardBackgroundCode;
