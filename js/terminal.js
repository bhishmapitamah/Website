// Main properties handler for the TERMINAL
var terminal = {}
var controller;

// About
terminal.about = 
"<div class='jquery-console-message jquery-console-message-value'>"+
  "<p class='heading'>About Me:</p>"+   
  "<p>I am Ashutosh Pandey, pre-final year Electrical Engineering student at IIT Jodhpur. "+
  "I love to code, specially in C++. Other languages that i have worked on are MATLAB, javascript, HTML, java, Arduino including some others.</p>"+
  "<p>Music is my other interest, both listening and production. However, i still don't know a lot about production. "+
  "I also love Physics a lot because according to me it is the most meaningful subject to study.</p>"+
"</div>";

// Profile
terminal.profile = 
"<div class='jquery-console-message jquery-console-message-value'>"+
  "<p class='heading'>Profile:</p>"+
  "<p>There is nothing in this section, execept for the links.</p>"+
  "<ul>"+
    "<li><span class='list-heading'>Hackerrank Profile:</span> "+
    "<a href='https://www.hackerrank.com/bhishmapitamah' target='ashutosh_hackerrank'>Hackerrank</a></li>"+
    "<li><span class='list-heading'>Codechef Profile:</span> "+
    "<a href='https://www.codechef.com/users/ashutoshpandey' target='ashutosh_codechef'>Codechef</a></li>"+
    "<li><span class='list-heading'>Facebook Profile:</span> "+
    "<a href='https://www.facebook.com/profile.php?id=100005883821358' target='ashutosh_facebook'>Facebook</a></li>"+
    "<li><span class='list-heading'>Github Profile:</span> "+
    "<a href='https://github.com/bhishmapitamah'>Github</a></li>"+
    "<li><span class='list-heading'>Linkedin Profile:</span> "+
    "<a href='https://www.linkedin.com/in/pandey-ashutosh' target='ashutosh_linkedin'>Linkedin</a></li>"+
  "</ul>"+
"</div>";

// Projects 
terminal.projects = 
"<div class='jquery-console-message jquery-console-message-value'>"+
  "<p class='heading'>Projects:</p>"+
  "<ul>"+
    "<li><span class='list-heading'>Character Recognition:</span> MATLAB App for converting printed character images to text using single layer Neural Network and basic image preprocessing."+
    "<a href='https://github.com/bhishmapitamah/Character-Recognition'>Link</a></li>"+
    "<li><span class='list-heading'>Staza:</span> Get your phone's current location just by sending text message provided by the app from any device."+
    "<a href='https://github.com/bhishmapitamah/Staza'>Link</a></li>"+
    "<li><span class='list-heading'>Valokuvat:</span> Cloud based gallery app for organizing and searching through your images based on tags retrieved using Azure based Computer Vision and Face API."+
    "<a href='https://github.com/bhishmapitamah/Valokuvat'>Link</a></li>"+
    "<li><span class='list-heading'>3D Gravity Simulator:</span> C program based on graphics.h library for simulating a gravitational environment between arbitrary number of particles which can be added or removed during runtime.</li>"+
    "<li><span class='list-heading'>Logo on C:</span> C based implementation of computing environment Logo, an educational interpreter language.</li>"+
    "<li><span class='list-heading'>C Based Graphics Game:</span> A Multiplayer game with the objective to reach on the top of the screen by choosing the smartest moves or by obstructing other player's path implemented on C.</li>"+
  "</ul>"+
"</div>";

// Contact
terminal.contact = 
"<div class='jquery-console-message jquery-console-message-value'>"+
  "<p class='heading'>Contact Me:</p>"+
  "<ul>"+
    "<li><span class='list-heading'>Location:</span> Wandering somewhere inside IIT Jodhpur, Rajasthan, India, Earth, Inner Solar System, Heliosphere, Oort Cloud, Solar System, "+
      "Gould Belt, Orion Arm, Milky Way, Virgo Supercluster, Observable Universe ‹Multiverse??›[26.473514, 73.114559]</li>"+
    "<li><span class='list-heading'>Phone:</span> +91 810 710 4208</li>"+
    "<li><span class='list-heading'>Email:</span> pandey.3@iitj.ac.in</li>"+
    "<li><span class='list-heading'>Social:</span> "+
      "<a href='https://www.facebook.com/profile.php?id=100005883821358' target='ashutosh_facebook'>Facebook</a>, "+
      "<a href='https://www.linkedin.com/in/pandey-ashutosh' target='ashutosh_linkedin'>Linkedin</a>, "+
      "<a href='https://github.com/bhishmapitamah'>Github</a></li>"+
  "</ul>"+
