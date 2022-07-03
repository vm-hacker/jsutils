# Pwd (Print Working Directory)

import {green} from "https://deno.land/std@0.146.0/fmt/colors.ts";

let pwd = Deno.cwd();
console.log("Current working directory: " + green(pwd));
