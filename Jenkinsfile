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
	
} 
