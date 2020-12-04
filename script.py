import os 
import sys
import pandas as pd
arr = ["aquatics","athletics","badminton","basketball","boxing","chess","cricket","football","handball","hockey","kabbadi","khokho","tennis","squash","tabletennis","tkd","volleyball","weightlifting"]
sports = ['Aquatics', 'Athletics', 'Badminton', 'Basketball', 'Boxing', 'Chess', 'Cricket', 'Football', 'Handball', 'Hockey', 'Kabaddi', 'Khokho', 'LawnTennis', 'Squash', 'TableTennis', 'Taekwondo', 'Volleyball', 'Weightlifting']
dict1 = {'Aquatics': 'aquatics', 'Athletics': 'athletics', 'Badminton': 'badminton', 'Basketball': 'basketball', 'Boxing': 'boxing', 'Chess': 'chess', 'Cricket': 'cricket', 'Football': 'football', 'Handball': 'handball', 'Hockey': 'hockey', 'Kabaddi': 'kabbadi', 'Khokho': 'khokho', 'LawnTennis': 'tennis', 'Squash': 'squash', 'TableTennis': 'tabletennis', 'Taekwondo': 'tkd', 'Volleyball': 'volleyball', 'Weightlifting': 'weightlifting'}

arr2=[" AquaticsComponent ",
" AthleticsComponent ",
" BadmintonComponent ",
" BasketballComponent ",
" BoxingComponent ",
" ChessComponent ",
" CricketComponent ",
" FootballComponent ",
" HandballComponent ",
" HockeyComponent ",
" KabbadiComponent ",
" KhokhoComponent ",
" TennisComponent ",
" SquashComponent ",
" TabletennisComponent ",
" TkdComponent ",
" VolleyballComponent ",
" WeightliftingComponent "]

dict2= {'Aquatics': ' AquaticsComponent ', 'Athletics': ' AthleticsComponent ', 'Badminton': ' BadmintonComponent ', 'Basketball': ' BasketballComponent ', 'Boxing': ' BoxingComponent ', 'Chess': ' ChessComponent ', 'Cricket': ' CricketComponent ', 'Football': ' FootballComponent ', 'Handball': ' HandballComponent ', 'Hockey': ' HockeyComponent ', 'Kabaddi': ' KabbadiComponent ', 'Khokho': ' KhokhoComponent ', 'LawnTennis': ' TennisComponent ', 'Squash': ' SquashComponent ', 'TableTennis': ' TabletennisComponent ', 'Taekwondo': ' TkdComponent ', 'Volleyball': ' VolleyballComponent ', 'Weightlifting': ' WeightliftingComponent '}
data = pd.read_excel("data.xlsx")

a1= """
<div class="home">
	<div class="navbar">
		
		<div class="links">
			<div class="l" routerLink='../../'>
				Home
			</div>
			<div class="l">
				Events
			</div>
			<div class="l" routerLink='../'>
				Team
			</div>
			<div class="l">
				Contacts
			</div>
			<div class="l">
				Feedback
			</div>
		</div>
	</div>
	<div class="text">
		<h2><b>"""

