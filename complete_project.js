var fs=require('fs');
//var fileName = './JSONnew.js';
//var file = require(fileName);
var country;
var rowNum=0;
var requiredArray=[];
var indexAll=[];
var barGraphAr=[];
var lineGraphAr=[];
var txtJSON1;
var txtJSON2;
var Netherlands={
  salt: 0,
  country_name:"",
  sugar: 0,
  fats: 0,
  carbo: 0,
  pro: 0,
};
var UK={
  country_name:"",
  salt: 0,
  sugar: 0,
  fats: 0,
  carbo: 0,
  pro: 0,
};
var France={
  country_name:"",
  salt: 0,
  sugar: 0,
  fats: 0,
  carbo: 0,
  pro: 0,
};
var Germany={
  country_name:"",
  salt: 0,
  sugar: 0,
  fats: 0,
  carbo: 0,
  pro: 0,
};
var Spain={
  country_name:"",
  salt: 0,
  sugar: 0,
  fats: 0,
  carbo: 0,
  pro: 0,
};
var Canada={
  country_name:"",
  salt: 0,
  sugar: 0,

};
var USA={
  country_name:"",
  salt: 0,
  sugar: 0,
};
var Australia={
  country_name:"",
  salt: 0,
  sugar: 0,
};
var South_Africa={
  country_name:"",
  salt: 0,
  sugar: 0,
};
//salt 116 ,sugar 102,fat 65, protein 112,carbohydrate 101