"</div>";

// Credits
terminal.credits = 
"<div class='jquery-console-message jquery-console-message-value'>"+
  "<p class='heading'>Credits:</p>"+
  "<p>The TERMINAL is created over <a href='https://github.com/chrisdone/jquery-console'>jquery-console</a> console emulator by Cris Done. "+
  "I also want to thank stackoverflow for immense help, most things about music player and other javascript things came from there and W3Schools also. "+
  "And me for thinking all this up and spending my holidays doing something good. And to you who came here for no reason and wasted you precious time. © 2018 Copyright: Bhishma Pitamah</p>"+
"</div>";

// Help
terminal.help = 
"<div class='jquery-console-message jquery-console-message-value'>"+
  "<p>For more information about a specific command type HELP [command-name]. The available commands are as follows:</p>"+
  "<table class='help-table'>"+
    "<tr>"+
      "<td>ASHUTOSH</td>"+"<td>Shows the website in text format. Use HELP ASHUTOSH for other flags to access particular sections.</td>"+
    "</tr>"+
    "<tr>"+
      "<td>MUSIC</td>"+"<td>Play background music. Use HELP MUSIC for the various controls available.</td>"+
    "</tr>"+
    "<tr>"+
      "<td>JAVASCRIPT&nbsp;&nbsp;&nbsp;</td>"+"<td>Executes any javascript command.</td>"+
    "</tr>"+
    "<tr>"+
      "<td>CLEAR</td>"+"<td>Clears the console</td>"+
    "</tr>"+
    "<tr>"+
      "<td>EXIT</td>"+"<td>Closes the console</td>"+
    "</tr>"+
  "</table>"+
  "<p>Control commands:</p>"+
  "<table class='help-table'>"+
    "<tr>"+
      "<td>UP</td>"+"<td>Previous history</td>"+
    "</tr>"+
    "<tr>"+
      "<td>DOWN</td>"+"<td>Next history</td>"+
    "</tr>"+
    "<tr>"+
      "<td>TAB</td>"+"<td>Possible complitions</td>"+
    "</tr>"+
    "<tr>"+
      "<td>Ctrl + A</td>"+"<td>Move to start</td>"+
    "</tr>"+
    "<tr>"+
      "<td>Ctrl + E</td>"+"<td>Move to end</td>"+
    "</tr>"+
    "<tr>"+
      "<td>Ctrl + D</td>"+"<td>Forward delete</td>"+
    "</tr>"+
    "<tr>"+
      "<td>Ctrl + N</td>"+"<td>Next history</td>"+
    "</tr>"+
    "<tr>"+
      "<td>Ctrl + P</td>"+"<td>Previous history</td>"+
    "</tr>"+
    "<tr>"+
      "<td>Ctrl + B</td>"+"<td>Move backward</td>"+
    "</tr>"+
    "<tr>"+
      "<td>Ctrl + F</td>"+"<td>Move foward</td>"+
    "</tr>"+
    "<tr>"+
      "<td>Ctrl + K</td>"+"<td>Delete until end</td>"+
    "</tr>"+
    "<tr>"+
      "<td>Ctrl + L</td>"+"<td>Clear screen</td>"+
    "</tr>"+
    "<tr>"+
      "<td>Ctrl + U</td>"+"<td>Clear current prompt</td>"+
    "</tr>"+
    "<tr>"+
      "<td>Alt + F</td>"+"<td>Move to next word</td>"+
    "</tr>"+
    "<tr>"+
      "<td>Alt + B</td>"+"<td>Move to previous word</td>"+
    "</tr>"+
    "<tr>"+
      "<td>Alt + D</td>"+"<td>Delete Next Word</td>"+
    "</tr>"+
    "<tr>"+
      "<td>Shift + RETURN&nbsp;&nbsp;&nbsp;</td>"+"<td>New line</td>"+
    "</tr>"+
  "</table>"+