dict4= {'Aquatics': """ Club</b></h2>
		<h2>IIT BHU Varanasi</h2>
		<h1>"Swimming is a confusing sport sometimes you do it to win</h1>
		<h1>an sometimes you do it to stay alive"</h1>

	</div>
</div>""",
 'Athletics':""" Club</b></h2>
		<h2>IIT BHU Varanasi</h2>
		<h1>"An athlete must run with dreams in his head</h1>
		<h1>and hope in his heart "</h1>

	</div>
</div>""",
 'Badminton': """ Club</b></h2>
		<h2>IIT BHU Varanasi</h2>
		<h1>"Badminton is like ballet dancing, it requires a lot control,</h1>
		<h1> strength, and mind-play and measured movement"</h1>

	</div>
</div>""",
 'Basketball': """ Club</b></h2>
		<h2>IIT BHU Varanasi</h2>
		<h1>"Basketball is like photograhpy, if you dont focus, </h1>
		<h1>all you are left with is the negative"</h1>

	</div>
</div>""",
 'Boxing': """ Club</b></h2>
		<h2>IIT BHU Varanasi</h2>
		<h1>"There is more to boxing than hitting, </h1>
		<h1>there is not getting hit for example "</h1>

	</div>
</div>""",
 'Chess': """ Club</b></h2>
		<h2>IIT BHU Varanasi</h2>
		<h1>"Chess is a fairy tale of 1001 blunders, </h1>
		<h1>Without error there can be no brilliancy "</h1>

	</div>
</div>""",
 'Cricket': """ Club</b></h2>
		<h2>IIT BHU Varanasi</h2>
		<h1></h1>
		<h1></h1>

	</div>
</div>""",
 'Football': """ Club</b></h2>
		<h2>IIT BHU Varanasi</h2>
		<h1></h1>
		<h1></h1>

	</div>
</div>""",
 'Handball': """ Club</b></h2>
		<h2>IIT BHU Varanasi</h2>
		<h1></h1>
		<h1></h1>

	</div>
</div>""",
 'Hockey': """ Club</b></h2>
		<h2>IIT BHU Varanasi</h2>
		<h1>"A hockey stick in the right hands is like a brush  </h1>
		<h1>and the game is the painting"</h1>

	</div>
</div>""",
 'Kabaddi': """ Club</b></h2>
		<h2>IIT BHU Varanasi</h2>
		<h1>"Kabbadi defies physics ,once you touch the opponent</h1>
		<h1>the distance to the line increases"</h1>

	</div>
</div>""",
 'Khokho': """</b></h2>
		<h2></h2>
		<h1></h1>
		<h1></h1>

	</div>
</div>""" ,
 'LawnTennis': """ Club</b></h2>
		<h2>IIT BHU Varanasi</h2>
		<h1>"Tennis is a perfect combination of violent action </h1>
		<h1>taking place in an atmosphere of total tranquility"</h1>

	</div>
</div>""",
 'Squash': """ Club</b></h2>
		<h2>IIT BHU Varanasi</h2>
		<h1></h1>
		<h1></h1>

	</div>
</div>""",
 'TableTennis': """ Club</b></h2>
		<h2>IIT BHU Varanasi</h2>
		<h1>"To face a good opponent on the other end</h1>
		<h1>of the table is a privlege"</h1>

	</div>
</div>""",
 'Taekwondo': """ Club</b></h2>
		<h2>IIT BHU Varanasi</h2>
		<h1>"courtesy, integrity, perseverance, self-control and</h1>
		<h1>indomitable spirit ,without these taekwondo is just kicking"</h1>

	</div>
</div>""",
 'Volleyball': """ Club</b></h2>
		<h2>IIT BHU Varanasi</h2>
		<h1>"A good team can win a volleyball game when they are ahead, </h1>
		<h1>but only a great team can win when they are behind"</h1>

	</div>
</div>""",
 'Weightlifting': """ Club</b></h2>
		<h2>IIT BHU Varanasi</h2>
		<h1>"If you think lifting is dangerous, try being weak.</h1>
		<h1>Being weak is dangerous"</h1>

	</div>
</div>"""}


title ="""<div class="title">Captains and Vice-Captains</div>"""
icons = """<div>
	<div class='fa fa-twitter'></div>
	<div class='fa fa-facebook'></div>
	<div class='fa fa-instagram'></div>
</div>"""

css1 ="""
.home{
    background:url("../../assets/"""