var Denmark={
  country_name:"",
  fats: 0,
  carbo: 0,
  pro: 0,
};
var Sweden={
   country_name:"",
   fats: 0,
  carbo: 0,
  pro: 0,
};
var Norway={
  country_name:"",  fats: 0,
  carbo: 0,
  pro: 0,
};
var Belgium={
  country_name:"",
  fats: 0,
  carbo: 0,
  pro: 0,
};
var Switzerland={
  country_name:"",
  fats: 0,
  carbo: 0,
  pro: 0,
};
var Portugal={
  country_name:"",
  fats: 0,
  carbo: 0,
  pro: 0,
};
var Greece={
  country_name:"",
  fats: 0,
  carbo: 0,
  pro: 0,
};
var Italy={
  country_name:"",
  fats: 0,
  carbo: 0,
  pro: 0,
};
var Croatia={
  country_name:"",
  fats: 0,
  carbo: 0,
  pro: 0,
};
var Albania={
  country_name:"",
  fats: 0,
  carbo: 0,
  pro: 0,
};
var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('../FoodFacts.csv')
});
lineReader.on('line', function (str) {
  row=str.split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
  var headings;
  if(rowNum==0)
  {
    //headings= str.split(",");
    headings = row;
    rowNum++;
    //console.log("Headings--------------------------------- :"+headings);
    for(var i=0; i<headings.length; i++){
      if(headings[i]=="countries_en" || headings[i]=="salt_100g" || headings[i]=="sugars_100g" || headings[i]=="fat_100g" || headings[i]=="proteins_100g" || headings[i]=="carbohydrates_100g")
      {
        console.log("Index  :"+i);
        indexAll.push(i);
        requiredArray.push(headings[i]);
        //console.log("Index  :"+requiredArray[i]);
      }
    }

    console.log("Columns "+ requiredArray);

  }
  else
  {

    country= row[indexAll[0]];

    var fat_index= indexAll[1];
    var carbo_index= indexAll[2]
    var sugar_index= indexAll[3];
    var pro_index= indexAll[4];
    var salt_index= indexAll[5];

    /*console.log("fats index: "+fat_index);
    console.log("sugar index: "+sugar_index);*/

    switch (country)
    {

case 'France':
      console.log("France");
      var salt = row[salt_index];
      var sugar = row[sugar_index];
      var fats = row[fat_index];
      var pro = row[pro_index];
      var carbo = row[carbo_index];

      // for salt
      var temp_salt= France.salt;
      if(salt=="")
      {
        salt=0;
      }
      salt= parseFloat(salt)+parseFloat(temp_salt);
      salt.toString();

      //For sugar
      var temp_sugar= France.sugar;
      if(sugar=="")
      {
        sugar=0;
      }
      sugar= parseFloat(sugar)+parseFloat(temp_sugar);
      sugar.toString();

      // for proteins
      var temp_pro= France.pro;
      if(pro=="")
      {
        pro=0;
      }
      pro= parseFloat(pro)+parseFloat(temp_pro);
      pro.toString();

      //for FATS
      var temp_fats= France.fats;
      if(fats=="")
      {
        fats=0;
      }
      fats= parseFloat(fats)+parseFloat(temp_fats);
      fats.toString();

      //For Carbohydrates
      var temp_carbo= France.carbo;
      if(carbo=="")
      {
        carbo=0;
      }
      carbo= parseFloat(carbo)+parseFloat(temp_carbo);
      carbo.toString();
      France.salt=salt;
      France.sugar=sugar;
      France.fats=fats;
      France.pro=pro;
      France.carbo=carbo;
      France.country_name="France";
    //  console.log(France.country_name+""+France.salt+" "+France.sugar+" "+France.fats+" "+France.pro+" "+France.carbo);


      break;

     case 'United Kingdom':
               UK.country_name="United Kingdom";
               if(row[salt_index]!="")
               UK.salt=parseFloat(UK.salt)+parseFloat(row[salt_index]);
               if(row[sugar_index]!="")
               UK.sugar=parseFloat(UK.sugar)+parseFloat(row[sugar_index]);
               if(row[fat_index]!="")
               UK.fats=parseFloat(UK.fats)+parseFloat(row[fat_index]);
               if(row[pro_index]!="")
               UK.pro=parseFloat(UK.pro)+parseFloat(row[pro_index]);
               if(row[carbo_index]!="")
               UK.carbo=parseFloat(UK.carbo)+parseFloat(row[carbo_index]);

               console.log(UK);
               break;

      case 'Germany'                 :
      console.log("Germany");
      var salt = row[salt_index];
      var sugar = row[sugar_index];
      var fats = row[fat_index];
      var pro = row[pro_index];
      var carbo = row[carbo_index];

      // for salt
      var temp_salt= Germany.salt;

      //console.log("SALT France.salt     "+temp_salt);

      //console.log("new Salt value    "+salt);
      if(salt=="")
      {
        salt=0;
      }
      salt= parseFloat(salt)+parseFloat(temp_salt);
      salt.toString();
      //console.log("NEWWWWWWWWWW  after parsing Salt    "+salt);


      //for sugar
      var temp_sugar= Germany.sugar;
      // console.log("Sugar France.sugar     "+temp_sugar);

      //console.log("new sugar value    "+sugar);
      if(sugar=="")
      {
        sugar=0;
      }
      sugar= parseFloat(sugar)+parseFloat(temp_sugar);
      sugar.toString();
      // console.log("NEWWWWWWWWWW  after parsing sugar    "+sugar);

      // for proteins
      var temp_pro= Germany.pro;
      //console.log("Protiens France.Protiens     "+temp_pro);

      //console.log("new Proteins value    "+pro);
      if(pro=="")
      {
        pro=0;
      }
      pro= parseFloat(pro)+parseFloat(temp_pro);
      pro.toString();
      //console.log("NEWWWWWWWWWW  after parsing Proteins    "+pro);

      //for Fats
      var temp_fats= Germany.fats;
      // console.log("Fats France.Fats     "+temp_fats);

      //console.log("new fats value    "+fats);
      if(fats=="")
      {
        fats=0;
      }
      fats= parseFloat(fats)+parseFloat(temp_fats);
      fats.toString();
      //console.log("NEWWWWWWWWWW  after parsing fats    "+fats);

      //For Carbohydrates
      var temp_carbo= Germany.carbo;
      //console.log("Carbohydrates UK.carbo     "+temp_carbo);

      //console.log("new Carbohydrates value    "+carbo);
      if(carbo=="")
      {
        carbo=0;
      }
      carbo= parseFloat(carbo)+parseFloat(temp_carbo);
      carbo.toString();
      // console.log("NEWWWWWWWWWW  after parsing Carbohydrates    "+carbo);

      //Storing values of all five things in UK Object.
      Germany.salt=salt;
      Germany.sugar=sugar;
      Germany.fats=fats;
      Germany.pro=pro;
      Germany.carbo=carbo;
      Germany.country_name="Germany";
      //console.log(Germany.salt+" "+Germany.sugar+" "+Germany.fats+" "+Germany.pro+" "+Germany.carbo);
      //   UK=  {salt:UK.salt,sugar:UK.sugar,fats:UK.fats,Protiens:UK.pro,Carbohydrates:UK.carbo};
      //    console.log(UK);

      break;


case 'Netherlands':
      console.log("Netherlands");
      var salt = row[salt_index];
      var sugar = row[sugar_index];
      var fats = row[fat_index];
      var pro = row[pro_index];
      var carbo = row[carbo_index];

      // for salt
      var temp_salt= Netherlands.salt;

      //console.log("SALT France.salt     "+temp_salt);

      //console.log("new Salt value    "+salt);
      if(salt=="")
      {
        salt=0;
      }
      salt= parseFloat(salt)+parseFloat(temp_salt);
      salt.toString();
      //console.log("NEWWWWWWWWWW  after parsing Salt    "+salt);


      //for sugar
      var temp_sugar= Netherlands.sugar;
      // console.log("Sugar France.sugar     "+temp_sugar);

      //console.log("new sugar value    "+sugar);
      if(sugar=="")
      {
        sugar=0;
      }
      sugar= parseFloat(sugar)+parseFloat(temp_sugar);
      sugar.toString();
      // console.log("NEWWWWWWWWWW  after parsing sugar    "+sugar);


      // for proteins
      var temp_pro= Netherlands.pro;
      //console.log("Protiens France.Protiens     "+temp_pro);

      //console.log("new Proteins value    "+pro);
      if(pro=="")
      {
        pro=0;
      }
      pro= parseFloat(pro)+parseFloat(temp_pro);
      pro.toString();
      //console.log("NEWWWWWWWWWW  after parsing Proteins    "+pro);

      //for FATS
      var temp_fats= Netherlands.fats;
      // console.log("Fats France.Fats     "+temp_fats);

      //console.log("new fats value    "+fats);
      if(fats=="")
      {
        fats=0;
      }
      fats= parseFloat(fats)+parseFloat(temp_fats);
      fats.toString();
      //console.log("NEWWWWWWWWWW  after parsing fats    "+fats);

      //For Carbohydrates
      var temp_carbo= Netherlands.carbo;
      //console.log("Carbohydrates UK.carbo     "+temp_carbo);

      //console.log("new Carbohydrates value    "+carbo);
      if(carbo=="")
      {
        carbo=0;
      }
      carbo= parseFloat(carbo)+parseFloat(temp_carbo);
      carbo.toString();
      // console.log("NEWWWWWWWWWW  after parsing Carbohydrates    "+carbo);

      //Storing values of all five things in UK Object.
      Netherlands.salt=salt;
      Netherlands.sugar=sugar;
      Netherlands.fats=fats;
      Netherlands.pro=pro;
      Netherlands.carbo=carbo;
      Netherlands.country_name="Netherlands";
      //console.log(Netherlands.country_name+""+Netherlands.salt+" "+Netherlands.sugar+" "+Netherlands.fats+" "+Netherlands.pro+" "+Netherlands.carbo);
      //   UK=  {salt:UK.salt,sugar:UK.sugar,fats:UK.fats,Protiens:UK.pro,Carbohydrates:UK.carbo};
      //    console.log(UK);

      break;

      case 'Spain':

      console.log("Spain");
      var salt = row[salt_index];
      var sugar = row[sugar_index];
      var fats = row[fat_index];
      var pro = row[pro_index];
      var carbo = row[carbo_index];

      // for salt
      var temp_salt= Spain.salt;

      //console.log("SALT France.salt     "+temp_salt);

      //console.log("new Salt value    "+salt);
      if(salt=="")
      {
        salt=0;
      }
      salt= parseFloat(salt)+parseFloat(temp_salt);
      salt.toString();
      //console.log("NEWWWWWWWWWW  after parsing Salt    "+salt);


      //for sugar
      var temp_sugar= Spain.sugar;
      // console.log("Sugar France.sugar     "+temp_sugar);

      //console.log("new sugar value    "+sugar);
      if(sugar=="")
      {
        sugar=0;
      }
      sugar= parseFloat(sugar)+parseFloat(temp_sugar);
      sugar.toString();
      // console.log("NEWWWWWWWWWW  after parsing sugar    "+sugar);


      // for proteins
      var temp_pro= Spain.pro;
      //console.log("Protiens France.Protiens     "+temp_pro);

      //console.log("new Proteins value    "+pro);
      if(pro=="")
      {
        pro=0;
      }
      pro= parseFloat(pro)+parseFloat(temp_pro);
      pro.toString();
      //console.log("NEWWWWWWWWWW  after parsing Proteins    "+pro);

      //for FATS
      var temp_fats=Spain.fats;
      // console.log("Fats France.Fats     "+temp_fats);

      //console.log("new fats value    "+fats);
      if(fats=="")
      {
        fats=0;
      }
      fats= parseFloat(fats)+parseFloat(temp_fats);
      fats.toString();
      //console.log("NEWWWWWWWWWW  after parsing fats    "+fats);

      //For Carbohydrates
      var temp_carbo= Spain.carbo;
      //console.log("Carbohydrates UK.carbo     "+temp_carbo);

      //console.log("new Carbohydrates value    "+carbo);
      if(carbo=="")
      {
        carbo=0;
      }
      carbo= parseFloat(carbo)+parseFloat(temp_carbo);
      carbo.toString();
      // console.log("NEWWWWWWWWWW  after parsing Carbohydrates    "+carbo);

      //Storing values of all five things in UK Object.
      Spain.salt=salt;
      Spain.sugar=sugar;
      Spain.fats=fats;
      Spain.pro=pro;
      Spain.carbo=carbo;
      Spain.country_name="spain";
      //   UK=  {salt:UK.salt,sugar:UK.sugar,fats:UK.fats,Protiens:UK.pro,Carbohydrates:UK.carbo};
      //console.log(Spain.salt+" "+Spain.sugar+" "+Spain.fats+" "+Spain.pro+" "+Spain.carbo);
      //    console.log(UK);
      break;

case 'USA':
      console.log("USA");
      var salt = row[salt_index];
      var sugar = row[sugar_index];
      var fats = row[fat_index];
      var pro = row[pro_index];
      var carbo = row[carbo_index];

      // for salt
      var temp_salt= USA.salt;

      //console.log("SALT France.salt     "+temp_salt);

      //console.log("new Salt value    "+salt);
      if(salt=="")
      {
        salt=0;
      }
      salt= parseFloat(salt)+parseFloat(temp_salt);
      salt.toString();
      //console.log("NEWWWWWWWWWW  after parsing Salt    "+salt);


      //for sugar
      var temp_sugar= USA.sugar;
      // console.log("Sugar France.sugar     "+temp_sugar);

      //console.log("new sugar value    "+sugar);
      if(sugar=="")
      {
        sugar=0;
      }
      sugar= parseFloat(sugar)+parseFloat(temp_sugar);
      sugar.toString();
      // console.log("NEWWWWWWWWWW  after parsing sugar    "+sugar);

      USA.salt=salt;
      USA.sugar=sugar;
      USA.country_name="USA";
      //console.log(USA.salt+" "+USA.sugar+" ");

case 'Australia':
          console.log("Australia");
          var salt = row[salt_index];
          var sugar = row[sugar_index];

          // for salt
          var temp_salt= Australia.salt;

          //console.log("SALT France.salt     "+temp_salt);

          //console.log("new Salt value    "+salt);
          if(salt=="")
          {
            salt=0;
          }
          salt= parseFloat(salt)+parseFloat(temp_salt);
          salt.toString();
          //console.log("NEWWWWWWWWWW  after parsing Salt    "+salt);


          //for sugar
          var temp_sugar= Australia.sugar;
          if(sugar=="")
          {
            sugar=0;
          }
          sugar= parseFloat(sugar)+parseFloat(temp_sugar);
          sugar.toString();

          Australia.salt=salt;
          Australia.sugar=sugar;
          Australia.country_name="Australia";
          //console.log(Australia.salt+" "+Australia.sugar+" ");
          break;

case 'South Africa':
              console.log("South_Africa");
              var salt = row[salt_index];
              var sugar = row[sugar_index];
              // for salt
              var temp_salt= South_Africa.salt;
              if(salt=="")
              {
                salt=0;
              }
              salt= parseFloat(salt)+parseFloat(temp_salt);
              salt.toString();

              //for sugar
              var temp_sugar= South_Africa.sugar;
              if(sugar=="")
              {
                sugar=0;
              }
              sugar= parseFloat(sugar)+parseFloat(temp_sugar);
              sugar.toString();
              South_Africa.salt=salt;
              South_Africa.sugar=sugar;
              South_Africa.country_name="South Africa";
              //console.log(South_Africa.salt+" "+South_Africa.sugar+" ");
              break;
  case 'Canada':
              console.log("Canada");
              var salt = row[salt_index];
              var sugar = row[sugar_index];
              // for salt
              var temp_salt= Canada.salt;
              if(salt=="")
              {
                salt=0;
              }
              salt= parseFloat(salt)+parseFloat(temp_salt);
              salt.toString();

              //for sugar
              var temp_sugar=Canada.sugar;
              if(sugar=="")
              {
                sugar=0;
              }
              sugar= parseFloat(sugar)+parseFloat(temp_sugar);
              sugar.toString();
              Canada.salt=salt;
              Canada.sugar=sugar;
              Canada.country_name="Canada";
              //console.log(South_Africa.salt+" "+South_Africa.sugar+" ");
              break;
  case 'Denmark':
              console.log("Denmark");
              var fats = row[fat_index];
              var pro = row[pro_index];
              var carbo=row[carbo_index];
              // for salt
              var temp_fats= Denmark.fats;
              if(fats=="")
              {
                fats=0;
              }
              fats= parseFloat(fats)+parseFloat(temp_fats);
              fats.toString();

              //for Proteins
              var temp_pro= Denmark.pro;
              if(pro=="")
              {
                pro=0;
              }
              pro= parseFloat(pro)+parseFloat(temp_pro);
              pro.toString();

              //for Carbohydrates
              var temp_carbo= Denmark.carbo;
              if(carbo=="")
              {
                carbo=0;
              }
              carbo= parseFloat(carbo)+parseFloat(temp_carbo);
              carbo.toString();
              Denmark.fats=fats;
              Denmark.pro=pro;
              Denmark.carbo=carbo;
              Denmark.country_name="Denmark";

              //console.log(Denmark.fats+" "+Denmark.pro+" "+Denmark.carbo);
              break;
    case 'Sweden':
              console.log("Sweden");
              var fats = row[fat_index];
              var pro = row[pro_index];
              var carbo=row[carbo_index];
              // for salt
              var temp_fats= Sweden.fats;
              if(fats=="")
              {
                fats=0;
              }
              fats= parseFloat(fats)+parseFloat(temp_fats);
              fats.toString();

                        //for Proteins
              var temp_pro= Sweden.pro;
              if(pro=="")
              {
                pro=0;
              }
              pro= parseFloat(pro)+parseFloat(temp_pro);
              pro.toString();

              //for Carbohydrates
              var temp_carbo= Sweden.carbo;
              if(carbo=="")
              {
                carbo=0;
              }
              carbo= parseFloat(carbo)+parseFloat(temp_carbo);
              carbo.toString();
              Sweden.fats=fats;
              Sweden.pro=pro;
              Sweden.carbo=carbo;
              Sweden.country_name="Sweden";
              //console.log(Sweden.fats+" "+Sweden.pro+" "+Sweden.carbo);
              break;

  case 'Norway':
              console.log("Norway");
              var fats = row[fat_index];
              var pro = row[pro_index];
              var carbo=row[carbo_index];
              // for salt
              var temp_fats= Norway.fats;
              if(fats=="")
              {
                fats=0;
              }
              fats= parseFloat(fats)+parseFloat(temp_fats);
              fats.toString();

              //for Proteins
              var temp_pro= Norway.pro;
              if(pro=="")
              {
                pro=0;
              }
              pro= parseFloat(pro)+parseFloat(temp_pro);
              pro.toString();

              //for Carbohydrates
              var temp_carbo= Norway.carbo;
              if(carbo=="")
              {
                carbo=0;
              }
              carbo= parseFloat(carbo)+parseFloat(temp_carbo);
              carbo.toString();
              Norway.fats=fats;
              Norway.pro=pro;
              Norway.carbo=carbo;
              Norway.country_name="Norway";
              //console.log(Norway.fats+" "+Norway.pro+" "+Norway.carbo);
              break;
  case 'Belgium':
              console.log("Belgium");
              var fats = row[fat_index];
              var pro = row[pro_index];
              var carbo=row[carbo_index];
              // for salt
              var temp_fats= Belgium.fats;
              if(fats=="")
              {
                fats=0;
              }
              fats= parseFloat(fats)+parseFloat(temp_fats);
              fats.toString();

              //for Proteins
              var temp_pro= Belgium.pro;
              if(pro=="")
              {
                pro=0;
              }
              pro= parseFloat(pro)+parseFloat(temp_pro);
              pro.toString();

              //for Carbohydrates
              var temp_carbo= Belgium.carbo;
              if(carbo=="")
              {
                carbo=0;
              }
              carbo= parseFloat(carbo)+parseFloat(temp_carbo);
              carbo.toString();
              Belgium.fats=fats;
              Belgium.pro=pro;
              Belgium.carbo=carbo;
              Belgium.country_name="Norway";
              //console.log(Belgium.fats+" "+Belgium.pro+" "+Belgium.carbo);
              break;
  case 'Switzerland':
              console.log("Switzerland");
              var fats = row[fat_index];
              var pro = row[pro_index];
              var carbo=row[carbo_index];
              // for salt
              var temp_fats= Switzerland.fats;
              if(fats=="")
              {
                fats=0;
              }
              fats= parseFloat(fats)+parseFloat(temp_fats);
              fats.toString();

              //for Proteins
              var temp_pro= Switzerland.pro;
              if(pro=="")
              {
                pro=0;
              }
              pro= parseFloat(pro)+parseFloat(temp_pro);
              pro.toString();

              //for Carbohydrates
              var temp_carbo= Switzerland.carbo;
              if(carbo=="")
              {
                carbo=0;
              }
              carbo= parseFloat(carbo)+parseFloat(temp_carbo);
              carbo.toString();
              Switzerland.fats=fats;
              Switzerland.pro=pro;
              Switzerland.carbo=carbo;
              Switzerland.country_name="Norway";
              //console.log(Switzerland.fats+" "+Switzerland.pro+" "+Switzerland.carbo);
              break;
  case 'Portugal':
              console.log("Portugal");
              var fats = row[fat_index];
              var pro = row[pro_index];
              var carbo=row[carbo_index];
              // for salt
              var temp_fats= Portugal.fats;
              if(fats=="")
              {
                fats=0;
              }
              fats= parseFloat(fats)+parseFloat(temp_fats);
              fats.toString();

              //for Proteins
              var temp_pro= Portugal.pro;
              if(pro=="")
              {
                pro=0;
              }
              pro= parseFloat(pro)+parseFloat(temp_pro);
              pro.toString();

              //for Carbohydrates
              var temp_carbo= Portugal.carbo;
              if(carbo=="")
              {
                carbo=0;
              }
              carbo= parseFloat(carbo)+parseFloat(temp_carbo);
              carbo.toString();
              Portugal.fats=fats;
              Portugal.pro=pro;
              Portugal.carbo=carbo;
              Portugal.country_name="Portugal";
              //console.log(Portugal.fats+" "+Portugal.pro+" "+Portugal.carbo);
              break;
  case 'Greece':
              console.log("Greece");
              var fats = row[fat_index];
              var pro = row[pro_index];
              var carbo=row[carbo_index];
              // for salt
              var temp_fats= Greece.fats;
              if(fats=="")
              {
                fats=0;
              }
              fats= parseFloat(fats)+parseFloat(temp_fats);
              fats.toString();

              //for Proteins
              var temp_pro= Greece.pro;
              if(pro=="")
              {
                pro=0;
              }
              pro= parseFloat(pro)+parseFloat(temp_pro);
              pro.toString();

              //for Carbohydrates
              var temp_carbo= Greece.carbo;
              if(carbo=="")
              {
                carbo=0;
              }
              carbo= parseFloat(carbo)+parseFloat(temp_carbo);
              carbo.toString();
              Greece.fats=fats;
              Greece.pro=pro;
              Greece.carbo=carbo;
              Greece.country_name="Greece";
              //console.log(Greece.fats+" "+Greece.pro+" "+Greece.carbo);
              break;
  case 'Italy':
              console.log("Italy");
              var fats = row[fat_index];
              var pro = row[pro_index];
              var carbo=row[carbo_index];
              // for salt
              var temp_fats= Italy.fats;
              if(fats=="")
              {
                fats=0;
              }
              fats= parseFloat(fats)+parseFloat(temp_fats);
              fats.toString();

              //for Proteins
              var temp_pro= Italy.pro;
              if(pro=="")
              {
                pro=0;
              }
              pro= parseFloat(pro)+parseFloat(temp_pro);
              pro.toString();

              //for Carbohydrates
              var temp_carbo= Italy.carbo;
              if(carbo=="")
              {
                carbo=0;
              }
              carbo= parseFloat(carbo)+parseFloat(temp_carbo);
              carbo.toString();
              Italy.fats=fats;
              Italy.pro=pro;
              Italy.carbo=carbo;
              Italy.country_name="Italy";
              //console.log(Italy.fats+" "+Italy.pro+" "+Italy.carbo);
              break;
  case 'Croatia':
              console.log("Croatia");
              var fats = row[fat_index];
              var pro = row[pro_index];
              var carbo=row[carbo_index];
              // for salt
              var temp_fats= Croatia.fats;
              if(fats=="")
              {
                fats=0;
              }
              fats= parseFloat(fats)+parseFloat(temp_fats);
              fats.toString();

              //for Proteins
              var temp_pro=Croatia.pro;
              if(pro=="")
              {
                pro=0;
              }
              pro= parseFloat(pro)+parseFloat(temp_pro);
              pro.toString();

              //for Carbohydrates
              var temp_carbo=Croatia.carbo;
              if(carbo=="")
              {
                carbo=0;
              }
              carbo= parseFloat(carbo)+parseFloat(temp_carbo);
              carbo.toString();
              Croatia.fats=fats;
              Croatia.pro=pro;
              Croatia.carbo=carbo;
              Croatia.country_name="Croatia";
              //console.log(Croatia.fats+" "+Croatia.pro+" "+Croatia.carbo);
              break;
  case 'Albania':
              console.log("Albania");
              var fats = row[fat_index];
              var pro = row[pro_index];
              var carbo=row[carbo_index];
              // for salt
              var temp_fats=Albania.fats;
              if(fats=="")
              {
                fats=0;
              }
              fats= parseFloat(fats)+parseFloat(temp_fats);
              fats.toString();

              //for Proteins
              var temp_pro=Albania.pro;
              if(pro=="")
              {
                pro=0;
              }
              pro= parseFloat(pro)+parseFloat(temp_pro);
              pro.toString();

              //for Carbohydrates
              var temp_carbo=Albania.carbo;
              if(carbo=="")
              {
                carbo=0;
              }
              carbo= parseFloat(carbo)+parseFloat(temp_carbo);
              carbo.toString();
              Albania.fats=fats;
              Albania.pro=pro;
              Albania.carbo=carbo;
              Albania.country_name="Albania";
              //console.log(Albania.fats+" "+Albania.pro+" "+Albania.carbo);
              break;

      default:
    }
     //var Object1={country_name:[{salt:country_name.salt},{sugar:country_name.sugar}]};
  }//-----end else-----

 });//------end readline-----