"</div>";

// HELP help
terminal.helpHelp = 
"<div class='jquery-console-message jquery-console-message-value'>"+
  "<p>Shows the Description and usage of a command.</p>"+
  "<p style='color:white'>HELP [command]</p>"+
  "<p>command is any vaid TERMINAL command.</p>"+
  "<table class='help-table'>"+
    "<tr>"+
      "<td style='padding-right:4em'>command</td>"+"<td>Any TERMINAL command.</td>"+
    "</tr>"+
  "</table>"+
"</div>";

// ASHUTOSH help
terminal.ashutoshHelp = 
"<div class='jquery-console-message jquery-console-message-value'>"+
  "<p>Shows the website in text format.</p>"+
  "<p style='color:white'>ASHUTOSH [flags]</p>"+
  "<p>Type ASHUTOSH wihtout parameters to show the whole website.<br/>"+
  "Use flags to display specific sectoins of the website.</p>"+
  "<table class='help-table'>"+
    "<tr>"+
      "<td style='padding-right:4em'>-ABOUT</td>"+"<td>Display the about section of the website</td>"+
    "</tr>"+
    "<tr>"+
      "<td>-PROFILE</td>"+"<td>Display the profile section of the website</td>"+
    "</tr>"+
    "<tr>"+
      "<td>-PROJECTS</td>"+"<td>Display the Projects section of the website</td>"+
    "</tr>"+
    "<tr>"+
      "<td>-CONTACT</td>"+"<td>Display the Contact section of the website</td>"+
    "</tr>"+
     "<tr>"+
      "<td>-CREDITS</td>"+"<td>Display the Contact section of the website</td>"+
    "</tr>"+
    "<tr>"+
      "<td>--FACEBOOK</td>"+"<td>Open Facebook profile in a new tab</td>"+
    "</tr>"+
    "<tr>"+
      "<td>--LINKEDIN</td>"+"<td>Open Linkedin profile in a new tab</td>"+
    "</tr>"+
    "<tr>"+
      "<td>--GITHUB</td>"+"<td>Open Github profile in a new tab</td>"+
    "</tr>"+
  "</table>"+
"</div>";

// MUSIC help
terminal.musicHelp = 
"<div class='jquery-console-message jquery-console-message-value'>"+
  "<p>Plays music in background.</p>"+
  "<p style='color:white'>MUSIC [command]</p>"+
  "<p>Type MUSIC along with control commands to control the music playback.<br/>"+
  "Use flags to display specific sectoins of the website.</p>"+
  "<table class='help-table'>"+
    "<tr>"+
      "<td style='padding-right:4em'>PLAY</td>"+"<td>Play background music</td>"+
    "</tr>"+
    "<tr>"+
      "<td>PAUSE</td>"+"<td>Pause the background music</td>"+
    "</tr>"+
    "<tr>"+
      "<td>STOP</td>"+"<td>Stop background music</td>"+
    "</tr>"+
    "<tr>"+
      "<td>VOLUME</td>"+"<td>Set the volume level given as argument from 1 to 100 if given else show current volume</td>"+
    "</tr>"+
    "<tr>"+
      "<td>NEXT</td>"+"<td>Play next track</td>"+
    "</tr>"+
    "<tr>"+
      "<td>PREVIOUS</td>"+"<td>Play previous track</td>"+
    "</tr>"+
    "<tr>"+
      "<td>AUTOPLAY</td>"+"<td>Change autoplay give argument on or off else toggle state</td>"+
    "</td>"+
  "</table>"+
"</div>";

// JAVASCRIPT help
terminal.javascriptHelp = 
"<div class='jquery-console-message jquery-console-message-value'>"+
  "<p>Switch to javascript console.</p>"+
  "<p style='color:white'>JAVASCRIPT</p>"+
  "<p>Type JAVASCRIPT to switch the prompt to javascript where you can execute all your javascript commands.</p>"+
"</div>";

// EXIT help
terminal.exitHelp = 
"<div class='jquery-console-message jquery-console-message-value'>"+
  "<p>Close the TERMINAL.</p>"+
  "<p style='color:white'>EXIT</p>"+
  "<p>Type EXIT to shut down the console and close the current tab.</p>"+
