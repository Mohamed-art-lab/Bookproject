 import Search from "./Search";
 import Filter from "./Filter";

 function Food({ recipes }){

    return ( 
        <div>
            <Search recipes={recipes}/>
            <Filter recipes={recipes}/>
        </div>
     );
}
 
export default Food;