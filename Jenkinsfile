pipeline {
	agent any
	
	stages {
		stage('Unit test') {
			steps {				
 			    sh 'echo "Tests passed"' // to ensure it is installed
			}
		}			
		
		stage('Integration test') {
			steps {
				sh 'echo "Tests passed integration"'			
			}
		}

		stage('Staging') {
			when {
			   branch "hml"
			}
			steps {	
				sh 'echo "deploy to staging"'		
			}	
		}		
		
	 	stage('Production') {
			when {
			   branch "master"
			}
			steps {	
				sh 'echo "deploy to production"'		
			}	
		}
	 }
	
	 environment {
	 		AWS_ACCESS_KEY_ID = credentials('AWS_ACCESS_KEY_ID')
			AWS_SECRET_ACCESS_KEY = credentials('AWS_SECRET_ACCESS_KEY')
	 }

} 
