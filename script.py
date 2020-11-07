import os 
arr = ["aquatics","athletics","badminton","basketball","boxing","chess","cricket","football","handball","hockey","kabaddi","khokho","squash","tabletennis","volleyball","tennis","tkd","weightlifting"]

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

for i in arr:
   print("<mat-grid-tile><div class='logo'><div><img src='../../assets/icon/" + i + ".svg' height =50px width =50px routerLink='"+i+"'></div><div><p>"+i+"</p></div></div></mat-grid-tile>")