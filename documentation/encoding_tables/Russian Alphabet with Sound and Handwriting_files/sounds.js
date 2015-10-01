var lPlaySound=1;
function PlaySound(cLink) 
{
//	alert(cLink);
	if(lPlaySound==1)
		document.getElementById("sndspan").innerHTML="<embed src='"+cLink+"' hidden=true autostart=true loop=false>";
}
function SoundLink(cLink)
{
	if(lPlaySound==1)
		return void(0);
	else
		window.open(cLink);
}

function SoundDownload(cLink)
{
	window.open(cLink);
}



var soundEmbed = null;

function IsHtml5SoundSupported() {
    var a = document.createElement('audio');
    return !!(a.canPlayType && a.canPlayType('audio/mpeg;').replace(/no/, ''));
}


function PlaySound2(SoundFile) {

    if (IsHtml5SoundSupported())
        PlaySoundHtml5(SoundFile);
    else {

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent))
            PlaySoundMobile(SoundFile);
        else
            PlaySoundWeb(SoundFile);
    }
    
}
function PlaySoundMobile(SoundFile) {
        $(".sndaudio").unbind()
        $(".sndaudio").remove();
        $(".sndembed").unbind()
        $(".sndembed").remove();

        var sound = $("<audio class='sndaudio' autoplay='autoplay'><source src='" + SoundFile + "' type='audio/mpeg' /><embed class='sndembed' height='50' width='100' src='" + SoundFile + "' hidden='true' autostart='true' display='none'/></audio>");
        $('body').append(sound);
}

function PlaySoundWeb(SoundFile) {
    if (!soundEmbed) {
        soundEmbed = document.createElement("embed");
        soundEmbed.setAttribute("src", SoundFile);
        soundEmbed.setAttribute("hidden", true);
        soundEmbed.setAttribute("autostart", true);
    }
    else {
        document.body.removeChild(soundEmbed);
        soundEmbed.removed = true;
        soundEmbed = null;
        soundEmbed = document.createElement("embed");
        soundEmbed.setAttribute("src", SoundFile);
        soundEmbed.setAttribute("hidden", true);
        soundEmbed.setAttribute("autostart", true);
    }
    soundEmbed.removed = false;
    document.body.appendChild(soundEmbed);
}
function PlaySoundHtml5(SoundFile) {
    var snd = new Audio(SoundFile);
    snd.load();
    snd.play();
}
