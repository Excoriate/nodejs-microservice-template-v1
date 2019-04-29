#!/usr/bin/python

import sys
import datetime
import os

# Possible arguments:
# c = clean and delete all containers
# x= clean containers and images
# i = clean and remove images
# v = view mode. Enable a view mode for see containers and image created.
# r = run mode. It build and run the container image associated to this application.


currentDate = datetime.datetime.now()
stop_containers = "docker stop $(docker ps -a -q)"
delete_containers = "docker rm $(docker ps -a -q)"
list_all_docker_images = "docker images -a"
list_all_exited_containers = "docker ps -a -f status=exited"
list_all_containers = "docker ps -a"
remove_all_docker_images = "docker rmi -f $(docker images -a -q)"
list_all_docker_volumes = "docker volume ls"
list_all_docker_images_simple = "docker images"

# docker commands specifically for this application.
docker_build = "docker build -t api --file ./Dockerfile ."
docker_run = "docker run -p 127.0.0.1:3002:3002 api"

print("Starting docker container manager scripts at " + str(currentDate))


def switcher_option(option):
	if "x" == option:
		print("List of docker containers to be removed...")
		os.system(list_all_exited_containers)

		print("removing all containers")
		
		os.system(stop_containers)
		os.system(delete_containers)

		print("List of all docker images to be removed...")
		os.system(list_all_docker_images)

		print("removing all docker images...")
		os.system(remove_all_docker_images)
		print("Clean process completed successfully")
	else:
		if "c" == option:
			print("List of docker containers to be removed...")
			os.system(list_all_exited_containers)

			print("removing all containers")

			os.system(stop_containers)
			os.system(delete_containers)
			print("Clean process completed successfully")
		else:
			if "i" == option:
				print("List of all docker images to be removed...")
				os.system(list_all_docker_images)

				print("removing all docker images...")
				os.system(remove_all_docker_images)
				print("Clean process completed successfully")

			else:
				if "v" == option:
					print("View mode enabled...")
					print("***********DOCKER IMAGES***********")
					os.system(list_all_docker_images_simple)
					print("***********DOCKER CONTAINERS (PROCESS)***********")
					os.system(list_all_containers)
				else:
					if "r" == option:
						print("Running local container...")
						print("********DOCKER IMAGE -> BUILDING ********")
						os.system(docker_build)

						print("********DOCKER CONTAINER -> BUILDING ********")
						os.system(docker_run)

						print("Docker container management finished successfully.")
						

if len(sys.argv) > 1:
	option = sys.argv[1]
	print("Argument received => " + str(sys.argv[1]))
	switcher_option(option)
else:
	print("Error, no argument received. Process stopped.")