lineReader.on('close',function(){
  console.log("Inside close");
console.log("----------------Bar Graph Array Creation------------------");

createBarGraphArray(UK);
//country="France";
createBarGraphArray(France);
createBarGraphArray(Netherlands);
createBarGraphArray(Germany);
createBarGraphArray(Spain);

barGraphAr.push(Canada);
barGraphAr.push(Australia);
barGraphAr.push(South_Africa);

console.log(barGraphAr);

//create Bar Graph array
function createBarGraphArray(objToCopy){
var obj=Object.assign({}, objToCopy);
delete obj.fats;
delete obj.carbo;
delete obj.pro;
barGraphAr.push(obj);
   //console.log(barGraphAr);

 }

 console.log("----------------Line Graph Array Creation------------------");

 var north=[UK,Denmark,Sweden,Norway];
 console.log(north);
 var central=[France,Belgium,Germany ,Switzerland,Netherlands];
 var south=[Portugal,Greece,Italy ,Spain,Croatia,Albania];
 var northEurope=createRegionObject(north,'North Europe');
 var centralEurope=createRegionObject(central,'Central Europe');
 var southEurope=createRegionObject(south,'South Europe');
 lineGraphAr.push(northEurope);
 lineGraphAr.push(centralEurope);
 lineGraphAr.push(southEurope);
 console.log(lineGraphAr);

 function createRegionObject(objArray,reg){
   let fat=0;
   let carbo=0;
   let protein=0;
   for(let i of objArray){
   fat=parseFloat(fat)+parseFloat(i.fats);
   carbo=parseFloat(carbo)+parseFloat(i.carbo);
   protein=parseFloat(protein)+parseFloat(i.pro);
 }

   var regionObj={
     region:reg,
     fat:fat,
     carbo:carbo,
     protein:protein,
   };
   return regionObj;
 }
//Writing JSOn file
//This variable will be used for writing into file
txtJSON1=JSON.stringify(barGraphAr);
fs.writeFile("FirstFile.JSON", txtJSON1, function(err) {
if(err) {
    return console.log(err);
}

console.log("The first file was saved!");
});


txtJSON2=JSON.stringify(lineGraphAr);
fs.writeFile("Secon_File.JSON",txtJSON2,function(err) {
if(err) {
    return console.log(err);
}

console.log("The second file was saved!");
});
});
