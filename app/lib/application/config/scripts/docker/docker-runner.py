#!/usr/bin/python

import sys
import os


# Arguments
# -> Argument: d (run the container in a dev model)
# -> Argument: dx (clean all local containers, images and run the container once again, in a complete clean mode. This option also clean all previous containers before creates the new one.)
# -> Argument: q (run a local container emulating a QA environment).
# -> Argument: qx (run a local container emulating a QA environment. This option also clean all previous containers before creates the new one.).
# -> Argument: u (run a local container emulating a UAT environment).
# -> Argument: ux (run a local container emulating a UAT environment. This option also clean all previous containers before creates the new one.).


# command sections.
docker_compose_build_and_run_dev = "docker-compose -f docker-compose.common.yaml -f docker-compose.dev.yaml build && docker-compose -f docker-compose.common.yaml -f docker-compose.dev.yaml up -d"
docker_compose_clean_container_image_by_name = " "
docker_compose_build_and_run_qa = "docker-compose -f docker-compose.common.yaml -f docker-compose.qa.yaml build && docker-compose -f docker-compose.common.yaml -f docker-compose.qa.yaml up -d"
docker_compose_build_and_run_uat = "docker-compose -f docker-compose.common.yaml -f docker-compose.uat.yaml build && docker-compose -f docker-compose.common.yaml -f docker-compose.uat.yaml up -d"
docker_compose_exec_container_dev = "docker exec -ti auth-dev /bin/bash"
docker_compose_exec_container_qa = "docker exec -ti auth-qa /bin/bash"
docker_compose_exec_container_uat = "docker exec -ti auth-uat /bin/bash"
docker_clean_all = "python config/scripts/docker/docker-container-manager.py x"


def switcher(option):
	print("Option selected -> " + str(option))
	print("****** STARTING PROCESS ******")
	
	# environment available: d = development | q= quality | u= user acceptance environment | p = production environment.
	if option.upper() == "D":
		print("Creating docker container for development environment.")
		print("**********DEV ENVIRONMENT (RUN ONLY) **********")
		os.system(docker_compose_build_and_run_dev)
		os.system(docker_compose_exec_container_dev)
	else:
		if option.upper() =="DX":
			print("Cleaning and creating docker container for development environment")
			print("**********DEV ENVIRONMENT (CLEAN AND RUN) **********")
			os.system(docker_clean_all)
			os.system(docker_compose_build_and_run_dev)
			os.system(docker_compose_exec_container_dev)
			
		else:
			if option.upper() =="Q":
				print("Creating docker container for testing environment.")
				print("**********TESTING (RUN ONLY) **********")
				os.system(docker_compose_build_and_run_qa)
				os.system(docker_compose_exec_container_qa)
			else:
				if option.upper()=="QX":
					print("Cleaning and creating docker container for testing environment")
					print("**********TESTING (CLEAN AND RUN) **********")
					os.system(docker_clean_all)
					os.system(docker_compose_build_and_run_qa)
					os.system(docker_compose_exec_container_qa)
				else:
					if option.upper=="U":
						print("Creating docker container for UAT environment.")
						print("**********UAT (RUN ONLY) **********")
						os.system(docker_compose_build_and_run_uat)
						os.system(docker_compose_exec_container_uat)
					else:
						if option.upper=="UX":
							print("Cleaning and creating docker container for UAT environment")
							print("**********UAT (CLEAN AND RUN) **********")
							os.system(docker_clean_all)
							os.system(docker_compose_build_and_run_uat)
							os.system(docker_compose_exec_container_uat)
							
	print("process finished =)")

if len(sys.argv) < 1:
	print("Arguments are invalid. Cannot continue.")
else:
	print("Argument received => " + str(sys.argv[1]))
	option = sys.argv[1]
	switcher(option)