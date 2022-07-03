/*
Copyright (c) 2022-2023, Venkatesh Mishra. All rights reserved
jsutils is free and opensource software published under the GNU GPL v3 license.
*/

# Pwd (Print Working Directory)

import {green} from "https://deno.land/std@0.146.0/fmt/colors.ts";

let pwd = Deno.cwd();
console.log("Current working directory: " + green(pwd));
