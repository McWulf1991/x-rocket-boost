export const enum VEHICLEFLAGS {
    FLAG_SMALL_WORKER	                                                    =   0,
    FLAG_BIG	                                                            =   1,
    FLAG_NO_BOOT	                                                        =   2,
    FLAG_ONLY_DURING_OFFICE_HOURS	                                        =   3,
    FLAG_BOOT_IN_FRONT	                                                    =   4,
    FLAG_IS_VAN	                                                            =   5,
    FLAG_AVOID_TURNS	                                                    =   6,
    FLAG_HAS_LIVERY	                                                        =   7,
    FLAG_LIVERY_MATCH_EXTRA	                                                =   8,
    FLAG_SPORTS	                                                            =   9,
    FLAG_DELIVERY	                                                        =  10,
    FLAG_ONLY_ON_HIGHWAYS	                                                =  11,
    FLAG_TALL_SHIP	                                                        =  12,
    FLAG_SPAWN_ON_TRAILER	                                                =  13,
    FLAG_SPAWN_BOAT_ON_TRAILER	                                            =  14,
    FLAG_EXTRAS_GANG	                                                    =  15,
    FLAG_EXTRAS_CONVERTIBLE	                                                =  16,
    FLAG_EXTRAS_TAXI	                                                    =  17,
    FLAG_EXTRAS_RARE	                                                    =  18,
    FLAG_EXTRAS_REQUIRE	                                                    =  19,
    FLAG_EXTRAS_STRONG	                                                    =  20,
    FLAG_EXTRAS_ONLY_BREAK_WHEN_DESTROYED	                                =  21,
    FLAG_EXTRAS_SCRIPT	                                                    =  22,
    FLAG_EXTRAS_ALL	                                                        =  23,
    FLAG_EXTRAS_MATCH_LIVERY	                                            =  24,
    FLAG_DONT_ROTATE_TAIL_ROTOR	                                            =  25,
    FLAG_PARKING_SENSORS	                                                =  26,
    FLAG_PEDS_CAN_STAND_ON_TOP	                                            =  27,
    FLAG_GEN_NAVMESH	                                                    =  28,
    FLAG_LAW_ENFORCEMENT	                                                =  29,
    FLAG_EMERGENCY_SERVICE	                                                =  30,
    FLAG_DRIVER_NO_DRIVE_BY	                                                =  31,
    FLAG_NO_RESPRAY	                                                        =  32,
    FLAG_IGNORE_ON_SIDE_CHECK	                                            =  33,
    FLAG_RICH_CAR	                                                        =  34,
    FLAG_AVERAGE_CAR	                                                    =  35,
    FLAG_POOR_CAR	                                                        =  36,
    FLAG_ALLOWS_RAPPEL	                                                    =  37,
    FLAG_DONT_CLOSE_DOOR_UPON_EXIT	                                        =  38,
    FLAG_USE_HIGHER_DOOR_TORQUE	                                            =  39,
    FLAG_DISABLE_THROUGH_WINDSCREEN	                                        =  40,
    FLAG_IS_ELECTRIC	                                                    =  41,
    FLAG_NO_BROKEN_DOWN_SCENARIO	                                        =  42,
    FLAG_IS_JETSKI	                                                        =  43,
    FLAG_DAMPEN_STICKBOMB_DAMAGE	                                        =  44,
    FLAG_DONT_SPAWN_IN_CARGEN	                                            =  45,
    FLAG_IS_OFFROAD_VEHICLE	                                                =  46,
    FLAG_INCREASE_PED_COMMENTS	                                            =  47,
    FLAG_EXPLODE_ON_CONTACT	                                                =  48,
    FLAG_USE_FAT_INTERIOR_LIGHT	                                            =  49,
    FLAG_HEADLIGHTS_USE_ACTUAL_BONE_POS	                                    =  50,
    FLAG_FAKE_EXTRALIGHTS	                                                =  51,
    FLAG_CANNOT_BE_MODDED	                                                =  52,
    FLAG_DONT_SPAWN_AS_AMBIENT	                                            =  53,
    FLAG_IS_BULKY	                                                        =  54,
    FLAG_BLOCK_FROM_ATTRACTOR_SCENARIO	                                    =  55,
    FLAG_IS_BUS	                                                            =  56,
    FLAG_USE_STEERING_PARAM_FOR_LEAN	                                    =  57,
    FLAG_CANNOT_BE_DRIVEN_BY_PLAYER	                                        =  58,
    FLAG_SPRAY_PETROL_BEFORE_EXPLOSION	                                    =  59,
    FLAG_ATTACH_TRAILER_ON_HIGHWAY	                                        =  60,
    FLAG_ATTACH_TRAILER_IN_CITY	                                            =  61,
    FLAG_HAS_NO_ROOF	                                                    =  62,
    FLAG_ALLOW_TARGETING_OF_OCCUPANTS	                                    =  63,
    FLAG_RECESSED_HEADLIGHT_CORONAS	                                        =  64,
    FLAG_RECESSED_TAILLIGHT_CORONAS	                                        =  65,
    FLAG_IS_TRACKED_FOR_TRAILS	                                            =  66,
    FLAG_HEADLIGHTS_ON_LANDINGGEAR	                                        =  67,
    FLAG_CONSIDERED_FOR_VEHICLE_ENTRY_WHEN_STOOD_ON	                        =  68,
    FLAG_GIVE_SCUBA_GEAR_ON_EXIT	                                        =  69,
    FLAG_IS_DIGGER	                                                        =  70,
    FLAG_IS_TANK	                                                        =  71,
    FLAG_USE_COVERBOUND_INFO_FOR_COVERGEN	                                =  72,
    FLAG_CAN_BE_DRIVEN_ON	                                                =  73,
    FLAG_HAS_BULLETPROOF_GLASS	                                            =  74,
    FLAG_CANNOT_TAKE_COVER_WHEN_STOOD_ON	                                =  75,
    FLAG_INTERIOR_BLOCKED_BY_BOOT	                                        =  76,
    FLAG_DONT_TIMESLICE_WHEELS	                                            =  77,
    FLAG_FLEE_FROM_COMBAT	                                                =  78,
    FLAG_DRIVER_SHOULD_BE_FEMALE	                                        =  79,
    FLAG_DRIVER_SHOULD_BE_MALE	                                            =  80,
    FLAG_COUNT_AS_FACEBOOK_DRIVEN	                                        =  81,
    FLAG_BIKE_CLAMP_PICKUP_LEAN_RATE	                                    =  82,
    FLAG_PLANE_WEAR_ALTERNATIVE_HELMET	                                    =  83,
    FLAG_USE_STRICTER_EXIT_COLLISION_TESTS	                                =  84,
    FLAG_TWO_DOORS_ONE_SEAT	                                                =  85,
    FLAG_USE_LIGHTING_INTERIOR_OVERRIDE	                                    =  86,
    FLAG_USE_RESTRICTED_DRIVEBY_HEIGHT	                                    =  87,
    FLAG_CAN_HONK_WHEN_FLEEING	                                            =  88,
    FLAG_PEDS_INSIDE_CAN_BE_SET_ON_FIRE_MP	                                =  89,
    FLAG_REPORT_CRIME_IF_STANDING_ON	                                    =  90,
    FLAG_HELI_USES_FIXUPS_ON_OPEN_DOOR	                                    =  91,
    FLAG_FORCE_ENABLE_CHASSIS_COLLISION	                                    =  92,
    FLAG_CANNOT_BE_PICKUP_BY_CARGOBOB	                                    =  93,
    FLAG_CAN_HAVE_NEONS	                                                    =  94,
    FLAG_HAS_INTERIOR_EXTRAS	                                            =  95,
    FLAG_HAS_TURRET_SEAT_ON_VEHICLE	                                        =  96,
    FLAG_ALLOW_OBJECT_LOW_LOD_COLLISION	                                    =  97,
    FLAG_DISABLE_AUTO_VAULT_ON_VEHICLE	                                    =  98,
    FLAG_USE_TURRET_RELATIVE_AIM_CALCULATION	                            =  99,
    FLAG_USE_FULL_ANIMS_FOR_MP_WARP_ENTRY_POINTS	                        = 100,
    FLAG_HAS_DIRECTIONAL_SHUFFLES	                                        = 101,
    FLAG_DISABLE_WEAPON_WHEEL_IN_FIRST_PERSON	                            = 102,
    FLAG_USE_PILOT_HELMET	                                                = 103,
    FLAG_USE_WEAPON_WHEEL_WITHOUT_HELMET	                                = 104,
    FLAG_PREFER_ENTER_TURRET_AFTER_DRIVER	                                = 105,
    FLAG_USE_SMALLER_OPEN_DOOR_RATIO_TOLERANCE	                            = 106,
    FLAG_USE_HEADING_ONLY_IN_TURRET_MATRIX	                                = 107,
    FLAG_DONT_STOP_WHEN_GOING_TO_CLIMB_UP_POINT	                            = 108,
    FLAG_HAS_REAR_MOUNTED_TURRET	                                        = 109,
    FLAG_DISABLE_BUSTING	                                                = 110,
    FLAG_IGNORE_RWINDOW_COLLISION	                                        = 111,
    FLAG_HAS_GULL_WING_DOORS	                                            = 112,
    FLAG_CARGOBOB_HOOK_UP_CHASSIS	                                        = 113,
    FLAG_USE_FIVE_ANIM_THROW_FP	                                            = 114,
    FLAG_ALLOW_HATS_NO_ROOF	                                                = 115,
    FLAG_HAS_REAR_SEAT_ACTIVITIES	                                        = 116,
    FLAG_HAS_LOWRIDER_HYDRAULICS	                                        = 117,
    FLAG_HAS_BULLET_RESISTANT_GLASS	                                        = 118,
    FLAG_HAS_INCREASED_RAMMING_FORCE	                                    = 119,
    FLAG_HAS_CAPPED_EXPLOSION_DAMAGE	                                    = 120,
    FLAG_HAS_LOWRIDER_DONK_HYDRAULICS	                                    = 121,
    FLAG_HELICOPTER_WITH_LANDING_GEAR	                                    = 122,
    FLAG_JUMPING_CAR	                                                    = 123,
    FLAG_HAS_ROCKET_BOOST	                                                = 124,
    FLAG_RAMMING_SCOOP	                                                    = 125,
    FLAG_HAS_PARACHUTE	                                                    = 126,
    FLAG_RAMP	                                                            = 127,
    FLAG_HAS_EXTRA_SHUFFLE_SEAT_ON_VEHICLE	                                = 128,
    FLAG_FRONT_BOOT	                                                        = 129,
    FLAG_HALF_TRACK	                                                        = 130,
    FLAG_RESET_TURRET_SEAT_HEADING	                                        = 131,
    FLAG_TURRET_MODS_ON_ROOF	                                            = 132,
    FLAG_UPDATE_WEAPON_BATTERY_BONES	                                    = 133,
    FLAG_DONT_HOLD_LOW_GEARS_WHEN_ENGINE_UNDER_LOAD	                        = 134,
    FLAG_HAS_GLIDER	                                                        = 135,
    FLAG_INCREASE_LOW_SPEED_TORQUE	                                        = 136,
    FLAG_USE_AIRCRAFT_STYLE_WEAPON_TARGETING	                            = 137,
    FLAG_KEEP_ALL_TURRETS_SYNCHRONISED	                                    = 138,
    FLAG_SET_WANTED_FOR_ATTACHED_VEH	                                    = 139,
    FLAG_TURRET_ENTRY_ATTACH_TO_DRIVER_SEAT	                                = 140,
    FLAG_USE_STANDARD_FLIGHT_HELMET	                                        = 141,
    FLAG_SECOND_TURRET_MOD	                                                = 142,
    FLAG_THIRD_TURRET_MOD	                                                = 143,
    FLAG_HAS_EJECTOR_SEATS	                                                = 144,
    FLAG_HAS_JATO_BOOST_MOD	                                                = 145,
    FLAG_IGNORE_TRAPPED_HULL_CHECK	                                        = 146,
    FLAG_HOLD_TO_SHUFFLE	                                                = 147,
    FLAG_TURRET_MOD_WITH_NO_STOCK_TURRET	                                = 148,
    FLAG_EQUIP_UNARMED_ON_ENTER	                                            = 149,
    FLAG_DISABLE_CAMERA_PUSH_BEYOND	                                        = 150,
    FLAG_HAS_VERTICAL_FLIGHT_MODE	                                        = 151,
    FLAG_HAS_OUTRIGGER_LEGS	                                                = 152,
    FLAG_CAN_NAVIGATE_TO_ON_VEHICLE_ENTRY	                                = 153,
    FLAG_DROP_SUSPENSION_WHEN_STOPPED	                                    = 154,
    FLAG_DONT_CRASH_ABANDONED_NEAR_GROUND	                                = 155,
    FLAG_USE_INTERIOR_RED_LIGHT	                                            = 156,
    FLAG_HAS_HELI_STRAFE_MODE	                                            = 157,
    FLAG_HAS_VERTICAL_ROCKET_BOOST	                                        = 158,
    FLAG_CREATE_WEAPON_MANAGER_ON_SPAWN	                                    = 159,
    FLAG_USE_ROOT_AS_BASE_LOCKON_POS	                                    = 160,
    FLAG_HEADLIGHTS_ON_TAP_ONLY	                                            = 161,
    FLAG_CHECK_WARP_TASK_FLAG_DURING_ENTER	                                = 162,
    FLAG_USE_RESTRICTED_DRIVEBY_HEIGHT_HIGH	                                = 163,
    FLAG_INCREASE_CAMBER_WITH_SUSPENSION_MOD	                            = 164,
    FLAG_NO_HEAVY_BRAKE_ANIMATION	                                        = 165,
    FLAG_HAS_TWO_BONNET_BONES	                                            = 166,
    FLAG_DONT_LINK_BOOT2	                                                = 167,
    FLAG_HAS_INCREASED_RAMMING_FORCE_WITH_CHASSIS_MOD	                    = 168,
    FLAG_HAS_EXTENDED_COLLISION_MODS	                                    = 169,
    FLAG_HAS_NITROUS_MOD	                                                = 170,
    FLAG_HAS_JUMP_MOD	                                                    = 171,
    FLAG_HAS_RAMMING_SCOOP_MOD	                                            = 172,
    FLAG_HAS_SUPER_BRAKES_MOD	                                            = 173,
    FLAG_CRUSHES_OTHER_VEHICLES	                                            = 174,
    FLAG_HAS_WEAPON_BLADE_MODS	                                            = 175,
    FLAG_HAS_WEAPON_SPIKE_MODS	                                            = 176,
    FLAG_FORCE_BONNET_CAMERA_INSTEAD_OF_POV	                                = 177,
    FLAG_RAMP_MOD	                                                        = 178,
    FLAG_HAS_TOMBSTONE	                                                    = 179,
    FLAG_HAS_SIDE_SHUNT	                                                    = 180,
    FLAG_HAS_FRONT_SPIKE_MOD	                                            = 181,
    FLAG_HAS_RAMMING_BAR_MOD	                                            = 182,
    FLAG_TURRET_MODS_ON_CHASSIS5	                                        = 183,
    FLAG_HAS_SUPERCHARGER	                                                = 184,
    FLAG_IS_TANK_WITH_FLAME_DAMAGE	                                        = 185,
    FLAG_DISABLE_DEFORMATION	                                            = 186,
    FLAG_ALLOW_RAPPEL_AI_ONLY	                                            = 187,
    FLAG_USE_RESTRICTED_DRIVEBY_HEIGHT_MID_ONLY	                            = 188,
    FLAG_FORCE_AUTO_VAULT_ON_VEHICLE_WHEN_STUCK	                            = 189,
    FLAG_SPOILER_MOD_DOESNT_INCREASE_GRIP	                                = 190,
    FLAG_NO_REVERSING_ANIMATION	                                            = 191,
    FLAG_IS_QUADBIKE_USING_BIKE_ANIMATIONS	                                = 192,
    FLAG_IS_FORMULA_VEHICLE	                                                = 193,
    FLAG_LATCH_ALL_JOINTS	                                                = 194,
    FLAG_REJECT_ENTRY_TO_VEHICLE_WHEN_STOOD_ON	                            = 195,
    FLAG_CHECK_IF_DRIVER_SEAT_IS_CLOSER_THAN_TURRETS_WITH_ON_BOARD_ENTER	= 196,
    FLAG_RENDER_WHEELS_WITH_ZERO_COMPRESSION	                            = 197,
    FLAG_USE_LENGTH_OF_VEHICLE_BOUNDS_FOR_PLAYER_LOCKON_POS	                = 198,
    FLAG_PREFER_FRONT_SEAT	                                                = 199,
}