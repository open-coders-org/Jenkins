pipeline {
	agent any
		stages {
			stage('build') {
				steps {
					sh "node --version"
					sh "cat README.md"
					sh "npm --version"
					sh "pm2 start index.js"
				}
			}
		}
	post {
		always {
			echo 'This will always run'
		}
		success {
			echo 'This will run only if successful'
		}
		failure {
			echo 'This will run only if failed'
		}
		unstable {
			echo 'This will run only if the run was marked as unstable'
		}
		changed {
			echo 'This will run only if the state of the pipeline has changed'
			echo 'For example, if the Pipeline was previously failind but is now successful'
		}
	}
}
