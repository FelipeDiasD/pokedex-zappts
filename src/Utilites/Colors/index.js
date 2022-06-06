



const Colors =
{
GRASS_GREEN: '#46D7AB',
BUG_GREEN: '#9DD647',
FIRE_RED: '#FB6C6C',
FIGHTING_RED:'#FF9F1C',
NORMAL_GRAY: '#C7C7C7',
ROCK_GRAY: '#35524A',
STEEL_GRAY: '#627C85',
POISON_PURPLE: '#8E44AD',
PSYCHIC_PURPLE: '',
FAIRY_PURPLE: '',
GHOST_PURPLE: '',
WATER_BLUE: '#46C5D7',
FLYING_BLUE: '#4DC1EB',
ICE_BLUE: '',
DRAGON_BLUE: '#16697A',
ELETRIC_YELLOW: '#FFA62B',
GROUND_BROWN: '',
DARK_BLACK: '',
DEFAULT_BG: '',
HP_COLOR:'',
ATACK_COLOR:'',
DEFENSE_COLOR:'',
SPECIAL_ATACK_COLOR:'',
SPECIAL_DEFENSE_COLOR:'',





}

function ReturnColor(tipo) {

    let color = ""

    switch (tipo){
        case 'grass':
            color = Colors.GRASS_GREEN
            break
        case "normal":
            color =   Colors.NORMAL_GRAY
            break
        case "fire":
            color = Colors.FIRE_RED
            break
        case "water" :
            color = Colors.WATER_BLUE
            break
        case "flying" :
            color = Colors.FLYING_BLUE
            break
        case "fighting" :
            color = Colors.FIGHTING_RED
            break
        case "poison" :
            color = Colors.POISON_PURPLE
            break
        case "electric":
            color = Colors.ELETRIC_YELLOW
            break
        case "ground" :
            color = Colors.GROUND_BROWN
            break
        case "rock" :
            color = Colors.ROCK_GRAY
            break
        case "psychic" :
            color = Colors.PSYCHIC_PURPLE
            break
        case "ice" :
            color = Colors.ICE_BLUE
            break
        case "bug" :
            color = Colors.BUG_GREEN
            break
        case "ghost": 
        color = Colors.GHOST_PURPLE
            break
        case "steel": 
        color = Colors.STEEL_GRAY
            break
        case "dragon" :
            color = Colors.DRAGON_BLUE
            break
        case "dark" :
            color = Colors.DARK_BLACK
            break
        case "fairy":
            color = Colors.FAIRY_PURPLE
            break

         default :
         color = "#FFF"
    }
return color
}


export default ReturnColor;