"</div>";

// CLEAR help
terminal.clearHelp = 
"<div class='jquery-console-message jquery-console-message-value'>"+
  "<p>Clear the TERMINAL.</p>"+
  "<p style='color:white'>CLEAR</p>"+
  "<p>Type CLEAR to clear the all the terminal except the current prompt.</p>"+
"</div>";

// Track list
terminal.tracks = [
  "Nothing-Breaks-Like-A-Heart.mp3","Something-About-You.mp3","Half-Life-2-Cp-Violation-Dubstep-Remix.mp3","Whine-Up-Fimi.mp3"
];

// Command List
terminal.commandList = {
  "ashutosh":["-about","-profile","-projects","-contact","-credits","--facebook","--linkedin","--github"],
  "music":["play","pause","stop","volume","next","previous","autoplay"],
  "javascript":[],
  "help":["ashutosh","music","javascript","exit","clear","help"],
  "exit":[],
  "clear":[]
};

// Command list callbacks
terminal.commandCallbacks = function(command,argument,argumentCount){
  var possible = terminal.commandList[command];
  switch(command){
    case 'ashutosh':
      if(argumentCount > 1)return ([{msg:'"'+command+'" does not take more than one argument',className:'jquery-console-message-error'}]);
      if(argumentCount > 0 && possible.indexOf(argument[0]) == -1){
        return ([{msg:'"'+command+'" does not recognize "'+argument+'" as a argument',className:'jquery-console-message-error'}]);
      }
      switch(argument[0]){
        case '-about':return $(terminal.about);
        case '-profile':return $(terminal.profile);
        case '-projects':return $(terminal.projects);
        case '-contact':return $(terminal.contact);
        case '-credits':return $(terminal.credits);
        case '--facebook':window.open("https://www.facebook.com/profile.php?id=100005883821358", 'ashutosh_facebook');return true;
        case '--linkedin':window.open("https://www.linkedin.com/in/pandey-ashutosh", 'ashutosh_linkedin');return true;
        case '--github':window.open("https://github.com/bhishmapitamah", 'ashutosh_github');return true;
        default:return $(terminal.about+terminal.profile+terminal.projects+terminal.contact+terminal.credits);
      }
      break;
    case 'music':
      if(!terminal.audioAvailable){
        return ([{msg:'Your browser does not support HTML5 audio.',className:'jquery-console-message-error'}]);
      }
      if(argumentCount > 0 && possible.indexOf(argument[0]) == -1){
        return ([{msg:'"'+command+'" does not recognize "'+argument+'" as a argument',className:'jquery-console-message-error'}]);
      }
      if(argumentCount > 1 && argument[0] != 'volume' && argument[0] != 'autoplay'){
        return ([{msg:'"'+command+'" does not take more than one argument',className:'jquery-console-message-error'}]);
      }
      switch(argument[0]){
        case 'play':
          terminal.audio.play();
          return ([{msg:'Playing '+terminal.tracks[terminal.currentTrack],className:'jquery-console-message-value'}]); 
        case 'pause':
          terminal.audio.pause();
          return ([{msg:'Paused.',className:'jquery-console-message-value'}]);
        case 'stop':
          terminal.audio.pause();
          terminal.audio.currentTime = 0;
          return ([{msg:'Stopped.',className:'jquery-console-message-value'}]);
        case 'volume':
          if(argumentCount > 2){
            return ([{msg:'"'+command+'" does not take more than two argument',className:'jquery-console-message-error'}]);
          }
          else if(argumentCount < 2){
            return ([{msg:'Currently volume is at '+terminal.audio.volume*100,className:'jquery-console-message-value'}]); 
          }
          var vol = parseInt(argument[1],10);
          if(isNaN(vol) || vol < 0)vol = 0;
          else if(vol >= 100)vol = 100;
          terminal.audio.volume = vol/100;
          return ([{msg:'Volume is set to '+vol,className:'jquery-console-message-value'}]);
        case 'next':
          terminal.audio.pause();
          if(terminal.currentTrack == terminal.tracks.length - 1)terminal.currentTrack = 0;
          else terminal.currentTrack++;
          terminal.audioSource.src = "audio/"+terminal.tracks[terminal.currentTrack];
          terminal.audio.load();
          terminal.audio.play();
          return ([{msg:'Playing '+terminal.tracks[terminal.currentTrack],className:'jquery-console-message-value'}]);
        case 'previous':
          terminal.audio.pause();
          if(terminal.currentTrack == 0)terminal.currentTrack = terminal.tracks.length - 1;
          else terminal.currentTrack--;
          terminal.audioSource.src = "audio/"+terminal.tracks[terminal.currentTrack];
          terminal.audio.load();
          terminal.audio.play();
          return ([{msg:'Playing '+terminal.tracks[terminal.currentTrack],className:'jquery-console-message-value'}]);
        case 'autoplay':
          if(argumentCount > 2){
            return ([{msg:'"'+command+'" does not take more than two argument',className:'jquery-console-message-error'}]);
          }
          else if(argumentCount < 2){
            terminal.autoplay = !terminal.autoplay;
          }
          else{
            switch(argument[1]){
              case 'on':terminal.autoplay = true;break;
              case 'off':terminal.autoplay = false;break;
              default:terminal.autoplay = false;break;
            }
          }
          if(terminal.autoplay)terminal.audio.addEventListener("ended", autoplay, false);
          else terminal.audio.removeEventListener("ended", autoplay, false);
          return ([{msg:'Autoplay is turned '+(terminal.autoplay?'on':'off'),className:'jquery-console-message-value'}]);
        default:return $(terminal.musicHelp);
      }
      break;
    case 'javascript':
      if(argumentCount > 0)return ([{msg:'"'+command+'" does not take arguments',className:'jquery-console-message-error'}]);
      controller.continuedPrompt = true;
      return true;
      break;
    case 'help':
      if(argumentCount > 1)return ([{msg:'"'+command+'" does not take more than one argument',className:'jquery-console-message-error'}]);
      if(argumentCount > 0 && possible.indexOf(argument[0]) == -1){
        return ([{msg:'"'+command+'" does not recognize "'+argument+'" as a argument',className:'jquery-console-message-error'}]);
      }
      switch(argument[0]){
        case 'ashutosh':return $(terminal.ashutoshHelp);
        case 'music':return $(terminal.musicHelp);
        case 'javascript':return $(terminal.javascriptHelp);
        case 'exit':return $(terminal.exitHelp);
        case 'clear':return $(terminal.clearHelp);
        case 'help':return $(terminal.helpHelp);
        default: return $(terminal.help);
      }
      break;
    case 'exit':
      if(argumentCount > 0)return ([{msg:'"'+command+'" does not take arguments',className:'jquery-console-message-error'}]);
      window.open('','_self').close();
      break;
    case 'clear':
      if(argumentCount > 0)return ([{msg:'"'+command+'" does not take arguments',className:'jquery-console-message-error'}]);
      controller.clearScreen();
      break;
    case 'Javascript':
      argument = argument.split(/[\n\r]/g);
      argument = argument[argument.length - 1];
      if(argument === "exit"){
        controller.continuedPrompt = false;
        return [{msg:'Returning from javascript',className:'jquery-console-message-value'}];
      }
      try { 
        var ret = eval(argument);
        if (typeof ret != 'undefined') return [{msg:ret.toString(),className:'jquery-console-message-type'}];
        else return true; 
      } catch (e) { return [{msg:e.toString(),className:'jquery-console-message-error'}]; }
      break;
  }
};