css=""".jpg");
    height:700px;
    background-size: cover;
    position: relative;
}

.navbar{
    height:70px;
    position:relative;
    top:0px;
}
.img1{
    width: 400px;
    height: 400px;
    border-radius: 10%;
}
.links{
    float:right;
    position:relative;
    height:100%;
    width :40%;
    display: flex;
    align-items: center;
}

.text{
    position: relative ;
    top: 110px;
    left: 140px;
    height: 400px;
    width: 700px;
}
h2{
    font-size: 40px;
    line-height: 50px;
    color:white;
}
h1{
    color:white;
}

.l{
    width: 20%;
    height:100%;
    color:white;
    display: flex;
    align-items: center;
    justify-content:center;
    font-size: 16px;
    font-weight: 300;
}
.l:hover{
    color:green;
}

.l:focus{
    outline:0;
}

.fa {  
	width: 25px;
    padding: 10px;
	font-size: 25px;
	text-align: center;
	text-decoration: none;
	margin: 5px 2px;
	color: white;
	border-radius: 10%; 
			}

.fa-phone{
	background: green;
	font-size: 10px;
	width:10px;
}
p{
	font-size:24px;
}

.fa-phone{
	background: green;
	font-size: 10px;
	width:10px;
}
.fa-facebook {
			  background: #3B5998;
			}

.fa-twitter {
			  background: #55ACEE;
			}

.fa-instagram {
			  background: hotpink;
			}
img{
    border-radius: 50%;
    width: 200px;
    height: 200px;
    padding: 20px;
        }

.card{
	 width:300px;
  height:295px;
  border-radius: 25px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.07), 
                0 2px 4px rgba(0,0,0,0.07), 
                0 4px 8px rgba(0,0,0,0.07), 
                0 8px 16px rgba(0,0,0,0.07),
                0 16px 32px rgba(0,0,0,0.07), 
                0 32px 64px rgba(0,0,0,0.07);
	display: flex;
    align-items: center;
    justify-content:center;
    flex-direction: column;
}

.cont{
	display: flex;
    align-items: center;
    justify-content:center;
    flex-direction: row;
}
.no{
	font-size:24px;
}

.title{
	height:70px;
	width:100%;
	font-size:20px;
	justify-content:center;
    font-size:25px;
    text-transform: uppercase;
        font-weight: 900;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content:center;
}
"""

for sport in sports:
	sys.stdout = open("./src/app/"+dict1[sport]+"/"+dict1[sport]+".component.html","w")
	df = data[data.Sport == sport]
	n = len(df)
	if n > 3:
		n =2
	if sport == "Khokho":
		print(a1+dict4[sport])
	else:
		print(a1+sport+dict4[sport])
	print(title)
	print("<mat-grid-list cols="+str(n)+" rowHeight='450px'>")
	for index, i in df.iterrows():
		path=None
		if i["Position"] == "Captain (M)" or i["Position"] == "Captain (W)":
			path = "captain/"+i["Sport"]+i["Position"][-3:]+".jpg'"
		if i["Position"] == "Vice Captain (M)" or i["Position"] == "Vice Captain (W)":
			path = "vice_captain/"+i["Sport"]+i["Position"][-3:]+".jpg'"
		print("<mat-grid-tile>")
		print("<div class='card'>")
		print("<div><img alt='img' src='../../assets/"+path+"></div>")
		print("<div class='name'><p>"+i["Name of position holder"]+"</p></div>")
		print("<div class='posi'><p>"+i["Position"]+"</p></div>")
		print("<div class='name'><p><i class='fa fa-phone'></i>+91 "+str(i["Contact no."])+"</p></div>")
		print(icons)
		print("</div>")
		print("</mat-grid-tile>\n")
	print("</mat-grid-list>")
	print("""<div class="title">Gallery</div>""")
	print("""<ng-image-slider [images]="imageObject" #nav></ng-image-slider>""")

for sport in sports:
	sys.stdout = open("./src/app/"+dict1[sport]+"/"+dict1[sport]+".component.scss","w")
	print(css1+dict1[sport]+"/bg"+dict1[sport]+css)

ts = """import { Component, OnInit } from '@angular/core';

@Component({
"""
for sport in sports:
	sys.stdout = open("./src/app/"+dict1[sport]+"/"+dict1[sport]+".component.ts","w")
	files = os.listdir("./src/assets/"+dict1[sport])
	files.remove("bg"+dict1[sport]+".jpg")
	print(ts)
	print("""selector: 'app-"""+dict1[sport]+"',")
	print("""templateUrl: './"""+dict1[sport]+".component.html',")
	print("""styleUrls: ['./"""+dict1[sport]+".component.scss']")
	print("})\n\n")
	print("export class " + dict2[sport] + " implements OnInit {")
	print("  imageObject: Array<object> = [")
	for i in files:
		print("{\nimage: '../../assets/"+dict1[sport]+'/'+str(i)+"',")
		print("thumbImage: '../../assets/"+dict1[sport]+'/'+str(i)+"',")
		print("""alt: 'image',
        title: ' '
    },""")
	print("""];

  constructor() { }

  ngOnInit(): void {
  }

}""")
