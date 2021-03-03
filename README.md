<h1>Real-time Unity Score Leaderboard</h1>

[Read the Full Real-time Leaderboard Tutorial](https://www.pubnub.com/blog/realtime-highscores-leaderboards-in-unity/)

[Demo the Live LeaderBoard Project](https://pubnubdevelopers.github.io/Realtime-Unity-High-Score-Leaderboards/)

<a href="https://www.pubnub.com/blog/realtime-highscores-leaderboards-in-unity/"><img src="https://images.ctfassets.net/3prze68gbwl1/n1ccZJWJdVxRCOr8fCACl/f0a819ebbdac9f8154a9c2c7e4c5e2e4/Screen_Shot_2021-02-26_at_3.10.20_PM.png" alt="Realtime Leaderboards in Unity" width="800" /></a>

<h2>Getting Started</h2>

Download or clone the Realtime Unity High Score Leaderboards repo. Open Unity Hub, go to the projects tap, and click ‘Add’. 

If you’re using a Unity version newer than 2018 LTS then you’ll be asked to confirm you want to upgrade the project to a newer version of Unity. Click ‘Confirm’ to continue.


After importing the PubNub SDK or the tutorial project you might see an error message in the Unity console window that looks like this:

error CS0234: The type or namespace name 'TestTools' does not exist…

Fix the error by going to Window > General > Test Runner. Click on the drop-down menu in the top right corner and enable playmode tests for all assemblies. Close all open Unity windows completely and reopen your project.



Open up the Assets folder in your Project tab, and double-click on the LeaderBoard Unity Scene.

To try out the demo, click the Play button at the top of the Unity Editor.



If you get the following error, follow the steps below:

Scene ‘LeaderBoard’ couldn’t be loaded because it has not been added to the build settings or the AssetBundle has not been loaded.

To fix this, go to File > Build Settings. Click the ‘Add Open Scene’s button. Then go back to your Project tab, and double-click on the ‘LeaderBoard’ scene, go back to your Build Settings, and click ‘Add Open Scenes’ once again. Then in your Project Tab, double-click on the LeaderBoard scene again and run the project.