// Welcome Message desplayed above the console at Startup
terminal.welcomeMessage = 
"====================================================\n"+
  "||\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t||\n"+
  "|| For all those computer geeks who have already\t||\n"+
  "|| risen above the materialistic world of GUI and ||\n"+
  "|| are in love with CLI, here is the TERMINAL to\t||\n"+
  "|| view almost all of my website in text-based\t\t||\n"+
  "|| user interface. You can use the console to view||\n"+
  "|| the different sections of the website and do a ||\n"+
  "|| lot of other stuff.\t\t\t\t\t\t\t\t\t\t\t\t\t\t||\n"+
  "||\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t||\n"+
  "|| Start with typing 'help' for the list of \t\t\t||\n"+
  "|| available commands.\t\t\t\t\t\t\t\t\t\t\t\t\t\t||\n"+
  "||\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t||\n"+
"====================================================\n";

// Prompt
terminal.promptLabel = 'root@ashutosh:~/website# '; 

// Validate input for parsing
terminal.commandValidate = function(line){
  if (line == "") return false;
  else return true;
};

// Main command parser
terminal.commandHandle = function(line, report){
  if(controller.continuedPrompt){
    return terminal.commandCallbacks("Javascript",line);
  }
  else line = line.toLowerCase();
  var splitArray = line.split(/\s+/);
  var inputCount = splitArray.length;
  var command = splitArray[0];
  var argument = splitArray.slice(1,inputCount);
  if(!terminal.commandList.hasOwnProperty(command)){
    return ([{msg:'"' + command + '" is not recognized as a command',className:'jquery-console-message-error'}]);
  }
  return terminal.commandCallbacks(command,argument,inputCount-1);
  //report($(terminal.about+terminal.profile+terminal.projects+terminal.contact+terminal.help+terminal.credits));
};

