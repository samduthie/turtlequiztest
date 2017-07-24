(function(){

    angular
        .module("turtleFacts")
        .factory("quizMetrics", QuizMetrics);

        /*
         * function definition for the factory
         */
        function QuizMetrics(){

            /*
             * quizObj is an object that will hold all of the above mentioned 
             * properties and methods and will be the return value of the 
             * factory
             *
             * As per pattern used in the controllers, the methods will 
             * reference named functions that are at the bottom of this function
             */
            var quizObj = {
                quizActive: false,
                changeState: changeState, // changeState is a named function below
            };

            /*
             * Return the quizObj. This is done near the top of the function to
             * allow a quick glance above the fold in the code to see 
             * functionality. Implementation of that functionality can then be
             * seen by scrolling down.
             */
            return quizObj;

            /*
             * Function to change the state of the quiz
             *
             * It accepts one arguments - what to change the state to.
             */
            function changeState(state){
                quizObj.quizActive = state;
            }

        }

})();
