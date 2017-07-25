(function(){

    angular
        .module("turtleFacts")
        .factory("quizMetrics", QuizMetrics);

        /*
         * function definition for the factory
         */
        function QuizMetrics(){

          
            var quizObj = {
                quizActive: false,
                resultsActive: false,
                changeState: changeState, // changeState is a named function below
            };

           
            return quizObj;

           
            function changeState(metric, state){
                if (metric=== "quiz"){
                    quizObj.quizActive = state;
                }
                else if (metric==="results"){
                    quizObj.resultsActive = state;
                }
                else{
                    return false;
                }
            }

        }

})();