// Autocomplete suggestions
terminal.completeHandle = function(prefix){
  var commands = 
  ["ashutosh","ashutosh -about","ashutosh -profile","ashutosh -projects","ashutosh -contact","ashutosh -credits","ashutosh --facebook","ashutosh --linkedin","ashutosh --github",
  "music","music play","music pause","music stop","music volume","music next","music previous","music autoplay",
  "javascript",
  "help","help ashutosh","help javascript","help clear","help help",
  "exit",
  "clear"];
  var ret = [];
  if(prefix == "")return ret;
  prefix = prefix.toLowerCase();
  for (var i=0;i<commands.length;i++) {
    var command = commands[i];
    if (command.lastIndexOf(prefix,0) === 0) {
      ret.push(command.substring(prefix.length));
    }
  }
  return ret;
}

// charInserTrigger parameter in console
terminal.charInsertTrigger = function(keycode,line){
  return keycode>='A'.charCodeAt(0)&&keycode<='Z'.charCodeAt(0) || 
        keycode>='a'.charCodeAt(0)&&keycode<='z'.charCodeAt(0) || 
        keycode>='0'.charCodeAt(0)&&keycode<='9'.charCodeAt(0) ||
        keycode==' '.charCodeAt(0) || keycode=='-'.charCodeAt(0);
}

// Launch terminal console
$(document).ready(function(){
  (function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);
  if(jQuery.browser.mobile){
    $('body').append('<img style="width:8%;display:block;margin:0 auto;" src="images/desktop.png"><div style = "color:white;text-align:center;font-weight:bold;">This page is best viewed on desktop</div>');
    return;
  }
  terminal.audio = document.getElementsByTagName('audio')[0];
  terminal.audio.addEventListener("ended", autoplay, false);
  terminal.audioSource = document.getElementById('audioSource');
  terminal.audio.volume = 0.75;
  terminal.currentTrack = 0;
  terminal.autoplay = true;
  terminal.audioSource.src = "audio/"+terminal.tracks[terminal.currentTrack];
  terminal.audio.load();
  terminal.audioAvailable = (!!(terminal.audio.canPlayType && terminal.audio.canPlayType('audio/mpeg;').replace(/no/, '')));
  var container = $('<div class="console">');
  $('body').append(container);
    controller = container.console({
    autofocus: true,
    promptHistory: true,
    //historyPreserveColumn: true,
    welcomeMessage: terminal.welcomeMessage,
    promptLabel: terminal.promptLabel,
    continuedPromptLabel: 'Javascript>',
    cols: 20,
    commandValidate: terminal.commandValidate,
    commandHandle: terminal.commandHandle,
    completeHandle: terminal.completeHandle,
    //completeIssuer: terminal.completeIssuer,
    animateScroll: true,
    //charInsertTrigger: terminal.charInsertTrigger,
    //cancelHandle: terminal.cancelHandle,
    fadeOnReset: true
  });
});

function autoplay(){
  terminal.audio.pause();
  if(terminal.currentTrack == terminal.tracks.length - 1)terminal.currentTrack = 0;
  else terminal.currentTrack++;
  terminal.audioSource.src = "audio/"+terminal.tracks[terminal.currentTrack];
  terminal.audio.load();
  terminal.audio.play();
}