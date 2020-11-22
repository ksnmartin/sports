import os 
import sys
import pandas as pd
arr = ["aquatics","athletics","badminton","basketball","boxing","chess","cricket","football","handball","hockey","kabbadi","khokho","tennis","squash","tabletennis","tkd","volleyball","weightlifting"]
sports = ['Aquatics', 'Athletics', 'Badminton', 'Basketball', 'Boxing', 'Chess', 'Cricket', 'Football', 'Handball', 'Hockey', 'Kabaddi', 'Khokho', 'LawnTennis', 'Squash', 'TableTennis', 'Taekwondo', 'Vollyeball', 'Weightlifting']
dict1 = {'Aquatics': 'aquatics', 'Athletics': 'athletics', 'Badminton': 'badminton', 'Basketball': 'basketball', 'Boxing': 'boxing', 'Chess': 'chess', 'Cricket': 'cricket', 'Football': 'football', 'Handball': 'handball', 'Hockey': 'hockey', 'Kabaddi': 'kabbadi', 'Khokho': 'khokho', 'LawnTennis': 'tennis', 'Squash': 'squash', 'TableTennis': 'tabletennis', 'Taekwondo': 'tkd', 'Vollyeball': 'volleyball', 'Weightlifting': 'weightlifting'}

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
" SquashComponent ",
" TabletennisComponent ",
" VolleyballComponent ",
" TennisComponent ",
" TkdComponent ",
" WeightliftingComponent "]

data = pd.read_excel("data.xlsx")

a1= """
<div class="home">
	<div class="navbar">
		
		<div class="links">
			<div class="l">
				Sports
			</div>
			<div class="l">
				Events
			</div>
			<div class="l">
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

a2=""" Club</b></h2>
		<h2>IIT BHU Varanasi</h2>
		<h1>"There is more to boxing than hitting, </h1>
		<h1>there is not getting hit for example "</h1>

	</div>
</div>"""

title ="""<div class="title">Captains and Vice-Captains</div>"""
icons = """<div>
	<div class='fa fa-twitter'></div>
	<div class='fa fa-facebook'></div>
	<div class='fa fa-instagram'></div>
</div>"""

css ="""
.home{
    background:url("../../assets/boxing/bg.jpeg");
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

.fa-mobile-phone{
    font-size:10px;
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
	print(a1+sport+a2)
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
		print("<div class='name'><p>+91 "+str(i["Contact no."])+"</p></div>")
		print(icons)
		print("</div>")
		print("</mat-grid-tile>\n")
	print("</mat-grid-list>")
	print("""<div class="title">Gallery</div>
	<mat-grid-list cols=2 rowHeight='420px'>""")
	for i in range(1,11):
		print("<mat-grid-tile>")
		print("""<img class="img1" src="../../assets/boxing/"""+str(i)+""".jpeg">""")
		print("</mat-grid-tile>")
	print("</mat-grid-list>")

for sport in sports:
	sys.stdout = open("./src/app/"+dict1[sport]+"/"+dict1[sport]+".component.scss","w")
	print(css)