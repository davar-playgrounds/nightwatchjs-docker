## Running on Docker

Run the nightwatch tests:

```bash
docker-compose run --rm nightwatch
```

A video of the test will be stored in `test/videos`.  
Video recording is done with [nightwatch-video-recorder](https://github.com/blueimp/nightwatch-video-recorder).

Connect to the chromedriver via VNC:

```sh
open vnc://user:secret@localhost:5900
```

The VNC password can be changed via `VNC_PASSWORD` environment variable for the
chromedriver container.

Stop and remove the docker-compose container set:

```sh
docker-compose down -v
```
