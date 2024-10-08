---
title: Fantasy Premier League Connector
description: ""
date: 2023-04-17T23:53:58.309Z
preview: ""
draft: true
tags: []
categories: []
---



``` yaml
swagger: '2.0'
info:
  title: Fantasy Premier League
  description: FPL Connector
  version: '1.0'
host: fantasy.premierleague.com
basePath: /api
schemes:
  - https
consumes: []
produces: []
paths:
  /bootstrap-static/:
    get:
      responses:
        default:
          description: default
          schema:
            type: object
            properties:
              events:
                type: array
                items:
                  type: object
                  properties:
                    id:
                      type: integer
                      format: int32
                      description: id
                    name:
                      type: string
                      description: name
                    deadline_time:
                      type: string
                      description: deadline_time
                    average_entry_score:
                      type: integer
                      format: int32
                      description: average_entry_score
                    finished:
                      type: boolean
                      description: finished
                    data_checked:
                      type: boolean
                      description: data_checked
                    highest_scoring_entry:
                      type: integer
                      format: int32
                      description: highest_scoring_entry
                    deadline_time_epoch:
                      type: integer
                      format: int32
                      description: deadline_time_epoch
                    deadline_time_game_offset:
                      type: integer
                      format: int32
                      description: deadline_time_game_offset
                    highest_score:
                      type: integer
                      format: int32
                      description: highest_score
                    is_previous:
                      type: boolean
                      description: is_previous
                    is_current:
                      type: boolean
                      description: is_current
                    is_next:
                      type: boolean
                      description: is_next
                    cup_leagues_created:
                      type: boolean
                      description: cup_leagues_created
                    h2h_ko_matches_created:
                      type: boolean
                      description: h2h_ko_matches_created
                    chip_plays:
                      type: array
                      items:
                        type: object
                        properties:
                          chip_name:
                            type: string
                            description: chip_name
                          num_played:
                            type: integer
                            format: int32
                            description: num_played
                      description: chip_plays
                    most_selected:
                      type: integer
                      format: int32
                      description: most_selected
                    most_transferred_in:
                      type: integer
                      format: int32
                      description: most_transferred_in
                    top_element:
                      type: integer
                      format: int32
                      description: top_element
                    top_element_info:
                      type: object
                      properties:
                        id:
                          type: integer
                          format: int32
                          description: id
                        points:
                          type: integer
                          format: int32
                          description: points
                      description: top_element_info
                    transfers_made:
                      type: integer
                      format: int32
                      description: transfers_made
                    most_captained:
                      type: integer
                      format: int32
                      description: most_captained
                    most_vice_captained:
                      type: integer
                      format: int32
                      description: most_vice_captained
                description: events
              game_settings:
                type: object
                properties:
                  league_join_private_max:
                    type: integer
                    format: int32
                    description: league_join_private_max
                  league_join_public_max:
                    type: integer
                    format: int32
                    description: league_join_public_max
                  league_max_size_public_classic:
                    type: integer
                    format: int32
                    description: league_max_size_public_classic
                  league_max_size_public_h2h:
                    type: integer
                    format: int32
                    description: league_max_size_public_h2h
                  league_max_size_private_h2h:
                    type: integer
                    format: int32
                    description: league_max_size_private_h2h
                  league_max_ko_rounds_private_h2h:
                    type: integer
                    format: int32
                    description: league_max_ko_rounds_private_h2h
                  league_prefix_public:
                    type: string
                    description: league_prefix_public
                  league_points_h2h_win:
                    type: integer
                    format: int32
                    description: league_points_h2h_win
                  league_points_h2h_lose:
                    type: integer
                    format: int32
                    description: league_points_h2h_lose
                  league_points_h2h_draw:
                    type: integer
                    format: int32
                    description: league_points_h2h_draw
                  league_ko_first_instead_of_random:
                    type: boolean
                    description: league_ko_first_instead_of_random
                  cup_start_event_id:
                    type: integer
                    format: int32
                    description: cup_start_event_id
                  cup_stop_event_id:
                    type: integer
                    format: int32
                    description: cup_stop_event_id
                  cup_qualifying_method:
                    type: integer
                    format: int32
                    description: cup_qualifying_method
                  cup_type:
                    type: integer
                    format: int32
                    description: cup_type
                  squad_squadplay:
                    type: integer
                    format: int32
                    description: squad_squadplay
                  squad_squadsize:
                    type: integer
                    format: int32
                    description: squad_squadsize
                  squad_team_limit:
                    type: integer
                    format: int32
                    description: squad_team_limit
                  squad_total_spend:
                    type: integer
                    format: int32
                    description: squad_total_spend
                  ui_currency_multiplier:
                    type: integer
                    format: int32
                    description: ui_currency_multiplier
                  ui_use_special_shirts:
                    type: boolean
                    description: ui_use_special_shirts
                  ui_special_shirt_exclusions:
                    type: array
                    items: {}
                    description: ui_special_shirt_exclusions
                  stats_form_days:
                    type: integer
                    format: int32
                    description: stats_form_days
                  sys_vice_captain_enabled:
                    type: boolean
                    description: sys_vice_captain_enabled
                  transfers_cap:
                    type: integer
                    format: int32
                    description: transfers_cap
                  transfers_sell_on_fee:
                    type: number
                    format: float
                    description: transfers_sell_on_fee
                  league_h2h_tiebreak_stats:
                    type: array
                    items:
                      type: string
                    description: league_h2h_tiebreak_stats
                  timezone:
                    type: string
                    description: timezone
                description: game_settings
              phases:
                type: array
                items:
                  type: object
                  properties:
                    id:
                      type: integer
                      format: int32
                      description: id
                    name:
                      type: string
                      description: name
                    start_event:
                      type: integer
                      format: int32
                      description: start_event
                    stop_event:
                      type: integer
                      format: int32
                      description: stop_event
                description: phases
              teams:
                type: array
                items:
                  type: object
                  properties:
                    code:
                      type: integer
                      format: int32
                      description: code
                    draw:
                      type: integer
                      format: int32
                      description: draw
                    form:
                      type: integer
                      format: int32
                      description: form
                    id:
                      type: integer
                      format: int32
                      description: id
                    loss:
                      type: integer
                      format: int32
                      description: loss
                    name:
                      type: string
                      description: name
                    played:
                      type: integer
                      format: int32
                      description: played
                    points:
                      type: integer
                      format: int32
                      description: points
                    position:
                      type: integer
                      format: int32
                      description: position
                    short_name:
                      type: string
                      description: short_name
                    strength:
                      type: integer
                      format: int32
                      description: strength
                    team_division:
                      type: integer
                      format: int32
                      description: team_division
                    unavailable:
                      type: boolean
                      description: unavailable
                    win:
                      type: integer
                      format: int32
                      description: win
                    strength_overall_home:
                      type: integer
                      format: int32
                      description: strength_overall_home
                    strength_overall_away:
                      type: integer
                      format: int32
                      description: strength_overall_away
                    strength_attack_home:
                      type: integer
                      format: int32
                      description: strength_attack_home
                    strength_attack_away:
                      type: integer
                      format: int32
                      description: strength_attack_away
                    strength_defence_home:
                      type: integer
                      format: int32
                      description: strength_defence_home
                    strength_defence_away:
                      type: integer
                      format: int32
                      description: strength_defence_away
                    pulse_id:
                      type: integer
                      format: int32
                      description: pulse_id
                description: teams
              total_players:
                type: integer
                format: int32
                description: total_players
              elements:
                type: array
                items:
                  type: object
                  properties:
                    chance_of_playing_next_round:
                      type: integer
                      format: int32
                      description: chance_of_playing_next_round
                    chance_of_playing_this_round:
                      type: integer
                      format: int32
                      description: chance_of_playing_this_round
                    code:
                      type: integer
                      format: int32
                      description: code
                    cost_change_event:
                      type: integer
                      format: int32
                      description: cost_change_event
                    cost_change_event_fall:
                      type: integer
                      format: int32
                      description: cost_change_event_fall
                    cost_change_start:
                      type: integer
                      format: int32
                      description: cost_change_start
                    cost_change_start_fall:
                      type: integer
                      format: int32
                      description: cost_change_start_fall
                    dreamteam_count:
                      type: integer
                      format: int32
                      description: dreamteam_count
                    element_type:
                      type: integer
                      format: int32
                      description: element_type
                    ep_next:
                      type: string
                      description: ep_next
                    ep_this:
                      type: string
                      description: ep_this
                    event_points:
                      type: integer
                      format: int32
                      description: event_points
                    first_name:
                      type: string
                      description: first_name
                    form:
                      type: string
                      description: form
                    id:
                      type: integer
                      format: int32
                      description: id
                    in_dreamteam:
                      type: boolean
                      description: in_dreamteam
                    news:
                      type: string
                      description: news
                    news_added:
                      type: string
                      description: news_added
                    now_cost:
                      type: integer
                      format: int32
                      description: now_cost
                    photo:
                      type: string
                      description: photo
                    points_per_game:
                      type: string
                      description: points_per_game
                    second_name:
                      type: string
                      description: second_name
                    selected_by_percent:
                      type: string
                      description: selected_by_percent
                    special:
                      type: boolean
                      description: special
                    squad_number:
                      type: integer
                      format: int32
                      description: squad_number
                    status:
                      type: string
                      description: status
                    team:
                      type: integer
                      format: int32
                      description: team
                    team_code:
                      type: integer
                      format: int32
                      description: team_code
                    total_points:
                      type: integer
                      format: int32
                      description: total_points
                    transfers_in:
                      type: integer
                      format: int32
                      description: transfers_in
                    transfers_in_event:
                      type: integer
                      format: int32
                      description: transfers_in_event
                    transfers_out:
                      type: integer
                      format: int32
                      description: transfers_out
                    transfers_out_event:
                      type: integer
                      format: int32
                      description: transfers_out_event
                    value_form:
                      type: string
                      description: value_form
                    value_season:
                      type: string
                      description: value_season
                    web_name:
                      type: string
                      description: web_name
                    minutes:
                      type: integer
                      format: int32
                      description: minutes
                    goals_scored:
                      type: integer
                      format: int32
                      description: goals_scored
                    assists:
                      type: integer
                      format: int32
                      description: assists
                    clean_sheets:
                      type: integer
                      format: int32
                      description: clean_sheets
                    goals_conceded:
                      type: integer
                      format: int32
                      description: goals_conceded
                    own_goals:
                      type: integer
                      format: int32
                      description: own_goals
                    penalties_saved:
                      type: integer
                      format: int32
                      description: penalties_saved
                    penalties_missed:
                      type: integer
                      format: int32
                      description: penalties_missed
                    yellow_cards:
                      type: integer
                      format: int32
                      description: yellow_cards
                    red_cards:
                      type: integer
                      format: int32
                      description: red_cards
                    saves:
                      type: integer
                      format: int32
                      description: saves
                    bonus:
                      type: integer
                      format: int32
                      description: bonus
                    bps:
                      type: integer
                      format: int32
                      description: bps
                    influence:
                      type: string
                      description: influence
                    creativity:
                      type: string
                      description: creativity
                    threat:
                      type: string
                      description: threat
                    ict_index:
                      type: string
                      description: ict_index
                    influence_rank:
                      type: integer
                      format: int32
                      description: influence_rank
                    influence_rank_type:
                      type: integer
                      format: int32
                      description: influence_rank_type
                    creativity_rank:
                      type: integer
                      format: int32
                      description: creativity_rank
                    creativity_rank_type:
                      type: integer
                      format: int32
                      description: creativity_rank_type
                    threat_rank:
                      type: integer
                      format: int32
                      description: threat_rank
                    threat_rank_type:
                      type: integer
                      format: int32
                      description: threat_rank_type
                    ict_index_rank:
                      type: integer
                      format: int32
                      description: ict_index_rank
                    ict_index_rank_type:
                      type: integer
                      format: int32
                      description: ict_index_rank_type
                    corners_and_indirect_freekicks_order:
                      type: integer
                      format: int32
                      description: corners_and_indirect_freekicks_order
                    corners_and_indirect_freekicks_text:
                      type: string
                      description: corners_and_indirect_freekicks_text
                    direct_freekicks_order:
                      type: integer
                      format: int32
                      description: direct_freekicks_order
                    direct_freekicks_text:
                      type: string
                      description: direct_freekicks_text
                    penalties_order:
                      type: integer
                      format: int32
                      description: penalties_order
                    penalties_text:
                      type: string
                      description: penalties_text
                description: elements
              element_stats:
                type: array
                items:
                  type: object
                  properties:
                    label:
                      type: string
                      description: label
                    name:
                      type: string
                      description: name
                description: element_stats
              element_types:
                type: array
                items:
                  type: object
                  properties:
                    id:
                      type: integer
                      format: int32
                      description: id
                    plural_name:
                      type: string
                      description: plural_name
                    plural_name_short:
                      type: string
                      description: plural_name_short
                    singular_name:
                      type: string
                      description: singular_name
                    singular_name_short:
                      type: string
                      description: singular_name_short
                    squad_select:
                      type: integer
                      format: int32
                      description: squad_select
                    squad_min_play:
                      type: integer
                      format: int32
                      description: squad_min_play
                    squad_max_play:
                      type: integer
                      format: int32
                      description: squad_max_play
                    ui_shirt_specific:
                      type: boolean
                      description: ui_shirt_specific
                    sub_positions_locked:
                      type: array
                      items:
                        type: integer
                        format: int32
                      description: sub_positions_locked
                    element_count:
                      type: integer
                      format: int32
                      description: element_count
                description: element_types
      summary: Get BootStrap Static
      operationId: GetStatic
      parameters: []
  /event/{week}/live/:
    get:
      responses:
        default:
          description: default
          schema:
            type: object
            properties:
              elements:
                type: array
                items:
                  type: object
                  properties:
                    id:
                      type: integer
                      format: int32
                      description: id
                    stats:
                      type: object
                      properties:
                        minutes:
                          type: integer
                          format: int32
                          description: minutes
                        goals_scored:
                          type: integer
                          format: int32
                          description: goals_scored
                        assists:
                          type: integer
                          format: int32
                          description: assists
                        clean_sheets:
                          type: integer
                          format: int32
                          description: clean_sheets
                        goals_conceded:
                          type: integer
                          format: int32
                          description: goals_conceded
                        own_goals:
                          type: integer
                          format: int32
                          description: own_goals
                        penalties_saved:
                          type: integer
                          format: int32
                          description: penalties_saved
                        penalties_missed:
                          type: integer
                          format: int32
                          description: penalties_missed
                        yellow_cards:
                          type: integer
                          format: int32
                          description: yellow_cards
                        red_cards:
                          type: integer
                          format: int32
                          description: red_cards
                        saves:
                          type: integer
                          format: int32
                          description: saves
                        bonus:
                          type: integer
                          format: int32
                          description: bonus
                        bps:
                          type: integer
                          format: int32
                          description: bps
                        influence:
                          type: string
                          description: influence
                        creativity:
                          type: string
                          description: creativity
                        threat:
                          type: string
                          description: threat
                        ict_index:
                          type: string
                          description: ict_index
                        total_points:
                          type: integer
                          format: int32
                          description: total_points
                        in_dreamteam:
                          type: boolean
                          description: in_dreamteam
                      description: stats
                    explain:
                      type: array
                      items:
                        type: object
                        properties:
                          fixture:
                            type: integer
                            format: int32
                            description: fixture
                          stats:
                            type: array
                            items:
                              type: object
                              properties:
                                identifier:
                                  type: string
                                  description: identifier
                                points:
                                  type: integer
                                  format: int32
                                  description: points
                                value:
                                  type: integer
                                  format: int32
                                  description: value
                            description: stats
                      description: explain
                description: elements
      summary: GetGameWeek
      operationId: GetGameWeek
      parameters:
        - name: week
          in: path
          required: true
          type: string
  /element-summary/{element}/:
    get:
      responses:
        default:
          description: default
          schema:
            type: object
            properties:
              fixtures:
                type: array
                items: {}
                description: fixtures
              history:
                type: array
                items:
                  type: object
                  properties:
                    element:
                      type: integer
                      format: int32
                      description: element
                    fixture:
                      type: integer
                      format: int32
                      description: fixture
                    opponent_team:
                      type: integer
                      format: int32
                      description: opponent_team
                    total_points:
                      type: integer
                      format: int32
                      description: total_points
                    was_home:
                      type: boolean
                      description: was_home
                    kickoff_time:
                      type: string
                      description: kickoff_time
                    team_h_score:
                      type: integer
                      format: int32
                      description: team_h_score
                    team_a_score:
                      type: integer
                      format: int32
                      description: team_a_score
                    round:
                      type: integer
                      format: int32
                      description: round
                    minutes:
                      type: integer
                      format: int32
                      description: minutes
                    goals_scored:
                      type: integer
                      format: int32
                      description: goals_scored
                    assists:
                      type: integer
                      format: int32
                      description: assists
                    clean_sheets:
                      type: integer
                      format: int32
                      description: clean_sheets
                    goals_conceded:
                      type: integer
                      format: int32
                      description: goals_conceded
                    own_goals:
                      type: integer
                      format: int32
                      description: own_goals
                    penalties_saved:
                      type: integer
                      format: int32
                      description: penalties_saved
                    penalties_missed:
                      type: integer
                      format: int32
                      description: penalties_missed
                    yellow_cards:
                      type: integer
                      format: int32
                      description: yellow_cards
                    red_cards:
                      type: integer
                      format: int32
                      description: red_cards
                    saves:
                      type: integer
                      format: int32
                      description: saves
                    bonus:
                      type: integer
                      format: int32
                      description: bonus
                    bps:
                      type: integer
                      format: int32
                      description: bps
                    influence:
                      type: string
                      description: influence
                    creativity:
                      type: string
                      description: creativity
                    threat:
                      type: string
                      description: threat
                    ict_index:
                      type: string
                      description: ict_index
                    value:
                      type: integer
                      format: int32
                      description: value
                    transfers_balance:
                      type: integer
                      format: int32
                      description: transfers_balance
                    selected:
                      type: integer
                      format: int32
                      description: selected
                    transfers_in:
                      type: integer
                      format: int32
                      description: transfers_in
                    transfers_out:
                      type: integer
                      format: int32
                      description: transfers_out
                description: history
              history_past:
                type: array
                items:
                  type: object
                  properties:
                    season_name:
                      type: string
                      description: season_name
                    element_code:
                      type: integer
                      format: int32
                      description: element_code
                    start_cost:
                      type: integer
                      format: int32
                      description: start_cost
                    end_cost:
                      type: integer
                      format: int32
                      description: end_cost
                    total_points:
                      type: integer
                      format: int32
                      description: total_points
                    minutes:
                      type: integer
                      format: int32
                      description: minutes
                    goals_scored:
                      type: integer
                      format: int32
                      description: goals_scored
                    assists:
                      type: integer
                      format: int32
                      description: assists
                    clean_sheets:
                      type: integer
                      format: int32
                      description: clean_sheets
                    goals_conceded:
                      type: integer
                      format: int32
                      description: goals_conceded
                    own_goals:
                      type: integer
                      format: int32
                      description: own_goals
                    penalties_saved:
                      type: integer
                      format: int32
                      description: penalties_saved
                    penalties_missed:
                      type: integer
                      format: int32
                      description: penalties_missed
                    yellow_cards:
                      type: integer
                      format: int32
                      description: yellow_cards
                    red_cards:
                      type: integer
                      format: int32
                      description: red_cards
                    saves:
                      type: integer
                      format: int32
                      description: saves
                    bonus:
                      type: integer
                      format: int32
                      description: bonus
                    bps:
                      type: integer
                      format: int32
                      description: bps
                    influence:
                      type: string
                      description: influence
                    creativity:
                      type: string
                      description: creativity
                    threat:
                      type: string
                      description: threat
                    ict_index:
                      type: string
                      description: ict_index
                description: history_past
      summary: GetElementDetail
      operationId: GetElementDetail
      parameters:
        - name: element
          in: path
          required: true
          type: string
  /fixtures/:
    get:
      responses:
        default:
          description: default
          schema:
            type: array
            items:
              type: object
              properties:
                code:
                  type: integer
                  format: int32
                  description: code
                event:
                  type: integer
                  format: int32
                  description: event
                finished:
                  type: boolean
                  description: finished
                finished_provisional:
                  type: boolean
                  description: finished_provisional
                id:
                  type: integer
                  format: int32
                  description: id
                kickoff_time:
                  type: string
                  description: kickoff_time
                minutes:
                  type: integer
                  format: int32
                  description: minutes
                provisional_start_time:
                  type: boolean
                  description: provisional_start_time
                started:
                  type: boolean
                  description: started
                team_a:
                  type: integer
                  format: int32
                  description: team_a
                team_a_score:
                  type: integer
                  format: int32
                  description: team_a_score
                team_h:
                  type: integer
                  format: int32
                  description: team_h
                team_h_score:
                  type: integer
                  format: int32
                  description: team_h_score
                stats:
                  type: array
                  items:
                    type: object
                    properties:
                      identifier:
                        type: string
                        description: identifier
                      a:
                        type: array
                        items:
                          type: object
                          properties:
                            value:
                              type: integer
                              format: int32
                              description: value
                            element:
                              type: integer
                              format: int32
                              description: element
                        description: a
                      h:
                        type: array
                        items:
                          type: object
                          properties:
                            value:
                              type: integer
                              format: int32
                              description: value
                            element:
                              type: integer
                              format: int32
                              description: element
                        description: h
                  description: stats
                team_h_difficulty:
                  type: integer
                  format: int32
                  description: team_h_difficulty
                team_a_difficulty:
                  type: integer
                  format: int32
                  description: team_a_difficulty
                pulse_id:
                  type: integer
                  format: int32
                  description: pulse_id
      summary: GetMatchWeekFixtures
      operationId: GetFixture
      parameters:
        - name: event
          in: query
          required: false
          type: integer
  /entry/{managerId}/:
    get:
      responses:
        default:
          description: default
          schema:
            type: object
            properties:
              id:
                type: integer
                format: int32
                description: id
              joined_time:
                type: string
                description: joined_time
              started_event:
                type: integer
                format: int32
                description: started_event
              favourite_team:
                type: integer
                format: int32
                description: favourite_team
              player_first_name:
                type: string
                description: player_first_name
              player_last_name:
                type: string
                description: player_last_name
              player_region_id:
                type: integer
                format: int32
                description: player_region_id
              player_region_name:
                type: string
                description: player_region_name
              player_region_iso_code_short:
                type: string
                description: player_region_iso_code_short
              player_region_iso_code_long:
                type: string
                description: player_region_iso_code_long
              summary_overall_points:
                type: string
                description: summary_overall_points
              summary_overall_rank:
                type: string
                description: summary_overall_rank
              summary_event_points:
                type: string
                description: summary_event_points
              summary_event_rank:
                type: string
                description: summary_event_rank
              current_event:
                type: string
                description: current_event
              leagues:
                type: object
                properties:
                  classic:
                    type: array
                    items:
                      type: object
                      properties:
                        id:
                          type: integer
                          format: int32
                          description: id
                        name:
                          type: string
                          description: name
                        short_name:
                          type: string
                          description: short_name
                        created:
                          type: string
                          description: created
                        closed:
                          type: boolean
                          description: closed
                        rank:
                          type: string
                          description: rank
                        max_entries:
                          type: string
                          description: max_entries
                        league_type:
                          type: string
                          description: league_type
                        scoring:
                          type: string
                          description: scoring
                        admin_entry:
                          type: integer
                          format: int32
                          description: admin_entry
                        start_event:
                          type: integer
                          format: int32
                          description: start_event
                        entry_can_leave:
                          type: boolean
                          description: entry_can_leave
                        entry_can_admin:
                          type: boolean
                          description: entry_can_admin
                        entry_can_invite:
                          type: boolean
                          description: entry_can_invite
                        has_cup:
                          type: boolean
                          description: has_cup
                        cup_league:
                          type: string
                          description: cup_league
                        cup_qualified:
                          type: string
                          description: cup_qualified
                        entry_rank:
                          type: integer
                          format: int32
                          description: entry_rank
                        entry_last_rank:
                          type: integer
                          format: int32
                          description: entry_last_rank
                    description: classic
                  h2h:
                    type: array
                    items: {}
                    description: h2h
                  cup:
                    type: object
                    properties:
                      matches:
                        type: array
                        items: {}
                        description: matches
                      status:
                        type: object
                        properties:
                          qualification_event:
                            type: string
                            description: qualification_event
                          qualification_numbers:
                            type: string
                            description: qualification_numbers
                          qualification_rank:
                            type: string
                            description: qualification_rank
                          qualification_state:
                            type: string
                            description: qualification_state
                        description: status
                      cup_league:
                        type: string
                        description: cup_league
                    description: cup
                  cup_matches:
                    type: array
                    items: {}
                    description: cup_matches
                description: leagues
              name:
                type: string
                description: name
              name_change_blocked:
                type: boolean
                description: name_change_blocked
              kit:
                type: string
                description: kit
              last_deadline_bank:
                type: string
                description: last_deadline_bank
              last_deadline_value:
                type: string
                description: last_deadline_value
              last_deadline_total_transfers:
                type: integer
                format: int32
                description: last_deadline_total_transfers
      summary: GetManager
      operationId: GetManager
      parameters:
        - name: managerId
          in: path
          required: true
          type: string
  /leagues-classic/{leagueID}/standings:
    post:
      responses:
        default:
          description: default
          schema: {}
      summary: GetLeagueStandings
      operationId: GetLeagueStandings
      parameters:
        - name: leagueID
          in: path
          required: true
          type: string
definitions: {}
parameters: {}
responses: {}
securityDefinitions: {}
security: []
tags: []

```